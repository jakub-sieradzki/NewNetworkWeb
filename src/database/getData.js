import { splitArray } from "@/helpers/arrayHelpers";
import { getFirestore, collection, doc, getDoc, getDocs, query, where, orderBy, limit, FieldPath } from "firebase/firestore";

async function getAllPersonalPostsByUids(uids) {
  let postsData = [];
  if (uids.length > 0) {
    for (let i = 0; i < uids.length; i++) {
      const q = query(collection(getFirestore(), "posts"), where("uid", "==", uids[i]), where("visibility", "in", ["private", "public"]), orderBy("createdTimestamp", "desc"));
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
      userData.uid = doc.id;
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
  const q = query(collection(getFirestore(), "posts"), where("pid", "==", pid));

  await getDocs(q).then((docs) => {
    docs.forEach((doc) => {
      let post = doc.data();
      post.id = doc.id;
      pagePosts.push(post);
    });
  });

  return pagePosts;
}

async function getPagesInfo(pagesList) {
  let list = [];
  for (let i = 0; i < pagesList.length; i++) {
    let d = await getDoc(doc(getFirestore(), "pages", pagesList[i]));
    if (d.exists()) {
      let data = d.data();
      data.id = d.id;
      list.push(data);
    }
  }

  return list;
}

async function searchPagename(s) {
  let queryArray = [];
  const q = query(collection(getFirestore(), "pages"), where("pagename", ">=", s), where("pagename", "<=", s + "\uf8ff"));
  await getDocs(q).then((docs) => {
    docs.forEach((doc) => {
      let page = doc.data();
      page.id = doc.id;
      queryArray.push(page);
    });
  });
  return queryArray;
}

async function getPagePermissions(pid) {
  let permissions = false;
  await getDoc(doc(getFirestore(), "pages", pid, "details", "permissions")).then((doc) => {
    if (doc.exists()) {
      permissions = doc.data();
    }
  });
  return permissions;
}

async function getAllPagesPostsByPids(pids) {
  let postsData = [];
  if (pids.length > 0) {
    const q = query(collection(getFirestore(), "posts"), where("pid", "in", pids), orderBy("createdTimestamp", "desc"));
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

async function getGroupDataOnGroupname(groupname) {
  let groupData = null;
  const q = query(collection(getFirestore(), "groups"), where("groupname", "==", groupname));
  await getDocs(q).then((docs) => {
    docs.forEach((doc) => {
      groupData = doc.data();
      groupData.id = doc.id;
    });
  });
  return groupData;
}

async function getGroupsInfo(groupsList) {
  let list = [];
  for (let i = 0; i < groupsList.length; i++) {
    let d = await getDoc(doc(getFirestore(), "groups", groupsList[i]));
    if (d.exists()) {
      let data = d.data();
      data.id = d.id;
      list.push(data);
    }
  }

  return list;
}

async function getGroupPosts(gid) {
  let groupPosts = [];
  const q = query(collection(getFirestore(), "posts"), where("gid", "==", gid));

  await getDocs(q).then((docs) => {
    docs.forEach((doc) => {
      let post = doc.data();
      post.id = doc.id;
      groupPosts.push(post);
    });
  });

  return groupPosts;
}

async function getGroupPermissions(gid) {
  let permissions = false;
  await getDoc(doc(getFirestore(), "groups", gid, "details", "permissions")).then((doc) => {
    if (doc.exists()) {
      permissions = doc.data();
    }
  });
  return permissions;
}

async function getGroupMembers(gid) {
  let usersList = [];
  await getDoc(doc(getFirestore(), "groups", gid, "details", "members")).then((doc) => {
    if (doc.exists()) {
      usersList = doc.data().members;
    }
  });

  return usersList;
}

async function getUsersInfo(uids) {
  let usersInfo = [];
  let uidsArray = splitArray(uids, 10);
  console.log("uids array: ", uidsArray);
  for (let i = 0; i < uidsArray.length; i++) {
    console.log("uids array single: ", uidsArray[i]);
    const q = query(collection(getFirestore(), "users"), where("uid", "in", uidsArray[i]));
    await getDocs(q).then((docs) => {
      docs.forEach((doc) => {
        let d = doc.data();
        d.id = doc.id;
        usersInfo.push(d);
      });
    });
  }

  return usersInfo;
}

async function getGroupRequests(gid) {
  let usersList = [];
  await getDoc(doc(getFirestore(), "groups", gid, "details", "members_requests")).then((doc) => {
    if (doc.exists()) {
      usersList = doc.data().requests;
    }
  });

  return usersList;
}

async function getGroupUsersBlocked(gid) {
  let usersList = [];
  await getDoc(doc(getFirestore(), "groups", gid, "details", "members_blocked")).then((doc) => {
    if (doc.exists()) {
      usersList = doc.data().blocked;
    }
  });

  return usersList;
}

async function getGroupDocs(gid) {
  let groupDocs = {};
  await getDoc(doc(getFirestore(), "groups", gid, "details", "docs")).then((doc) => {
    if (doc.exists()) {
      groupDocs = doc.data();
    }
  });

  return groupDocs;
}

async function getAllGroupsPostsByGids(gids) {
  let postsData = [];
  if (gids.length > 0) {
    const q = query(collection(getFirestore(), "posts"), where("gid", "in", gids), orderBy("createdTimestamp", "desc"));
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

async function searchGroupname(s) {
  let queryArray = [];
  const q = query(collection(getFirestore(), "groups"), where("groupname", ">=", s), where("groupname", "<=", s + "\uf8ff"));
  await getDocs(q).then((docs) => {
    docs.forEach((doc) => {
      let page = doc.data();
      page.id = doc.id;
      queryArray.push(page);
    });
  });
  return queryArray;
}

export {
  getAllPersonalPostsByUids,
  getPublicPostsByUids,
  getUserData,
  getUserDetailsDoc,
  getUserDataOnUsername,
  getPostComments,
  getSubcomments,
  checkIfAnySubcomments,
  getPostsByHashtag,
  getPost,
  getPostsByUsername,
  searchUsername,
  getPageDataOnPagename,
  getPagePosts,
  getPagesInfo,
  searchPagename,
  getPagePermissions,
  getAllPagesPostsByPids,
  getGroupDataOnGroupname,
  getGroupsInfo,
  getGroupPosts,
  getGroupPermissions,
  getGroupMembers,
  getUsersInfo,
  getGroupRequests,
  getGroupUsersBlocked,
  getGroupDocs,
  getAllGroupsPostsByGids,
  searchGroupname,
};
