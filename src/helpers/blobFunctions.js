async function getBlobFromURL(url) {
  return await fetch(url).then((r) => r.blob());
}

async function getBlobFullName(url) {
  const fileName = url.slice(url.lastIndexOf("/") + 1);
  let blob = await getBlobFromURL(url);
  console.log(blob.type);
  const fileType = blob.type.slice(blob.type.indexOf("/") + 1);
  return fileName + "." + fileType;
}

export { getBlobFromURL, getBlobFullName };
