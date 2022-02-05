<template>
  <body class="dark:bg-gray-800">
    <div class="bg-cover bg-center bg-no-repeat" style="background-image: url('/img/wallpaper.jpg')">
      <div class="sm:h-screen w-screen flex flex-col backdrop-filter backdrop-blur-sm dark:bg-gray-800 dark:bg-opacity-75 bg-opacity-75 custom-scrollbar">
        <header class="h-16 w-full flex flex-shrink-0 justify-center md:justify-start">
          <p class="text-2xl self-end md:pl-20 md:text-left">New Network</p>
        </header>
        <main class="flex flex-grow flex-shrink flex-col h-screen md:flex-row items-center md:justify-evenly my-5 px-2 lg:px-20 overflow-x-hidden">
          <p class="text-3xl md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl my-10 lg:my-0 mx-5 lg:mr-20 text-center lg:text-left font-bold">
            TWÓJ INTERNET<br class="hidden lg:block" />
            JEST TUTAJ
          </p>
          <div class="w-full md:w-lg-login rounded-lg shadow-xl border dark:border-gray-800 bg-gray-100 dark:bg-gray-800 p-5 sm:p-7 md:p-11">
            <div class="flex flex-col">
              <p class="text-xl font-bold mb-5">Logowanie</p>
              <div class="flex flex-col">
                <input class="input input-bordered focus:shadow-none mb-2 dark:bg-gray-900" type="email" name="email" v-model="formData.email" placeholder="Adres e-mail" />
                <input v-on:keyup.enter="login" class="input input-bordered focus:shadow-none dark:bg-gray-900" type="password" name="password" v-model="formData.password" placeholder="Hasło" />
                <div class="flex justify-end flex-shrink-0 mt-3 mb-4">
                  <a class="text-xs text-gray-300 lg:hover:underline" href="">Przywróć hasło</a>
                </div>
                <button @click="login" class="h-10 bg-green-500 lg:hover:bg-green-600 transition-all rounded-lg text-white shadow-lg" type="submit">Zaloguj się</button>
              </div>
              <div class="w-full h-px mt-4 mb-4 bg-gray-300 dark:bg-gray-700"></div>
              <p class="text-sm mb-4">Pierwszy raz na naszej platformie?</p>
              <a class="w-full"><button @click="register" class="w-full h-10 bg-blue-500 lg:hover:bg-blue-600 transition-all rounded-lg text-white shadow-lg">Załóż konto</button></a>
            </div>
          </div>
        </main>
        <footer class="mt-10 md:mt-0 py-5 md:py-0 md:h-16 w-full px-10 flex flex-shrink-0 items-center lg:justify-end shadow-inner bg-white bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-25 overflow-x-scroll md:overflow-hidden">
          <div class="flex gap-6 md:gap-8 flex-shrink-0">
            <p>&copy; New Network 2021</p>
            <a class="lg:hover:underline" href="">Warunki użytkowania</a>
            <a class="lg:hover:underline" href="">Polityka prywatności</a>
            <a class="lg:hover:underline" href="">O nas</a>
          </div>
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
