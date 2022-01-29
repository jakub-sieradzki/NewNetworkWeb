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
  const observePerson = httpsCallable(functions, "observePerson");
  await observePerson({
    observeUid: uid,
  }).then(() => {
    console.log("observed person successfully");
  });
}

async function removeObservedPerson(uid) {
  const functions = getFunctions(getApp(), "europe-west1");
  const removeObservedPerson = httpsCallable(functions, "removeObservedPerson");
  removeObservedPerson({
    observeUid: uid,
  }).then(() => {
    console.log("observed person removed successfully");
  });
}

async function blockPerson(uid) {
  const functions = getFunctions(getApp(), "europe-west1");
  const blockPerson = httpsCallable(functions, "blockPerson");
  blockPerson({
    requestedUid: uid,
  }).then(() => {
    console.log("blocked person successfully");
  });
}

async function unblockPerson(uid) {
  const functions = getFunctions(getApp(), "europe-west1");
  const unblockPerson = httpsCallable(functions, "unblockPerson");
  unblockPerson({
    requestedUid: uid,
  }).then(() => {
    console.log("blocked person successfully");
  });
}

export { userSignupSaveData, acceptFriend, requestFriend, removeFriend, observePerson, removeObservedPerson, blockPerson, unblockPerson }