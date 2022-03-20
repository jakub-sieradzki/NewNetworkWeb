<template>
  <div class="flex flex-col gap-3">
    <div class="h-24 bg-gray-100 dark:bg-gray-800 rounded-lg py-2 px-4 md:px-7 flex flex-shrink-0 items-center justify-between">
      <div class="flex items-center gap-5 flex-shrink-0">
        <div class="hidden sm:flex rounded-full h-16 w-16 bg-cover bg-center" :style="{ backgroundImage: `url(${this.profileImage})` }"></div>
        <div class="flex flex-col">
          <p class="text-lg font-semibold">{{ name }} {{ surname }}</p>
          <p class="text-sm">@{{ username }}</p>
        </div>
      </div>
      <div class="flex items-center text-sm p-3 rounded-md hover:bg-gray-200/70 gap-2.5 cursor-pointer transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
          <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
        </svg>
        <p class="hidden md:flex">Edytuj profil</p>
      </div>
    </div>
    <div class="w-full h-96 border dark:border-gray-800 rounded-lg flex flex-col gap-5 py-5 px-6">
      <p class="text font-semibold">Informacje o profilu</p>
      <div class="flex flex-col gap-5">
        <div class="flex flex-col gap-3">
          <p class="text-sm">Płeć</p>
          <select v-model="gender" class="select focus:shadow-none w-52 dark:bg-gray-800 bg-gray-100">
            <option value="" selected disabled hidden>Nie wybrano</option>
            <option value="0">Kobieta</option>
            <option value="1">Mężczyzna</option>
            <option value="2">Nie chcę podawać</option>
          </select>
        </div>
        <div class="flex flex-col gap-3">
          <p class="text-sm">Rok urodzenia</p>
          <input v-model="birthyear" type="number" min="1900" max="2099" placeholder="np. 2002" class="input focus:shadow-none w-52 dark:bg-gray-800 bg-gray-100" />
        </div>
      </div>
    </div>
    <div class="flex text-sm gap-2 justify-end">
      <div class="py-2 px-3 bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-800 rounded-md cursor-pointer hover:bg-gray-300 transition">
        <p>Anuluj</p>
      </div>
      <div @click="updateDetailsClick" class="py-2 px-3 bg-sky-500 text-white rounded-md cursor-pointer hover:bg-sky-600 transition">
        <p>Zapisz zmiany</p>
      </div>
    </div>
  </div>
</template>
<script>
import { updateProfileInfo } from '@/database/setData';
import { mapState } from "vuex";
import { getAuth } from '@firebase/auth';
export default {
  data() {
    return {
      gender: -1,
      birthyear: 1900,
    };
  },
  computed: {
    ...mapState("user", ["profileImage", "name", "surname", "username"]),
    ...mapState("userDetails", {
      userGender: "gender",
      userBirthyear: "birthyear",
    }),
  },
  methods: {
    async updateDetailsClick() {
      await updateProfileInfo(getAuth().currentUser.uid, this.gender, this.birthyear).then(() => {
        alert("Pomyślnie zaktualizowano informacje o profilu");
      });
    }
  },
  mounted() {
    this.gender = this.userGender;
    this.birthyear = this.userBirthyear;
  },
};
</script>
