import { getFirestore, collection, doc, getDoc, getDocs, query, where, orderBy, limit } from "firebase/firestore";

async function queryPostsForHomePage(uids) {
  let postsData = [];
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
  return postsData;
}

async function getUserData(uid) {
  let data = false;
  await getDoc(doc(getFirestore(), "users", uid))
    .then((doc) => {
      data = doc.data();
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
      console.log(docs.empty);
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
  const q = query(collection(getFirestore(), "posts"), where("hashtags", "array-contains", hashtag), orderBy("createdTimestamp", "desc"));
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

export { queryPostsForHomePage, getUserData, getUserDetailsDoc, getUserDataOnUsername, getPostComments, getSubcomments, checkIfAnySubcomments, getPostsByHashtag, getPost };
