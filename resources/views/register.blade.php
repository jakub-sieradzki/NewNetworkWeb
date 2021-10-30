<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>New Network | Zarejestruj się</title>
    <link href="/css/app.css" rel="stylesheet">
    <link href="/css/gradient.css" rel="stylesheet">
</head>

<body class="dark:bg-gray-800 h-screen w-screen">
    <div id="wave-div" class="z-0">
    </div>
    <div class="absolute min-h-screen max-h-screen h-screen w-screen z-10 flex flex-col flex-shrink">
        <header class="relative w-full h-16 flex justify-between flex-shrink-0">
            <p class="ml-20 text-2xl self-end text-white">New Network</p>
            <p class="mr-14 text-2xl self-end">Rejestracja</p>
        </header>
        <main class="relative flex flex-shrink justify-between overflow-hidden">
            <div class="flex flex-shrink flex-col ml-20 mt-28 mb-8 shadow-xl rounded-2xl bg-white bg-opacity-60 dark:bg-black p-6 pr-4 overflow-y-hidden" style="width: 550px;">
                <div>
                    <p class="text-5xl text-center">ZASADY MODERACJI</p>
                    <p class="text-2xl text-center mt-2">New Network</p>
                </div>
                <div class="mt-6 overflow-y-scroll custom-scrollbar-register-rules pr-4">
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
            </div>
            <div class="bg-gray-100 dark:bg-gray-900 relative flex-shrink h-auto mr-14 mt-7 mb-8 shadow-lg rounded-xl border dark:border-gray-800 overflow-y-scroll custom-scrollbar" style="width: 900px;">
                <div class="ml-10 mr-5 pr-5">
                    <p class="text-2xl p-5 pl-0 border-b-2 dark:border-gray-800">Dane logowania</p>
                    <div class="flex justify-between">
                        <div>
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="jan.kowalski@example.com" class="input input-bordered dark:bg-gray-800 w-96">
                            <label class="label">
                                <span class="label-text">Hasło</span>
                            </label>
                            <input type="password" placeholder="Hasło" class="input input-bordered dark:bg-gray-800 w-96">
                            <label class="label">
                                <span class="label-text">Powtórz hasło</span>
                            </label>
                            <input type="password" placeholder="Hasło" class="input input-bordered dark:bg-gray-800 w-96">
                        </div>
                        <div class="flex flex-col">
                            <div class="w-80 bg-gray-200 dark:bg-gray-800 mt-9 rounded-lg text-xs p-5">
                                <p>Zalecamy rejestrację konta na email założony u <a href="" class="link">zaufanego dostawcy email</a>. Jeżeli podasz adres od innego dostawcy, poprosimy Cię o numer telefonu.</p>
                                <br>
                                <p>Po wpisaniu hasła sprawdzimy, czy nie zostało ono upublicznione w wyciekach danych. Zalecamy korzystanie z menedżerów haseł, takich jak <a href="https://bitwarden.com" target="_blank" class="link">Bitwarden</a> i wbudowanych w nich generatorów haseł.</p>
                            </div>
                        </div>
                    </div>
                    <p class="text-2xl p-5 pl-0 border-b-2 dark:border-gray-800">Dane osobowe</p>
                    <div class="flex justify-between">
                        <div>
                            <label class="label">
                                <span class="label-text">Imię</span>
                            </label>
                            <input type="text" placeholder="Jan" class="input input-bordered dark:bg-gray-800 w-96">
                            <label class="label">
                                <span class="label-text">Nazwisko</span>
                            </label>
                            <input type="text" placeholder="Kowalski" class="input input-bordered dark:bg-gray-800 w-96">
                            <label class="label">
                                <span class="label-text">Nazwa użytkownika</span>
                            </label>
                            <input type="text" placeholder="@jankowalski" class="input input-bordered dark:bg-gray-800 w-96">
                            <label class="label">
                                <span class="label-text">Płeć</span>
                            </label>
                            <select class="select select-bordered dark:bg-gray-800 w-96">
                                <option disabled="disabled" selected="selected">Nie wybrano</option>
                                <option>Kobieta</option>
                                <option>Mężczyzna</option>
                                <option>Nie chcę podawać</option>
                            </select>
                            <label class="label">
                                <span class="label-text">Rok urodzenia</span>
                            </label>
                            <input type="number" type="number" min="1900" max="2099" placeholder="np. 2002" class="input input-bordered dark:bg-gray-800 w-96">
                            <div class="p-3 card w-96 border border-gray-300 dark:border-gray-700 rounded-lg mt-7">
                                <div class="form-control">
                                    <label class="cursor-pointer label">
                                        <span class="label-text pr-3">Oświadczam, że mam ukończone 13 lat</span>
                                        <input type="checkbox" class="checkbox">
                                    </label>
                                </div>
                            </div>
                            <div class="p-3 card w-96 border border-gray-300 dark:border-gray-700 rounded-lg mt-3">
                                <div class="form-control">
                                    <label class="cursor-pointer label">
                                        <span class="label-text pr-3">Zapoznałem/am się i akceptuję <a href="" class="link">Warunki użytkowania</a></span>
                                        <input type="checkbox" class="checkbox">
                                    </label>
                                </div>
                            </div>
                            <div class="p-3 card w-96 border border-gray-300 dark:border-gray-700 rounded-lg mt-3">
                                <div class="form-control">
                                    <label class="cursor-pointer label">
                                        <span class="label-text pr-3">Zapoznałem/am się i akceptuję <a href="" class="link">Politykę prywatności</a></span>
                                        <input type="checkbox" class="checkbox">
                                    </label>
                                </div>
                            </div>
                            <div class="h-5"></div>
                            <button class="btn w-96">Zarejestruj się</button>
                        </div>
                        <div class="flex flex-col">
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
                    </div>
                    <div class="h-10"></div>
                </div>
            </div>
        </main>
        <footer class="flex h-12 flex-row-reverse items-start text-sm flex-shrink-0">
            <a href="index.html" class="mr-14 link">
                <p class="">O nas</p>
            </a>
            <a href="index.html" class="mr-8 link">
                <p class="">Polityka prywatności</p>
            </a>
            <a href="index.html" class="mr-8 link">
                <p class="">Warunki użytkowania</p>
            </a>
            <p class="mr-8">&copy; New Network 2021</p>
        </footer>
    </div>

</body>

</html>