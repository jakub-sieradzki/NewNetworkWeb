<template>
  <div class="lg:absolute lg:flex lg:flex-col lg:h-screen lg:w-screen m-auto">
    <div class="bg-cover bg-center bg-no-repeat" style="background-image: url('images/wallpaper.jpg')">
      <div class="sm:h-screen w-screen flex flex-col backdrop-filter backdrop-blur-sm bg-gray-500 dark:bg-gray-700 bg-opacity-75 custom-scrollbar">
        <header class="relative flex justify-between w-full h-12 lg:h-16 mt-6 mb-3">
          <p class="self-end ml-7 lg:ml-20 text-2xl text-white">New Network</p>
          <p class="self-end mr-5 lg:mr-14 text-2xl text-white">Rejestracja</p>
        </header>
        <main class="relative flex lg:flex-schrink lg:overflow-hidden">
          <div class="hidden xl:flex flex-col xl:ml-10 2xl:ml-20 ml-20 my-5 w-4/12 p-6 shadow-xl rounded-xl bg-gray-100 bg-opacity-60 dark:bg-gray-900">
            <div>
              <p class="text-5xl text-center">ZASADY MODERACJI</p>
              <p class="text-2xl text-center mt-2">New Network</p>
            </div>
            <div class="mt-6 overflow-y-scroll custom-scrollbar-register-rules">
              <div class="bg-white dark:bg-black dark:bg-opacity-20 bg-opacity-30 rounded-lg">
                <div class="flex">
                  <p class="text-6xl self-center ml-6 mr-1 mb-2">1</p>
                  <div class="p-5">
                    <p class="text-xl mb-2">Lorem ipsum dolor sit amet consectetur.</p>
                    <p class="leading-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, aut totam ducimus possimus fugit nostrum.</p>
                  </div>
                </div>
              </div>
              <div class="mt-3 bg-white dark:bg-black dark:bg-opacity-20 bg-opacity-30 rounded-lg">
                <div class="flex">
                  <p class="text-6xl self-center ml-6 mr-1 mb-2">2</p>
                  <div class="p-5">
                    <p class="text-xl mb-2">Lorem ipsum dolor sit amet consectetur.</p>
                    <p class="leading-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, quasi.</p>
                  </div>
                </div>
              </div>
              <div class="mt-3 bg-white dark:bg-black dark:bg-opacity-20 bg-opacity-30 rounded-lg">
                <div class="flex">
                  <p class="text-6xl self-center ml-6 mr-1 mb-2">3</p>
                  <div class="p-5">
                    <p class="text-xl mb-2">Lorem ipsum dolor sit amet consectetur.</p>
                    <p class="leading-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi ad voluptates velit aliquid.</p>
                  </div>
                </div>
              </div>
              <div class="mt-3 bg-white dark:bg-black dark:bg-opacity-20 bg-opacity-30 rounded-lg">
                <div class="flex">
                  <p class="text-6xl self-center ml-6 mr-1 mb-2">4</p>
                  <div class="p-5">
                    <p class="text-xl mb-2">Lorem ipsum dolor sit amet consectetur.</p>
                    <p class="leading-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe cumque distinctio accusantium.</p>
                  </div>
                </div>
              </div>
              <div class="mt-3 bg-white dark:bg-black dark:bg-opacity-20 bg-opacity-30 rounded-lg">
                <div class="flex">
                  <p class="text-6xl self-center ml-6 mr-1 mb-2">5</p>
                  <div class="p-5">
                    <p class="text-xl mb-2">Lorem ipsum dolor sit amet consectetur.</p>
                    <p class="leading-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum aspernatur iusto aperiam.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="relative h-auto m-auto xl:mr-10 2xl:mr-20 my-5 w-11/12 xl:w-3/6 max-w-lg md:max-w-3xl bg-gray-100 bg-opacity-95 dark:bg-gray-900 shadow-lg rounded-xl border dark:border-gray-800 lg:overflow-y-scroll custom-scrollbar overflow-x-hidden">
            <div class="mx-5">
              <p class="text-2xl p-5 pl-0 border-b-2 dark:border-gray-800">Dane logowania</p>
              <div class="flex justify-between">
                <div class="flex flex-col w-full">
                  <label class="label">
                    <span class="label-text"
                      >Email
                      <div class="dropdown dropdown-right md:hidden">
                        <div tabindex="0" class="btn btn-circle btn-ghost btn-xs text-info">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline w-5 h-5 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </div>
                        <div tabindex="0" class="shadow card compact dropdown-content bg-base-100 rounded-box w-52">
                          <div class="card-body">
                            <p>Zalecamy rejestrację konta na email założony u <a href="" class="link">zaufanego dostawcy email</a>. Jeżeli podasz adres od innego dostawcy, poprosimy Cię o numer telefonu.</p>
                          </div>
                        </div>
                      </div>
                    </span>
                  </label>
                  <input type="email" v-model="formData.email" placeholder="jan.kowalski@example.com" class="w-full input input-bordered dark:bg-gray-800 md:max-w-sm" />
                  <label class="label">
                    <span class="label-text"
                      >Hasło
                      <div class="dropdown dropdown-right md:hidden">
                        <div tabindex="0" class="btn btn-circle btn-ghost btn-xs text-info">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline w-5 h-5 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </div>
                        <div tabindex="0" class="shadow card compact dropdown-content bg-base-100 rounded-box w-52">
                          <div class="card-body">
                            <p>Po wpisaniu hasła sprawdzimy, czy nie zostało ono upublicznione w wyciekach danych. Zalecamy korzystanie z menedżerów haseł, takich jak <a href="https://bitwarden.com" target="_blank" class="link">Bitwarden</a> i wbudowanych w nich generatorów haseł.</p>
                          </div>
                        </div>
                      </div>
                    </span>
                  </label>
                  <input type="password" v-model="formData.password" placeholder="Hasło" class="input input-bordered w-full md:max-w-sm dark:bg-gray-800" />
                  <label class="label">
                    <span class="label-text">Powtórz hasło</span>
                  </label>
                  <input type="password" v-model="formData.password_confirmation" placeholder="Hasło" class="input input-bordered w-full md:max-w-sm dark:bg-gray-800" />
                </div>
                <div class="flex flex-col hidden md:inline ml-5">
                  <div class="w-80 text-xs p-5 bg-gray-300 dark:bg-gray-800 mt-9 rounded-lg">
                    <p>Zalecamy rejestrację konta na email założony u <a href="" class="link">zaufanego dostawcy email</a>. Jeżeli podasz adres od innego dostawcy, poprosimy Cię o numer telefonu.</p>
                    <br />
                    <p>Po wpisaniu hasła sprawdzimy, czy nie zostało ono upublicznione w wyciekach danych. Zalecamy korzystanie z menedżerów haseł, takich jak <a href="https://bitwarden.com" target="_blank" class="link">Bitwarden</a> i wbudowanych w nich generatorów haseł.</p>
                  </div>
                </div>
              </div>
              <p class="text-2xl p-5 pl-0 border-b-2 dark:border-gray-800">Dane osobowe</p>
              <div class="flex justify-between">
                <div class="w-full">
                  <label class="label">
                    <span class="label-text"
                      >Imię
                      <div class="dropdown dropdown-right md:hidden">
                        <div tabindex="0" class="btn btn-circle btn-ghost btn-xs text-info">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline w-5 h-5 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </div>
                        <div tabindex="0" class="shadow card compact dropdown-content bg-base-100 rounded-box w-52">
                          <div class="card-body">
                            <p>Możesz zmienić swoje imię i nazwisko w każdej chwili w ustawieniach profilu.</p>
                          </div>
                        </div>
                      </div>
                    </span>
                  </label>
                  <input type="text" v-model="formData.name" placeholder="Jan" class="input input-bordered w-full md:max-w-sm dark:bg-gray-800" />
                  <label class="label">
                    <span class="label-text">Nazwisko</span>
                  </label>
                  <input type="text" v-model="formData.surname" placeholder="Kowalski" class="input input-bordered w-full md:max-w-sm dark:bg-gray-800" />
                  <label class="label">
                    <span class="label-text"
                      >Nazwa użytkownika
                      <div class="dropdown dropdown-right md:hidden">
                        <div tabindex="0" class="btn btn-circle btn-ghost btn-xs text-info">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline w-5 h-5 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </div>
                        <div tabindex="0" class="shadow card compact dropdown-content bg-base-100 rounded-box w-52">
                          <div class="card-body">
                            <p>Nazwa użytkownika jest unikatowa dla każdego użytkownika i nie może być zmieniona.</p>
                            <p>Dozwolne znaki w nazwie użytkownika to litery (wielkość liter nie jest rozróżniana), cyfry oraz '_' i '-'.</p>
                          </div>
                        </div>
                      </div>
                    </span>
                  </label>
                  <input type="text" v-model="formData.username" placeholder="@jankowalski" class="input input-bordered w-full md:max-w-sm dark:bg-gray-800" />
                  <label class="label">
                    <span class="label-text">Płeć</span>
                  </label>
                  <select v-model="formData.gender" class="select select-bordered w-full md:max-w-sm dark:bg-gray-800">
                    <option value="" selected disabled hidden>Nie wybrano</option>
                    <option value="0">Kobieta</option>
                    <option value="1">Mężczyzna</option>
                    <option value="2">Nie chcę podawać</option>
                  </select>
                  <label class="label">
                    <span class="label-text"
                      >Rok urodzenia
                      <div class="dropdown dropdown-right md:hidden">
                        <div tabindex="0" class="btn btn-circle btn-ghost btn-xs text-info">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline w-5 h-5 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </div>
                        <div tabindex="0" class="shadow card compact dropdown-content bg-base-100 rounded-box w-52">
                          <div class="card-body">
                            <p>Nie obsługujemy użytkowników poniżej 13. roku życia.</p>
                          </div>
                        </div>
                      </div>
                    </span>
                  </label>
                  <input v-model="formData.birthyear" type="number" min="1900" max="2099" placeholder="np. 2002" class="input input-bordered w-full md:max-w-sm dark:bg-gray-800" />
                  <div class="p-3 card w-full rounded-lg mt-7 md:max-w-sm border border-gray-300 dark:border-gray-700">
                    <div class="form-control">
                      <label class="cursor-pointer label">
                        <span class="label-text pr-3">Oświadczam, że mam ukończone 13 lat</span>
                        <input type="checkbox" class="checkbox" />
                      </label>
                    </div>
                  </div>
                  <div class="p-3 card w-full rounded-lg mt-3 md:max-w-sm border border-gray-300 dark:border-gray-700">
                    <div class="form-control">
                      <label class="cursor-pointer label">
                        <span class="label-text pr-3">Zapoznałem/am się i akceptuję <a href="" class="link">Warunki użytkowania</a></span>
                        <input type="checkbox" class="checkbox" />
                      </label>
                    </div>
                  </div>
                  <div class="p-3 card w-full rounded-lg mt-3 md:max-w-sm border border-gray-300 dark:border-gray-700">
                    <div class="form-control">
                      <label class="cursor-pointer label">
                        <span class="label-text pr-3">Zapoznałem/am się i akceptuję <a href="" class="link">Politykę prywatności</a></span>
                        <input type="checkbox" class="checkbox" />
                      </label>
                    </div>
                  </div>
                  <div class="h-5"></div>
                  <button @click="register" class="h-10 bg-green-500 hover:bg-green-600 transition-all rounded-lg text-white shadow-lg w-full">Zarejestruj się</button>
                </div>
                <div class="flex flex-col hidden md:inline ml-5">
                  <div class="w-80 text-xs p-5 bg-gray-300 dark:bg-gray-800 mt-9 rounded-lg">
                    <p>Możesz zmienić swoje imię i nazwisko w każdej chwili w ustawieniach profilu.</p>
                    <br />
                    <p>Nazwa użytkownika jest unikatowa dla każdego użytkownika i nie może być zmieniona.</p>
                    <br />
                    <p>Dozwolne znaki w nazwie użytkownika to litery (wielkość liter nie jest rozróżniana), cyfry oraz '_' i '-'.</p>
                    <br />
                    <p>Nie obsługujemy użytkowników poniżej 13. roku życia.</p>
                    <br />
                    <p>Zachęcamy do zapoznania się ze szczegółowymi zasadami moderacji (wraz z przykładami), które są dostępne <a href="" class="link">tutaj</a>.</p>
                  </div>
                </div>
                <!-- <div class="flex flex-col">
                                        <p>Zachęcamy do zapoznania się ze szczegółowymi zasadami moderacji (wraz z przykładami), które są dostępne <a href="" class="link">tutaj</a>.</p>
                                    </div> -->
              </div>
            </div>
            <div class="h-10"></div>
          </div>
        </main>
        <footer class="lg:bg-transparent text-center p-1 xl:p-0 text-white xl:flex xl:h-12 xl:flex-row-reverse xl:items-start xl:text-sm xl:flex-shrink-0">
          <div class="space-x-4 xl:space-x-8 xl:mr-14">
            <a href="index.html" class="text-base link"> Warunki użytkowania </a>
            <a href="index.html" class="text-base link"> Polityka prywatności </a>
            <a href="index.html" class="text-base link"> O nas </a>
          </div>
          <p class="xl:mr-8 text-base">&copy; New Network 2021</p>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFunctions, httpsCallable } from "firebase/functions";
import { computed, ref } from "vue";

export default {
  setup() {
    let formData = {
      email: "",
      password: "",
      password_confirmation: "",
      name: "",
      surname: "",
      username: "",
      gender: "",
      birthyear: null,
    };

    let registering = ref(false);

    const register = () => {
      formData.gender = parseInt(formData.gender);
      if (formData.email == "" || formData.password == "" || formData.name == "" || formData.surname == "" || formData.username == "" || formData.gender == null || formData.birthyear == null) {
        alert("Uzupełnij wszystkie pola");
        return;
      }
      const auth = getAuth();
      registering.value = true;

      createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          // Signed in
          const functions = getFunctions();
          const userSignupSaveData = httpsCallable(functions, "userSignupSaveData");
          userSignupSaveData({
            uid: userCredential.user.uid,
            name: formData.name,
            surname: formData.surname,
            username: formData.username,
            gender: formData.gender,
            birthyear: formData.birthyear,
          }).then(() => {
            window.location.href = window.location.href.substring(0, window.location.href.lastIndexOf("/") + 1) + "home";
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          // ..
        });
    };
    return { formData, register, registering };
  },
};
</script>
