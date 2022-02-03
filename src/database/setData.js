import { getFirestore, collection, doc, addDoc, writeBatch, updateDoc, serverTimestamp, deleteDoc, runTransaction, deleteField, increment } from "firebase/firestore";

async function sendPost(data) {
  let sent = false;
  await addDoc(collection(getFirestore(), "posts"), {
    uid: data.uid,
    username: data.username,
    name: data.name,
    surname: data.surname,
    content: data.content,
    createdTimestamp: serverTimestamp(),
    files: data.files,
    shareId: data.shareId,
    categories: data.categories,
    ratings: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      count: 0,
    },
    type: data.type,
    hashtags: data.hashtags,
    visibility: data.visibility,
  }).then(() => {
    sent = true;
    console.log("success");
  });

  return sent;
}

async function deletePost(postId) {
  let deleted = false;
  await deleteDoc(doc(getFirestore(), "posts", postId)).then(() => {
    deleted = true;
  });

  return deleted;
}

async function sendComment(postId, data) {
  let sent = false;
  await addDoc(collection(getFirestore(), "posts", postId, "comments"), {
    content: data.content,
    username: data.username,
    uid: data.uid,
    createdTimestamp: serverTimestamp(),
    ratings: {
      upvotes: 0,
      downvotes: 0,
      sum: 0,
    },
  }).then(() => {
    sent = true;
  });

  return sent;
}

async function sendSubcomment(postId, commentId, data) {
  let sent = false;
  await addDoc(collection(getFirestore(), "posts", postId, "comments", commentId, "subcomments"), {
    content: data.content,
    username: data.username,
    uid: data.uid,
    createdTimestamp: serverTimestamp(),
    ratings: {
      upvotes: 0,
      downvotes: 0,
      sum: 0,
    },
  }).then(() => {
    sent = true;
  });

  return sent;
}

async function addPostReaction(uid, postId, rating) {
  try {
    await runTransaction(getFirestore(), async (transaction) => {
      // updating users' history of rated posts
      transaction.update(doc(getFirestore(), "users", uid, "details", "posts"), {
        ["rated." + postId]: rating,
      });
      //updating rating for post
      transaction.update(doc(getFirestore(), "posts", postId), {
        ["ratings." + rating]: increment(1),
        ["ratings.count"]: increment(1),
      });
    });
  } catch (e) {
    console.log(e);
  }
}

async function removePostReaction(uid, postId, rating) {
  try {
    await runTransaction(getFirestore(), async (transaction) => {
      // updating users' history of rated posts
      transaction.update(doc(getFirestore(), "users", uid, "details", "posts"), {
        ["rated." + postId]: deleteField(),
      });
      //updating rating for post
      transaction.update(doc(getFirestore(), "posts", postId), {
        ["ratings." + rating]: increment(-1),
        ["ratings.count"]: increment(-1),
      });
    });
  } catch (e) {
    console.log(e);
  }
}

async function updatePostReaction(uid, postId, rating, ratingToRemove) {
  try {
    await runTransaction(getFirestore(), async (transaction) => {
      // updating users' history of rated posts
      transaction.update(doc(getFirestore(), "users", uid, "details", "posts"), {
        ["rated." + postId]: rating,
      });
      //updating rating for post
      transaction.update(doc(getFirestore(), "posts", postId), {
        ["ratings." + ratingToRemove]: increment(-1),
        ["ratings." + rating]: increment(1),
      });
    });
  } catch (e) {
    console.log(e);
  }
}

async function markNotificationAsRead(uid, notificationId) {
  const notifiRef = doc(getFirestore(), "users", uid, "notifications", notificationId);
  updateDoc(notifiRef, {
    read: true,
  })
    .then(() => {
      console.log("sent update notifi");
    })
    .catch((err) => {
      console.log(err);
    });
}

async function updateUserDescription(uid, newDescription) {
  const userRef = doc(getFirestore(), "users", uid);
  await updateDoc(userRef, {
    description: newDescription,
  })
    .then(() => {
      console.log("Updated description successfully");
    })
    .catch((err) => {
      console.log(err);
    });
}

