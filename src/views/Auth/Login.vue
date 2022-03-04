<template>
  <body class="dark:bg-gray-800">
    <div class="bg-cover bg-center bg-no-repeat" style="background-image: url('/img/wallpaper.jpg')">
      <div class="h-screen w-screen flex flex-col backdrop-filter backdrop-blur-sm bg-gray-300 dark:bg-gray-700 dark:bg-opacity-75 bg-opacity-75 custom-scrollbar">
        <header class="relative flex justify-between w-full h-12 lg:h-16 mt-6 mb-3">
          <p class="self-end ml-7 lg:ml-20 text-2xl dark:text-white">New Network</p>
          <p class="self-end mr-5 lg:mr-14 text-2xl dark:text-white">Logowanie</p>
        </header>
        <main class="flex flex-grow flex-shrink flex-col h-screen md:flex-row items-center justify-evenly my-5 px-2 lg:px-20 overflow-x-hidden">
          <p class="text-3xl md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl my-10 lg:my-0 mx-5 lg:mr-20 text-center lg:text-left font-bold hidden lg:inline">
            TWÓJ INTERNET<br class="hidden lg:block" />
            JEST TUTAJ
          </p>
          <div class="w-full max-w-max-login rounded-lg shadow-xl border dark:border-gray-800 bg-gray-100 dark:bg-gray-900 p-7">
            <div class="flex flex-col">
              <p class="text-2xl">Logowanie</p>
              <div class="w-full h-px my-4 bg-gray-300 dark:bg-gray-700"></div>
              <div class="flex flex-col">
                <p class="label label-text">Email</p>
                <input class="input input-bordered focus:shadow-none mb-2 dark:bg-gray-800" type="email" name="email" v-model="formData.email" placeholder="Adres e-mail" />
                <p class="label label-text">Hasło</p>
                <input v-on:keyup.enter="login" class="input input-bordered focus:shadow-none dark:bg-gray-800" type="password" name="password" v-model="formData.password" placeholder="Hasło" />
                <div class="flex justify-end flex-shrink-0 mt-3 mb-4">
                  <a class="text-xs dark:text-gray-300 lg:hover:underline" href="">Przywróć hasło</a>
                </div>
                <button @click="login" class="h-10 bg-green-500 lg:hover:bg-green-600 transition-all rounded-lg text-white shadow-lg" type="submit">Zaloguj się</button>
              </div>
              <div class="w-full h-px my-4 bg-gray-300 dark:bg-gray-700"></div>
              <p class="text-sm mb-4">Pierwszy raz na naszej platformie?</p>
              <a class="w-full"><button @click="register" class="w-full h-10 bg-blue-500 lg:hover:bg-blue-600 transition-all rounded-lg text-white shadow-lg">Załóż konto</button></a>
            </div>
          </div>
        </main>
        <footer class="p-4 shadow md:flex md:items-center md:justify-between md:py-4 md:px-6 dark:bg-gray-800/50 bg-gray-800/40 text-white">
          <span class="text-sm sm:text-center">&copy; 2022 <a href="#" class="hover:underline" target="_blank">New Network</a>. All Rights Reserved.
          </span>
          <ul class="flex flex-wrap items-center mt-3 md:mt-0">
              <li>
                  <a href="#" class="mr-4 text-sm  hover:underline md:mr-6">Warunki użytkowania</a>
              </li>
              <li>
                  <a href="#" class="mr-4 text-sm  hover:underline md:mr-6">Polityka prywatności</a>
              </li>
              <li>
                  <a href="#" class="text-sm  hover:underline md:mr-6">O nas</a>
              </li>
          </ul>
      </footer>
      </div>
    </div>
  </body>
</template>
<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default {
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    register() {
      this.$router.push("/register");
    },
    async login() {
      await signInWithEmailAndPassword(getAuth(), this.formData.email, this.formData.password)
        .then(async (userCredential) => {
          window.location.href = window.location.href.substring(0, window.location.href.lastIndexOf("/") + 1) + "home";
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
        });
    },
  },
};
</script>
