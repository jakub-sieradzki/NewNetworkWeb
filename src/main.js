import { createApp } from "vue/dist/vue.esm-bundler";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import './index.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0WaVei1QKauXXsrZDSFCfpCgbhOpZDYQ",
  authDomain: "new-network-71b2a.firebaseapp.com",
  projectId: "new-network-71b2a",
  storageBucket: "new-network-71b2a.appspot.com",
  messagingSenderId: "191694055537",
  appId: "1:191694055537:web:ad5feb1f4db056b13e53d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  createApp(App).use(store).use(router).mount("#app");
});