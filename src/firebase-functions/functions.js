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
    surname: newSurname,
  }).then(() => {
    console.log("updated user successfully");
  });
}

async function createPage(data) {
  let result = false;
  const functions = getFunctions(getApp(), "europe-west1");
  const createPage = httpsCallable(functions, "createPage");
  await createPage({
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

async function observePage(pid) {
  let result = false;
  const functions = getFunctions(getApp(), "europe-west1");
  const observePage = httpsCallable(functions, "observePage");
  await observePage({
    pid: pid,
  }).then((r) => {
    console.log("added page to observed successfully");
    result = r;
  });

  return result;
}
async function removeObservedPage(pid) {
  let result = false;
  const functions = getFunctions(getApp(), "europe-west1");
  const removeObservedPage = httpsCallable(functions, "removeObservedPage");
  await removeObservedPage({
    pid: pid,
  }).then((r) => {
    console.log("removed page from observed successfully");
    result = r;
  });

  return result;
}

async function changePageName(pid, newName) {
  let result = false;
  const functions = getFunctions(getApp(), "europe-west1");
  const changePageName = httpsCallable(functions, "changePageName");
  await changePageName({
    pid: pid,
    name: newName
  }).then((r) => {
    console.log("changed page name successfully");
    result = r;
  });

  return result;
}

async function updatePagePermissions(data) {
  let result = false;
  const functions = getFunctions(getApp(), "europe-west1");
  const updatePagePermissions = httpsCallable(functions, "updatePagePermissions");
  await updatePagePermissions({
    pName: data.pName,
    pid: data.pid,
    pagename: data.pagename,
    adminsToAdd: data.adminsToAdd,
    modsToAdd: data.modsToAdd,
    adminsToRemove: data.adminsToRemove,
    modsToRemove: data.modsToRemove,
    adminsInvitationsToRemove: data.adminsInvitationsToRemove,
    modsInvitationsToRemove: data.modsInvitationsToRemove,
  }).then((r) => {
    console.log("updated page permissions successfully");
    result = r;
  });

  return result;
}

async function acceptPageAdminInvitation(pid) {
  let result = false;
  const functions = getFunctions(getApp(), "europe-west1");
  const acceptPageAdminInvitation = httpsCallable(functions, "acceptPageAdminInvitation");
  await acceptPageAdminInvitation({
    pid: pid
  }).then((r) => {
    console.log("accepted page admin successfully");
    result = r;
  });

  return result;
}

async function acceptPageModInvitation(pid) {
  let result = false;
  const functions = getFunctions(getApp(), "europe-west1");
  const acceptPageModInvitation = httpsCallable(functions, "acceptPageModInvitation");
  await acceptPageModInvitation({
    pid: pid
  }).then((r) => {
    console.log("accepted page moderator successfully");
    result = r;
  });

  return result;
}

async function deletePage(pid) {
  let result = false;
  const functions = getFunctions(getApp(), "europe-west1");
  const deletePage = httpsCallable(functions, "deletePage");
  await deletePage({
    pid: pid
  }).then((r) => {
    console.log("deleted page successfully");
    result = r;
  });

  return result;
}

async function createGroup(data) {
  let result = false;
  const functions = getFunctions(getApp(), "europe-west1");
  const createGroup = httpsCallable(functions, "createGroup");
  await createGroup({
    name: data.name,
    groupname: data.groupname,
    description: data.description,
    categories: data.categories,
    type: data.type,
  }).then((r) => {
    console.log("created group successfully");
    result = r;
  });

  return result;
}

async function updateGroupPermissions(data) {
  let result = false;
  const functions = getFunctions(getApp(), "europe-west1");
  const updatePagePermissions = httpsCallable(functions, "updateGroupPermissions");
  await updatePagePermissions({
    gName: data.gName,
    gid: data.gid,
    groupname: data.groupname,
    adminsToAdd: data.adminsToAdd,
    modsToAdd: data.modsToAdd,
    adminsToRemove: data.adminsToRemove,
    modsToRemove: data.modsToRemove,
    adminsInvitationsToRemove: data.adminsInvitationsToRemove,
    modsInvitationsToRemove: data.modsInvitationsToRemove,
  }).then((r) => {
    console.log("updated group permissions successfully");
    result = r;
  });

  return result;
}

async function joinGroup(gid) {
  let result = false;
  const functions = getFunctions(getApp(), "europe-west1");
  const joinGroup = httpsCallable(functions, "joinGroup");
  await joinGroup({
    gid: gid,
  }).then((r) => {
    console.log("joined group successfully");
    result = r;
  });

  return result;
}

async function leaveGroup(gid) {
  let result = false;
  const functions = getFunctions(getApp(), "europe-west1");
  const leaveGroup = httpsCallable(functions, "leaveGroup");
  await leaveGroup({
    gid: gid,
  }).then((r) => {
    console.log("left group successfully");
    result = r;
  });

  return result;
}

async function acceptGroupAdminInvitation(gid) {
  let result = false;
  const functions = getFunctions(getApp(), "europe-west1");
  const acceptGroupAdminInvitation = httpsCallable(functions, "acceptGroupAdminInvitation");
  await acceptGroupAdminInvitation({
    gid: gid
  }).then((r) => {
    console.log("accepted group admin successfully");
    result = r;
  });

  return result;
}

async function acceptGroupModInvitation(gid) {
  let result = false;
  const functions = getFunctions(getApp(), "europe-west1");
  const acceptGroupModInvitation = httpsCallable(functions, "acceptGroupModInvitation");
  await acceptGroupModInvitation({
    gid: gid
  }).then((r) => {
    console.log("accepted group moderator successfully");
    result = r;
  });

  return result;
}

async function changeGroupName(gid, newName) {
  let result = false;
  const functions = getFunctions(getApp(), "europe-west1");
  const changeGroupName = httpsCallable(functions, "changeGroupName");
  await changeGroupName({
    gid: gid,
    name: newName
  }).then((r) => {
    console.log("changed group name successfully");
    result = r;
  });

  return result;
}

async function updateGroupMembers(groupInfo, data) {
  let result = false;
  const functions = getFunctions(getApp(), "europe-west1");
  const updateGroupMembers = httpsCallable(functions, "updateGroupMembers");
  await updateGroupMembers({
    gid: groupInfo.gid,
    gName: groupInfo.name,
    groupname: groupInfo.groupname,
    membersToRemove: data.membersToRemove,
    membersToAccept: data.membersToAccept,
    membersToDeny: data.membersToDeny,
    membersToUnblock: data.membersToUnblock,
  }).then((r) => {
    console.log("changed group name successfully");
    result = r;
  });

  return result;
}

export { userSignupSaveData, acceptFriend, requestFriend, removeFriend, observePerson, removeObservedPerson, blockPerson, unblockPerson, updateNameAndSurname, createPage, observePage, removeObservedPage, changePageName, updatePagePermissions, acceptPageAdminInvitation, acceptPageModInvitation, deletePage, createGroup, updateGroupPermissions, joinGroup, leaveGroup, acceptGroupAdminInvitation, acceptGroupModInvitation, changeGroupName, updateGroupMembers };