async function addCommentReaction(uid, postId, commentId, subcommentId, value) {
  const userComRef = doc(getFirestore(), "users", uid, "details", "comments");
  const comRef = doc(getFirestore(), "posts", postId, "comments", commentId);

  const batch = writeBatch(getFirestore());

  if (subcommentId == commentId) {
    batch.update(userComRef, {
      ["rated." + postId + "-" + commentId]: value,
    });
    if (value == 1) {
      batch.update(comRef, {
        ["ratings.upvotes"]: increment(1),
        ["ratings.sum"]: increment(1),
      });
    } else {
      batch.update(comRef, {
        ["ratings.downvotes"]: increment(1),
        ["ratings.sum"]: increment(-1),
      });
    }
  } else {
    batch.update(userComRef, {
      ["rated." + postId + "-" + commentId + "-" + subcommentId]: value,
    });
    const subcomRef = doc(getFirestore(), "posts", postId, "comments", commentId, "subcomments", subcommentId);
    if (value == 1) {
      batch.update(subcomRef, {
        ["ratings.upvotes"]: increment(1),
        ["ratings.sum"]: increment(1),
      });
    } else {
      batch.update(subcomRef, {
        ["ratings.downvotes"]: increment(1),
        ["ratings.sum"]: increment(-1),
      });
    }
  }

  let result;
  await batch
    .commit()
    .then(() => {
      console.log("added comment reaction successfully");
      result = true;
    })
    .catch((err) => {
      console.log("Error adding comment reaction: ", err);
      result = false;
    });

  return result;
}

async function updateCommentReaction(uid, postId, commentId, subcommentId, value) {
  const userComRef = doc(getFirestore(), "users", uid, "details", "comments");
  const comRef = doc(getFirestore(), "posts", postId, "comments", commentId);

  const batch = writeBatch(getFirestore());

  if (subcommentId == commentId) {
    batch.update(userComRef, {
      ["rated." + postId + "-" + commentId]: value,
    });
    if (value == 1) {
      batch.update(comRef, {
        ["ratings.upvotes"]: increment(1),
        ["ratings.downvotes"]: increment(-1),
        ["ratings.sum"]: increment(2),
      });
    } else {
      batch.update(comRef, {
        ["ratings.upvotes"]: increment(-1),
        ["ratings.downvotes"]: increment(1),
        ["ratings.sum"]: increment(-2),
      });
    }
  } else {
    batch.update(userComRef, {
      ["rated." + postId + "-" + commentId + "-" + subcommentId]: value,
    });
    const subcomRef = doc(getFirestore(), "posts", postId, "comments", commentId, "subcomments", subcommentId);
    if (value == 1) {
      batch.update(subcomRef, {
        ["ratings.upvotes"]: increment(1),
        ["ratings.downvotes"]: increment(-1),
        ["ratings.sum"]: increment(2),
      });
    } else {
      batch.update(subcomRef, {
        ["ratings.upvotes"]: increment(-1),
        ["ratings.downvotes"]: increment(1),
        ["ratings.sum"]: increment(-2),
      });
    }
  }

  let result;
  await batch
    .commit()
    .then(() => {
      console.log("updated comment reaction successfully");
      result = true;
    })
    .catch((err) => {
      console.log("Error updating comment reaction: ", err);
      result = false;
    });
  return result;
}

async function removeCommentReaction(uid, postId, commentId, subcommentId, value) {
  const userComRef = doc(getFirestore(), "users", uid, "details", "comments");
  const comRef = doc(getFirestore(), "posts", postId, "comments", commentId);

  const batch = writeBatch(getFirestore());

  if (subcommentId == commentId) {
    batch.update(userComRef, {
      ["rated." + postId + "-" + commentId]: deleteField(),
    });
    if (value == 1) {
      batch.update(comRef, {
        ["ratings.upvotes"]: increment(-1),
        ["ratings.sum"]: increment(-1),
      });
    } else {
      batch.update(comRef, {
        ["ratings.downvotes"]: increment(-1),
        ["ratings.sum"]: increment(1),
      });
    }
  } else {
    batch.update(userComRef, {
      ["rated." + postId + "-" + commentId + "-" + subcommentId]: deleteField(),
    });
    const subcomRef = doc(getFirestore(), "posts", postId, "comments", commentId, "subcomments", subcommentId);
    if (value == 1) {
      batch.update(subcomRef, {
        ["ratings.upvotes"]: increment(-1),
        ["ratings.sum"]: increment(-1),
      });
    } else {
      batch.update(subcomRef, {
        ["ratings.downvote"]: increment(-1),
        ["ratings.sum"]: increment(1),
      });
    }
  }
  let result;
  await batch
    .commit()
    .then(() => {
      console.log("remove comment reaction successfully");
      result = true;
    })
    .catch((err) => {
      console.log("Error removing comment reaction: ", err);
      result = false;
    });

  return result;
}

async function deleteComment(postId, commentId, subcommentId) {
  let deleted = false;
  if(commentId == subcommentId) {
    await deleteDoc(doc(getFirestore(), "posts", postId, "comments", commentId)).then(() => {
      deleted = true;
    });
  } else {
    await deleteDoc(doc(getFirestore(), "posts", postId, "comments", commentId, "subcomments", subcommentId)).then(() => {
      deleted = true;
    });
  }

  return deleted;
}

export { sendPost, deletePost, sendComment, sendSubcomment, addPostReaction, removePostReaction, updatePostReaction, markNotificationAsRead, updateUserDescription, addCommentReaction, updateCommentReaction, removeCommentReaction, deleteComment };
