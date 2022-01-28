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

export { userSignupSaveData }