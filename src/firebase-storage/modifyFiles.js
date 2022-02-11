import { getStorage, ref, uploadBytes, deleteObject } from "firebase/storage";
import { getProfileImagesList, getProfileBackgroundsList, getPageProfileImagesList, getPageBackgroundsList } from "./getFiles";

async function uploadPostImages(uid, storageFilesNames, blobs) {
  for (let i = 0; i < blobs.length; i++) {
    await uploadBytes(ref(getStorage(), uid + "/" + storageFilesNames[i]), blobs[i]).then((snapshot) => {
      console.log(i, ": ", snapshot);
    });
  }
}

async function removePostImages(uid, filesNames) {
  for (let i = 0; i < filesNames.length; i++) {
    await deleteObject(ref(getStorage(), uid + "/" + filesNames[i]))
      .then(() => {
        console.log("Photo: " + filesNames[i] + " removed successfully");
      })
      .catch((error) => {
        console.log("Error removing photo: " + filesNames[i] + ": ", error);
      });
  }
}

async function removeAllProfileImages(uid) {
  let filesFullPath = await getProfileImagesList(uid);
  for (let i = 0; i < filesFullPath.length; i++) {
    await deleteObject(ref(getStorage(), filesFullPath[i])).then(() => {
      console.log("Deleted all old profile images successfully");
    });
  }
}

async function uploadProfileImage(uid, blob, fileName) {
  let snap = null;
  await uploadBytes(ref(getStorage(), uid + "/profileImage/" + fileName), blob).then((snapshot) => {
    console.log("Uploaded profile image");
    snap = snapshot;
  });

  return snap;
}

async function removeAllProfileBackgrounds(uid) {
  let filesFullPath = await getProfileBackgroundsList(uid);
  for (let i = 0; i < filesFullPath.length; i++) {
    await deleteObject(ref(getStorage(), filesFullPath[i])).then(() => {
      console.log("Deleted all old profile backgrounds successfully");
    });
  }
}

async function uploadProfileBackground(uid, blob, fileName) {
  let snap = null;
  await uploadBytes(ref(getStorage(), uid + "/profileBackground/" + fileName), blob).then((snapshot) => {
    console.log("Uploaded profile background");
    snap = snapshot;
  });

  return snap;
}

async function uploadPageProfileImage(pid, blob, fileName) {
  let snap = null;
  await uploadBytes(ref(getStorage(), "pages/" + pid + "/profileImage/" + fileName), blob).then((snapshot) => {
    console.log("Uploaded page profile image");
    snap = snapshot;
  });

  return snap;
}
async function uploadPageBackground(pid, blob, fileName) {
  let snap = null;
  await uploadBytes(ref(getStorage(), "pages/" + pid + "/profileBackground/" + fileName), blob).then((snapshot) => {
    console.log("Uploaded profile background");
    snap = snapshot;
  });

  return snap;
}

async function uploadPagePostImages(pid, storageFilesNames, blobs) {
  for (let i = 0; i < blobs.length; i++) {
    await uploadBytes(ref(getStorage(), "pages/" + pid + "/" + storageFilesNames[i]), blobs[i]).then((snapshot) => {
      console.log(i, ": ", snapshot);
    });
  }
}

async function removeAllPageProfileImages(pid) {
  let filesFullPath = await getPageProfileImagesList(pid);
  for (let i = 0; i < filesFullPath.length; i++) {
    await deleteObject(ref(getStorage(), filesFullPath[i])).then(() => {
      console.log("Deleted all old profile images successfully");
    });
  }
}

async function removeAllPageBackgrounds(pid) {
  let filesFullPath = await getPageBackgroundsList(pid);
  for (let i = 0; i < filesFullPath.length; i++) {
    await deleteObject(ref(getStorage(), filesFullPath[i])).then(() => {
      console.log("Deleted all old pages backgrounds successfully");
    });
  }
}

export { uploadPostImages, removePostImages, removeAllProfileImages, uploadProfileImage, removeAllProfileBackgrounds, uploadProfileBackground, uploadPageProfileImage, uploadPageBackground, uploadPagePostImages, removeAllPageProfileImages, removeAllPageBackgrounds };
