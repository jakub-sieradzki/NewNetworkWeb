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
<body class="h-auto lg:h-screen w-screen bg-gray-800 overflow-x-hidden custom-scrollbar">
    <div id="wave-div" class="z-0 hidden lg:inline">
    </div>
    <div class="z-10">
        <header class="relative flex justify-between w-full h-12 lg:h-16  ">
            <p class="self-end ml-7 lg:ml-20 text-2xl text-white">New Network</p>
            <p class="self-end mr-5 lg:mr-14 text-xl text-white">Rejestracja</p>
        </header>
        <main class="relative flex lg:flex-schrink">
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
            <div class="relative h-auto m-auto my-5 w-11/12 max-w-lg md:max-w-3xl bg-gray-100 bg-opacity-95 dark:bg-gray-900 shadow-lg rounded-xl border dark:border-gray-800">
                <div class="mx-5">
                    <p class="text-2xl p-5 pl-0 border-b-2 dark:border-gray-800">Dane logowania</p>
                    <div class="flex justify-between">
                        <div class="flex flex-col w-full">
                            <label class="label">
                                <span class="label-text">Email
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
                            <input type="email" placeholder="jan.kowalski@example.com" class="input input-bordered dark:bg-gray-800 w-full md:max-w-sm">
                            <label class="label">
                                <span class="label-text">Hasło
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
                            <input type="password" placeholder="Hasło" class="input input-bordered dark:bg-gray-800 w-full md:max-w-sm">
                            <label class="label">
                                <span class="label-text">Powtórz hasło</span>
                            </label>
                            <input type="password" placeholder="Hasło" class="input input-bordered dark:bg-gray-800 w-full md:max-w-sm">
                        </div>
                        <div class="flex flex-col hidden md:inline ml-5">
                            <div class="w-80 bg-gray-200 dark:bg-gray-800 mt-9 rounded-lg text-xs p-5">
                                <p>Zalecamy rejestrację konta na email założony u <a href="" class="link">zaufanego dostawcy email</a>. Jeżeli podasz adres od innego dostawcy, poprosimy Cię o numer telefonu.</p>
                                <br>
                                <p>Po wpisaniu hasła sprawdzimy, czy nie zostało ono upublicznione w wyciekach danych. Zalecamy korzystanie z menedżerów haseł, takich jak <a href="https://bitwarden.com" target="_blank" class="link">Bitwarden</a> i wbudowanych w nich generatorów haseł.</p>
                            </div>
                        </div>
                    </div>
                    <p class="text-2xl p-5 pl-0 border-b-2 dark:border-gray-800">Dane osobowe</p>
                    <div class="flex justify-between">
                        <div class=" w-full">
                            <label class="label">
                                <span class="label-text">Imię
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
                            <input type="text" placeholder="Jan" class="input input-bordered dark:bg-gray-800 w-full md:max-w-sm">
                            <label class="label">
                                <span class="label-text">Nazwisko</span>
                            </label>
                            <input type="text" placeholder="Kowalski" class="input input-bordered dark:bg-gray-800 w-full md:max-w-sm">
                            <label class="label">
                                <span class="label-text">Nazwa użytkownika
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
                            <input type="text" placeholder="@jankowalski" class="input input-bordered dark:bg-gray-800 w-full md:max-w-sm">
                            <label class="label">
                                <span class="label-text">Płeć</span>
                            </label>
                            <select class="select select-bordered dark:bg-gray-800 w-full md:max-w-sm">
                                <option disabled="disabled" selected="selected">Nie wybrano</option>
                                <option>Kobieta</option>
                                <option>Mężczyzna</option>
                                <option>Nie chcę podawać</option>
                            </select>
                            <label class="label">
                                <span class="label-text">Rok urodzenia
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
                            <input type="number" type="number" min="1900" max="2099" placeholder="np. 2002" class="input input-bordered dark:bg-gray-800 w-full md:max-w-sm">
                            <div class="p-3 card w-full border border-gray-300 dark:border-gray-700 rounded-lg mt-7 md:max-w-sm">
                                <div class="form-control">
                                    <label class="cursor-pointer label">
                                        <span class="label-text pr-3">Oświadczam, że mam ukończone 13 lat</span>
                                        <input type="checkbox" class="checkbox">
                                    </label>
                                </div>
                            </div>
                            <div class="p-3 card w-full border border-gray-300 dark:border-gray-700 rounded-lg mt-3 md:max-w-sm">
                                <div class="form-control">
                                    <label class="cursor-pointer label">
                                        <span class="label-text pr-3">Zapoznałem/am się i akceptuję <a href="" class="link">Warunki użytkowania</a></span>
                                        <input type="checkbox" class="checkbox">
                                    </label>
                                </div>
                            </div>
                            <div class="p-3 card w-full border border-gray-300 dark:border-gray-700 rounded-lg mt-3 md:max-w-sm">
                                <div class="form-control">
                                    <label class="cursor-pointer label">
                                        <span class="label-text pr-3">Zapoznałem/am się i akceptuję <a href="" class="link">Politykę prywatności</a></span>
                                        <input type="checkbox" class="checkbox">
                                    </label>
                                </div>
                            </div>
                            <div class="h-5"></div>
                            <button class="btn w-full md:max-w-sm">Zarejestruj się</button>
                        </div>
                        <div class="flex flex-col hidden md:inline ml-5">
                            <div class="w-80 bg-gray-200 dark:bg-gray-800 mt-9 rounded-lg text-xs p-5">
                                <p>Możesz zmienić swoje imię i nazwisko w każdej chwili w ustawieniach profilu.</p>
                                <br>
                                <p>Nazwa użytkownika jest unikatowa dla każdego użytkownika i nie może być zmieniona.</p>
                                <br>
                                <p>Dozwolne znaki w nazwie użytkownika to litery (wielkość liter nie jest rozróżniana), cyfry oraz '_' i '-'.</p>
                                <br>
                                <p>Nie obsługujemy użytkowników poniżej 13. roku życia.</p>
                                <br>
                                <p>Zachęcamy do zapoznania się ze szczegółowymi zasadami moderacji (wraz z przykładami), które są dostępne <a href="" class="link">tutaj</a>.</p>
                            </div>
                        </div>
                        {{-- <div class="flex flex-col">
                                <p>Zachęcamy do zapoznania się ze szczegółowymi zasadami moderacji (wraz z przykładami), które są dostępne <a href="" class="link">tutaj</a>.</p>
                            </div> --}}
                        </div>
                    </div>
                    <div class="h-10"></div>
                </div>
        </main>
        <footer class="dark:bg-gray-800 text-center p-1">
            <div class="space-x-4">
                <a href="index.html" class="text-s link">
                    O nas
                </a>
                <a href="index.html" class="text-s link">
                    Polityka prywatności
                </a>
                <a href="index.html" class="text-s link">
                    Warunki użytkowania
                </a>
            </div>
            <p class="">&copy; New Network 2021</p>
        </footer>
    </div>
</body>
</html>