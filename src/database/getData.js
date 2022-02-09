import { getFirestore, collection, doc, getDoc, getDocs, query, where, orderBy, limit } from "firebase/firestore";

async function getAllPostsByUids(uids) {
  let postsData = [];
  if (uids.length > 0) {
    const q = query(collection(getFirestore(), "posts"), where("uid", "in", uids), orderBy("createdTimestamp", "desc"));
    await getDocs(q)
      .then((docs) => {
        docs.forEach((doc) => {
          let postData = doc.data();
          postData.id = doc.id;
          postsData.push(postData);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return postsData;
}

async function getPublicPostsByUids(uids) {
  let postsData = [];
  if (uids.length > 0) {
    const q = query(collection(getFirestore(), "posts"), where("uid", "in", uids), where("visibility", "==", "public"), orderBy("createdTimestamp", "desc"));
    await getDocs(q)
      .then((docs) => {
        docs.forEach((doc) => {
          let postData = doc.data();
          postData.id = doc.id;
          postsData.push(postData);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return postsData;
}

async function getUserData(uid) {
  let data = false;
  await getDoc(doc(getFirestore(), "users", uid))
    .then((doc) => {
      data = doc.data();
      data.uid = doc.id;
    })
    .catch((err) => {
      console.log(err);
    });

  return data;
}

async function getUserDetailsDoc(uid, docId) {
  let data = null;
  await getDoc(doc(getFirestore(), "users", uid, "details", docId))
    .then((doc) => {
      data = doc.data();
    })
    .catch((err) => {
      console.log(err);
    });

  return data;
}

async function getUserDataOnUsername(username) {
  let userData = null;
  const q = query(collection(getFirestore(), "users"), where("username", "==", username));
  await getDocs(q).then((docs) => {
    docs.forEach((doc) => {
      userData = doc.data();
      userData.id = doc.id;
    });
  });
  return userData;
}

async function getPostComments(postId) {
  let comments = [];
  const q = query(collection(getFirestore(), "posts", postId, "comments"), orderBy("createdTimestamp", "desc"));
  await getDocs(q).then((docs) => {
    docs.forEach((doc) => {
      let singleDoc = doc.data();
      singleDoc.id = doc.id;
      comments.push(singleDoc);
    });
  });

  return comments;
}

async function getSubcomments(postId, commentId) {
  let subcomments = [];
  const q = query(collection(getFirestore(), "posts", postId, "comments", commentId, "subcomments"), orderBy("createdTimestamp", "asc"));
  await getDocs(q).then((docs) => {
    docs.forEach((doc) => {
      let singleDoc = doc.data();
      singleDoc.id = doc.id;
      subcomments.push(singleDoc);
    });
  });

  return subcomments;
}

async function checkIfAnySubcomments(postId, commentId) {
  let check = null;
  const q = query(collection(getFirestore(), "posts", postId, "comments", commentId, "subcomments"), limit(1));
  await getDocs(q)
    .then((docs) => {
      check = !docs.empty;
    })
    .catch((err) => {
      console.log(err);
      check = false;
    });

  return check;
}

async function getPostsByHashtag(hashtag) {
  let postsData = [];
  const q = query(collection(getFirestore(), "posts"), where("hashtags", "array-contains", hashtag), where("visibility", "==", "public"), orderBy("createdTimestamp", "desc"));
  await getDocs(q).then((docs) => {
    docs.forEach((doc) => {
      let docData = doc.data();
      docData.id = doc.id;
      postsData.push(docData);
    });
  });

  return postsData;
}

async function getPost(postId) {
  let post = false;
  await getDoc(doc(getFirestore(), "posts", postId)).then((doc) => {
    if (doc.exists()) {
      post = doc.data();
      post.id = doc.id;
    }
  });
  return post;
}

async function getPostsByUsername(username) {
  let docsPosts = [];
  const q = query(collection(getFirestore(), "posts"), where("username", "==", username, orderBy("createdTimestamp", "desc")));
  await getDocs(q).then((docs) => {
    docs.forEach((doc) => {
      let docData = doc.data();
      docData.id = doc.id;
      docsPosts.push(docData);
    });
  });

  return docsPosts;
}

async function searchUsername(s) {
  let queryArray = [];
  const q = query(collection(getFirestore(), "users"), where("username", ">=", s), where("username", "<=", s + "\uf8ff"));
  await getDocs(q).then((docs) => {
    docs.forEach((doc) => {
      let user = doc.data();
      user.id = doc.id;
      queryArray.push(user);
    });
  });
  return queryArray;
}

async function getPageDataOnPagename(pagename) {
  let pageData = null;
  const q = query(collection(getFirestore(), "pages"), where("pagename", "==", pagename));
  await getDocs(q).then((docs) => {
    docs.forEach((doc) => {
      pageData = doc.data();
      pageData.id = doc.id;
    });
  });
  return pageData;
}

async function getPagePosts(pid) {
  let pagePosts = [];
  const pagePostsRef = collection(getFirestore(), "pages", pid, "posts");

  await getDocs(pagePostsRef).then((docs) => {
    docs.forEach((doc) => {
      let post = doc.data();
      post.id = doc.id;
      pagePosts.push(post);
    });
  });

  return pagePosts;
}

export { getAllPostsByUids, getPublicPostsByUids, getUserData, getUserDetailsDoc, getUserDataOnUsername, getPostComments, getSubcomments, checkIfAnySubcomments, getPostsByHashtag, getPost, getPostsByUsername, searchUsername, getPageDataOnPagename, getPagePosts };
