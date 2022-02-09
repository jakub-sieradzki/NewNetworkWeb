import { getApp } from "firebase/app";
import { getFunctions, httpsCallable } from "firebase/functions";

async function userSignupSaveData(data) {
  const functions = getFunctions(getApp(), "europe-west1");
  const userSignupSaveData = httpsCallable(functions, "userSignupSaveData");
  await userSignupSaveData({
    uid: data.uid,
    name: data.name,
    surname: data.surname,
    username: data.username,
    gender: data.gender,
    birthyear: data.birthyear,
  }).catch((err) => {
    console.log(err);
  });
}

async function acceptFriend(uid) {
  const functions = getFunctions(getApp(), "europe-west1");
  const acceptFriend = httpsCallable(functions, "acceptFriend");
  await acceptFriend({
    acceptedUid: uid,
  }).then(() => {
    console.log("accepted successfully");
  });
}

async function requestFriend(uid) {
  const functions = getFunctions(getApp(), "europe-west1");
  const requestFriend = httpsCallable(functions, "requestFriend");
  await requestFriend({
    requestedUid: uid,
  }).then(() => {
    console.log("send invitation successfully");
  });
}

async function removeFriend(uid) {
  const functions = getFunctions(getApp(), "europe-west1");
  const requestFriend = httpsCallable(functions, "removeFriend");
  await requestFriend({
    friendToRemoveUid: uid,
  }).then(() => {
    console.log("removed friend successfully");
  });
}

async function observePerson(uid) {
  const functions = getFunctions(getApp(), "europe-west1");
  const observeUser = httpsCallable(functions, "observeUser");
  await observeUser({
    observeUid: uid,
  }).then(() => {
    console.log("observed user successfully");
  });
}

async function removeObservedPerson(uid) {
  const functions = getFunctions(getApp(), "europe-west1");
  const removeObservedUser = httpsCallable(functions, "removeObservedUser");
  removeObservedUser({
    observeUid: uid,
  }).then(() => {
    console.log("observed user removed successfully");
  });
}

async function blockPerson(uid) {
  const functions = getFunctions(getApp(), "europe-west1");
  const blockUser = httpsCallable(functions, "blockUser");
  await blockUser({
    requestedUid: uid,
  }).then(() => {
    console.log("blocked user successfully");
  });
}

async function unblockPerson(uid) {
  const functions = getFunctions(getApp(), "europe-west1");
  const unblockUser = httpsCallable(functions, "unblockUser");
  await unblockUser({
    requestedUid: uid,
  }).then(() => {
    console.log("unblocked user successfully");
  });
}

async function updateNameAndSurname(newName, newSurname) {
  const functions = getFunctions(getApp(), "europe-west1");
  const updateNameAndSurname = httpsCallable(functions, "updateNameAndSurname");
  await updateNameAndSurname({
    name: newName,
    surname: newSurname
  }).then(() => {
    console.log("updated user successfully");
  });
}

async function createPage(data) {
  let result = false;
  const functions = getFunctions(getApp(), "europe-west1");
  const updateNameAndSurname = httpsCallable(functions, "createPage");
  await updateNameAndSurname({
    name: data.name,
    pagename: data.pagename,
    description: data.description,
    categories: data.categories,
  }).then((r) => {
    console.log("created page successfully");
    result = r;
  });

  return result;
}

export { userSignupSaveData, acceptFriend, requestFriend, removeFriend, observePerson, removeObservedPerson, blockPerson, unblockPerson, updateNameAndSurname, createPage };
