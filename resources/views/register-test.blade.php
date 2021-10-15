<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register site</title>
    <link href="/css/app.css" rel="stylesheet">
    <link href="/css/register.css" rel="stylesheet">
</head>
<body class="h-auto md:h-screen w-screen bg-gray-800">
    <div id="wave-div" class="z-0 invisible md:visible">
    </div>
    <div class="z-10">
        <header class="relative flex justify-between w-full h-12 md:h-16  ">
            <p class="self-end ml-7 md:ml-20 text-2xl text-white">New Network</p>
            <p class="self-end mr-5 md:mr-14 text-xl text-white">Rejestracja</p>
        </header>
        <main class="relative flex md:flex-schrink">
            {{-- <div class="flex flex-col w-4/12 ml-20 my-5 p-6 shadow-xl rounded-xl bg-gray-100 bg-opacity-60 dark:bg-gray-900" >
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
                            <div class="p-5 ">
                                <p class="text-xl mb-2">Lorem ipsum dolor sit amet consectetur.</p>
                                <p class="leading-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, quasi.</p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-3 bg-white dark:bg-black dark:bg-opacity-20 bg-opacity-30 rounded-lg">
                        <div class="flex">
                            <p class="text-6xl self-center ml-6 mr-1 mb-2">3</p>
                            <div class="p-5 ">
                                <p class="text-xl mb-2">Lorem ipsum dolor sit amet consectetur.</p>
                                <p class="leading-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi ad voluptates velit aliquid.</p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-3 bg-white dark:bg-black dark:bg-opacity-20 bg-opacity-30 rounded-lg">
                        <div class="flex">
                            <p class="text-6xl self-center ml-6 mr-1 mb-2">4</p>
                            <div class="p-5 ">
                                <p class="text-xl mb-2">Lorem ipsum dolor sit amet consectetur.</p>
                                <p class="leading-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe cumque distinctio accusantium.</p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-3 bg-white dark:bg-black dark:bg-opacity-20 bg-opacity-30 rounded-lg">
                        <div class="flex">
                            <p class="text-6xl self-center ml-6 mr-1 mb-2">5</p>
                            <div class="p-5 ">
                                <p class="text-xl mb-2">Lorem ipsum dolor sit amet consectetur.</p>
                                <p class="leading-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum aspernatur iusto aperiam.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> --}}
            <div class="relative h-auto m-auto my-5 w-11/12 bg-gray-100 bg-opacity-95 dark:bg-gray-900 shadow-lg rounded-xl border dark:border-gray-800">
                <div class="mx-5">
                    <p class="text-2xl p-5 pl-0 border-b-2 dark:border-gray-800">Dane logowania</p>
                    <div class="flex justify-between">
                        <div class=" w-full">
                            <label class="label">
                                <span class="label-text">Email
                                    <div class="dropdown dropdown-right">
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
                            <input type="email" placeholder="jan.kowalski@example.com" class="input input-bordered dark:bg-gray-800 w-full">
                            <label class="label">
                                <span class="label-text">Hasło
                                    <div class="dropdown dropdown-right">
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
                            <input type="password" placeholder="Hasło" class="input input-bordered dark:bg-gray-800 w-full">
                            <label class="label">
                                <span class="label-text">Powtórz hasło</span>
                            </label>
                            <input type="password" placeholder="Hasło" class="input input-bordered dark:bg-gray-800 w-full">
                        </div>
                    </div>
                    <p class="text-2xl p-5 pl-0 border-b-2 dark:border-gray-800">Dane osobowe</p>
                    <div class="flex justify-between">
                        <div class=" w-full">
                            <label class="label">
                                <span class="label-text">Imię
                                    <div class="dropdown dropdown-right">
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
                            <input type="text" placeholder="Jan" class="input input-bordered dark:bg-gray-800 w-full">
                            <label class="label">
                                <span class="label-text">Nazwisko</span>
                            </label>
                            <input type="text" placeholder="Kowalski" class="input input-bordered dark:bg-gray-800 w-full">
                            <label class="label">
                                <span class="label-text">Nazwa użytkownika
                                    <div class="dropdown dropdown-right">
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
                            <input type="text" placeholder="@jankowalski" class="input input-bordered dark:bg-gray-800 w-full">
                            <label class="label">
                                <span class="label-text">Płeć</span>
                            </label>
                            <select class="select select-bordered dark:bg-gray-800 w-full">
                                <option disabled="disabled" selected="selected">Nie wybrano</option>
                                <option>Kobieta</option>
                                <option>Mężczyzna</option>
                                <option>Nie chcę podawać</option>
                            </select>
                            <label class="label">
                                <span class="label-text">Rok urodzenia
                                    <div class="dropdown dropdown-right">
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
                            <input type="number" type="number" min="1900" max="2099" placeholder="np. 2002" class="input input-bordered dark:bg-gray-800 w-full">
                            <div class="p-3 card w-full border border-gray-300 dark:border-gray-700 rounded-lg mt-7">
                                <div class="form-control">
                                    <label class="cursor-pointer label">
                                        <span class="label-text pr-3">Oświadczam, że mam ukończone 13 lat</span>
                                        <input type="checkbox" class="checkbox">
                                    </label>
                                </div>
                            </div>
                            <div class="p-3 card w-full border border-gray-300 dark:border-gray-700 rounded-lg mt-3">
                                <div class="form-control">
                                    <label class="cursor-pointer label">
                                        <span class="label-text pr-3">Zapoznałem/am się i akceptuję <a href="" class="link">Warunki użytkowania</a></span>
                                        <input type="checkbox" class="checkbox">
                                    </label>
                                </div>
                            </div>
                            <div class="p-3 card w-full border border-gray-300 dark:border-gray-700 rounded-lg mt-3">
                                <div class="form-control">
                                    <label class="cursor-pointer label">
                                        <span class="label-text pr-3">Zapoznałem/am się i akceptuję <a href="" class="link">Politykę prywatności</a></span>
                                        <input type="checkbox" class="checkbox">
                                    </label>
                                </div>
                            </div>
                            <div class="h-5"></div>
                            <button class="btn w-full">Zarejestruj się</button>
                        </div>
                        {{-- <div class="flex flex-col">
                                <p>Zachęcamy do zapoznania się ze szczegółowymi zasadami moderacji (wraz z przykładami), które są dostępne <a href="" class="link">tutaj</a>.</p>
                            </div> --}}
                        </div>
                    </div>
                    <div class="h-10"></div>
                </div>
        </main>
        
        {{-- <footer class="px-3 py-8 bg-white dark:bg-gray-800 text-2 text-gray-500 dark:text-gray-200 transition-colors duration-200">
            <div class="flex flex-col">
                <div class="md:hidden mt-7 mx-auto w-11 h-px rounded-full">
                </div>
                <div class="mt-4 md:mt-0 flex flex-col md:flex-row">
                    <nav class="flex-1 flex flex-col items-center justify-center md:items-end md:border-r border-gray-100 md:pr-5">
                        <a aria-current="page" href="#" class="hover:text-gray-700 dark:hover:text-white">
                            O nas
                        </a>
                        <a aria-current="page" href="#" class="hover:text-gray-700 dark:hover:text-white">
                            Polityka prywatności
                        </a>
                        <a aria-current="page" href="#" class="hover:text-gray-700 dark:hover:text-white">
                            Warunki użytkowania
                        </a>
                    </nav>
                    <div class="md:hidden mt-4 mx-auto w-11 h-px rounded-full">
                    </div> --}}
                    {{-- <div class="mt-4 md:mt-0 flex-1 flex items-center justify-center md:border-r border-gray-100">
                        <a class="hover:text-primary-gray-20" href="https://github.com/Charlie85270/tail-kit">
                            <span class="sr-only">
                                View on GitHub
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 1792 1792">
                                <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z">
                                </path>
                            </svg>
                        </a>
                        <a class="ml-4 hover:text-primary-gray-20" href="#">
                            <span class="sr-only">
                                Settings
                            </span>
                            <svg width="30" height="30" fill="currentColor" class="text-xl hover:text-gray-800 dark:hover:text-white transition-colors duration-200" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M960 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm768 512q0-52-38-90t-90-38-90 38-38 90q0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zm0-1024q0-52-38-90t-90-38-90 38-38 90q0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zm-384 421v185q0 10-7 19.5t-16 10.5l-155 24q-11 35-32 76 34 48 90 115 7 11 7 20 0 12-7 19-23 30-82.5 89.5t-78.5 59.5q-11 0-21-7l-115-90q-37 19-77 31-11 108-23 155-7 24-30 24h-186q-11 0-20-7.5t-10-17.5l-23-153q-34-10-75-31l-118 89q-7 7-20 7-11 0-21-8-144-133-144-160 0-9 7-19 10-14 41-53t47-61q-23-44-35-82l-152-24q-10-1-17-9.5t-7-19.5v-185q0-10 7-19.5t16-10.5l155-24q11-35 32-76-34-48-90-115-7-11-7-20 0-12 7-20 22-30 82-89t79-59q11 0 21 7l115 90q34-18 77-32 11-108 23-154 7-24 30-24h186q11 0 20 7.5t10 17.5l23 153q34 10 75 31l118-89q8-7 20-7 11 0 21 8 144 133 144 160 0 8-7 19-12 16-42 54t-45 60q23 48 34 82l152 23q10 2 17 10.5t7 19.5zm640 533v140q0 16-149 31-12 27-30 52 51 113 51 138 0 4-4 7-122 71-124 71-8 0-46-47t-52-68q-20 2-30 2t-30-2q-14 21-52 68t-46 47q-2 0-124-71-4-3-4-7 0-25 51-138-18-25-30-52-149-15-149-31v-140q0-16 149-31 13-29 30-52-51-113-51-138 0-4 4-7 4-2 35-20t59-34 30-16q8 0 46 46.5t52 67.5q20-2 30-2t30 2q51-71 92-112l6-2q4 0 124 70 4 3 4 7 0 25-51 138 17 23 30 52 149 15 149 31zm0-1024v140q0 16-149 31-12 27-30 52 51 113 51 138 0 4-4 7-122 71-124 71-8 0-46-47t-52-68q-20 2-30 2t-30-2q-14 21-52 68t-46 47q-2 0-124-71-4-3-4-7 0-25 51-138-18-25-30-52-149-15-149-31v-140q0-16 149-31 13-29 30-52-51-113-51-138 0-4 4-7 4-2 35-20t59-34 30-16q8 0 46 46.5t52 67.5q20-2 30-2t30 2q51-71 92-112l6-2q4 0 124 70 4 3 4 7 0 25-51 138 17 23 30 52 149 15 149 31z">
                                </path>
                            </svg>
                        </a>
                    </div> --}}
                    {{-- <div class="md:hidden mt-4 mx-auto w-11 h-px rounded-full ">
                    </div>
                    <div class="mt-7 md:mt-0 flex-1 flex flex-col items-center justify-center md:items-start md:pl-5">
                        <span class="">
                            &copy; New Network 2021
                        </span>
                    </div>
                </div>
            </div>
        </footer> --}}
        <footer class="dark:bg-gray-800 text-center p-1">
            <div class="space-x-4">
                <a href="index.html" class="text-s">
                    O nas
                </a>
                <a href="index.html" class="text-s">
                    Polityka prywatności
                </a>
                <a href="index.html" class="text-s">
                    Warunki użytkowania
                </a>
            </div>
            <p class="">&copy; New Network 2021</p>
        </footer>
    </div>
</body>
</html>