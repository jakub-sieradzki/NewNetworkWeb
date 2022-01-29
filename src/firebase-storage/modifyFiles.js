import { getStorage, ref, uploadBytes, deleteObject } from "firebase/storage";

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

async function uploadProfileImage(uid, file) {
  let snap = null;
  const fileExtension = file.name.substring(file.name.lastIndexOf("."));
  await uploadBytes(ref(getStorage(), uid + "/profileImage" + fileExtension), file).then((snapshot) => {
    console.log("Uploaded profile image");
    snap = snapshot;
  });

  return snap;
}

export { uploadPostImages, removePostImages, uploadProfileImage };
