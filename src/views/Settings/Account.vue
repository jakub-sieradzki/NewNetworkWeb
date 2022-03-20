<template>
  <div class="border dark:border-gray-800 rounded-lg flex flex-col gap-5 py-5 px-6">
    <p class="text font-semibold">Dane logowania</p>
    <div class="flex flex-col gap-3">
      <p class="text-sm">E-mail</p>
      <div class="flex gap-3 items-center">
        <input v-model="email" type="email" placeholder="jan.kowalski@example.com" class="input focus:shadow-none w-64 dark:bg-gray-800 bg-gray-100" />
        <div @click="updateEmail" class="py-2 px-3 h-9 bg-sky-500 text-white rounded-md cursor-pointer hover:bg-sky-600 transition text-sm text-center items-center justify-center">
          <p class="text-center items-center justify-center">Zmień adres e-mail</p>
        </div>
      </div>
      <p class="text-sm mt-4">Hasło</p>
      <div class="flex gap-3 items-center">
        <input v-model="password" type="password" placeholder="Podaj nowe hasło" class="input focus:shadow-none w-64 dark:bg-gray-800 bg-gray-100" />
        <div @click="updatePassword" class="py-2 px-3 h-9 bg-sky-500 text-white rounded-md cursor-pointer hover:bg-sky-600 transition text-sm text-center items-center justify-center">
          <p class="text-center items-center justify-center">Zmień hasło</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getAuth, sendEmailVerification, updateEmail, updatePassword } from "@firebase/auth";
import { saveNewEmail } from "@/firebase-functions/functions";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async updateEmail() {
      await updateEmail(getAuth().currentUser, this.email)
        .then(async () => {
          saveNewEmail();
          alert("Pomyślnie zaktualizowano adres email");
        })
        .catch((err) => {
          alert("Wystąpił błąd. Wylogowanie i ponowne zalogowanie się do platformy może pomóc");
        });
    },
    async updatePassword() {
      updatePassword(getAuth().currentUser, this.password)
        .then(() => {
          alert("Pomyślnie zaktualizowano hasło");
        })
        .catch((error) => {
          alert("Wystąpił błąd przy zmianie hasła. Wylogowanie i ponowne zalogowanie się może pomóc");
        });
    },
  },
  mounted() {
    this.email = getAuth().currentUser.email;
  },
};
</script>
