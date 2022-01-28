import { getFirestore, collection, setDoc, doc, getDoc, getDocs, addDoc, document, query, where, orderBy, serverTimestamp, deleteDoc, runTransaction, deleteField, increment } from "firebase/firestore";

function updateProfileImageUrl(uid, url) {
  setDoc(
    doc(getFirestore(), "users", uid),
    {
      profileImageUrl: url,
    },
    { merge: true }
  ).then(() => {
    console.log("success");
  });
}

async function sendPost(data) {
  let sent = false;
  await addDoc(collection(getFirestore(), "posts"), {
    uid: data.uid,
    username: data.username,
    name: data.name,
    surname: data.surname,
    profileImage: data.profileImage,
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

export { updateProfileImageUrl, sendPost, deletePost, sendComment, sendSubcomment, addPostReaction, removePostReaction, updatePostReaction, markNotificationAsRead };
