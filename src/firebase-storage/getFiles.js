import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";

async function getProfileImageUrl(uid) {
  let profileImageFullPath = null;
  const profileImageDirectoryRef = ref(getStorage(), uid + "/profileImage");
  await listAll(profileImageDirectoryRef).then((res) => {
    for (let item of res.items) {
      profileImageFullPath = item.fullPath;
      break;
    }
  });
  let imageUrl = null;
  if (profileImageFullPath != null) {
    await getDownloadURL(ref(getStorage(), profileImageFullPath))
      .then((url) => {
        imageUrl = url;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return imageUrl;
}

async function getProfileBackgroundUrl(uid) {
  let profileBackgroundFullPath = null;
  const profileBackgroundDirectoryRef = ref(getStorage(), uid + "/profileBackground");
  await listAll(profileBackgroundDirectoryRef).then((res) => {
    for (let item of res.items) {
      profileBackgroundFullPath = item.fullPath;
      break;
    }
  });
  let imageUrl = null;
  if (profileBackgroundFullPath != null) {
    await getDownloadURL(ref(getStorage(), profileBackgroundFullPath))
      .then((url) => {
        imageUrl = url;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return imageUrl;
}

async function getPostImagesUrls(uid, pathList) {
  let urls = [];
  for (let i = 0; i < pathList.length; i++) {
    await getDownloadURL(ref(getStorage(), uid + "/" + pathList[i])).then((url) => {
      urls.push(url);
    });
  }

  return urls;
}

async function getProfileImagesList(uid) {
  let filesFullPath = [];
  const listRef = ref(getStorage(), uid + "/profileImage");
  await listAll(listRef).then((res) => {
    res.items.forEach((item) => {
      filesFullPath.push(item.fullPath);
    });
  });

  return filesFullPath;
}

async function getProfileBackgroundsList(uid) {
  let filesFullPath = [];
  const listRef = ref(getStorage(), uid + "/profileBackground");
  await listAll(listRef).then((res) => {
    res.items.forEach((item) => {
      filesFullPath.push(item.fullPath);
    });
  });

  return filesFullPath;
}

export { getProfileImageUrl, getPostImagesUrls, getProfileImagesList, getProfileBackgroundUrl, getProfileBackgroundsList };
