import { getStorage, ref, getDownloadURL } from "firebase/storage";

async function getProfileImageUrl(path) {
  let imageUrl = "";
  await getDownloadURL(ref(getStorage(), path))
    .then((url) => {
      imageUrl = url;
    })
    .catch((err) => {
      console.log(err);
    });
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

export { getProfileImageUrl, getPostImagesUrls };
