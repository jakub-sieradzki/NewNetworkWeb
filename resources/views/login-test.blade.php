<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link href="/css/app.css" rel="stylesheet">
    <link href="/css/register.css" rel="stylesheet">
</head>
<body class="m-auto overflow-x-hidden custom-scrollbar">
    <div class="bg-cover bg-center bg-no-repeat" style="background-image: url('images/wallpaper.jpg');">
        <div class="h-screen w-screen flex flex-col backdrop-filter backdrop-blur-sm bg-gray-500 dark:bg-gray-700 bg-opacity-75 custom-scrollbar">
            <header class="h-16 w-full flex justify-between">
                <p class="self-end ml-7 lg:ml-20 text-2xl text-white">New Network</p>
                <p class="self-end mr-5 lg:mr-14 text-2xl text-white">Logowanie</p>
            </header>
            <main class="flex flex-grow flex-shrink flex-col h-screen md:flex-row items-center md:justify-evenly my-5 px-2 lg:px-20 overflow-x-hidden">
                <p class="text-3xl md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl my-10 lg:my-0 mx-5 lg:mr-20 text-center lg:text-left font-bold text-white">
                    TWÓJ INTERNET
                        <br class="hidden lg:block">
                    JEST TUTAJ
                </p>
                <div class="w-full md:w-lg-login bg-gray-100 bg-opacity-95 dark:bg-gray-900 shadow-lg rounded-xl border dark:border-gray-800 p-5 sm:p-7 md:p-11">
                    <div class="flex flex-col">
                        <p class="text-2xl pb-5 mb-5 border-b-2 dark:border-gray-800">Logowanie</p>
                            <div class="flex flex-col">
                                <input class="input input-bordered mb-2 dark:bg-gray-800" type="email" name="email" v-model="formData.email" placeholder="Adres e-mail">
                                <input class="input input-bordered mb-2 dark:bg-gray-800" type="password" name="password" v-model="formData.password" placeholder="Hasło">
                                <div class="flex gap-2 flex-col lg:flex-row justify-between flex-shrink-0 items-center mt-1 mb-5">
                                    <a class="text-sm hover:underline px-4 pb-1 lg:pb-0 w-full lg:w-1/2" href="">Przywróć hasło</a>
                                    <div class="px-3 py-1 card flex-shrink-0 rounded-lg border border-gray-300 dark:border-gray-700 w-full lg:w-1/2 self-end transition hover:bg-gray-200 dark:hover:bg-gray-700">
                                        <div class="form-control">
                                            <label class="cursor-pointer label">
                                                <span class="label-text pr-3">Zapamiętaj mnie</span>
                                                <input type="checkbox" checked="checked" class="checkbox">
                                            </label>
                                        </div>
                                    </div>
                                </div>                     
                                <button @click="login" class="h-10 bg-green-500 hover:bg-green-600 transition-all rounded-lg text-white shadow-lg" type="submit">Zaloguj się</button>
                            </div>
                        <div class="w-full h-2 mt-6 mb-4 border-b-2 dark:border-gray-800"></div>
                        <p class="text-sm mb-4">Pierwszy raz na naszej platformie?</p>
                        <a class="w-full"><button @click="register" class="w-full h-10 bg-blue-500 hover:bg-blue-600 transition-all rounded-lg text-white shadow-lg">Załóż konto</button></a>
                    </div>
                </div>
            </main>
            <footer class="lg:bg-transparent text-center p-1 xl:p-0 text-white xl:flex xl:h-12 xl:flex-row-reverse xl:items-start xl:text-sm xl:flex-shrink-0">
                <div class="space-x-4 xl:space-x-8 xl:mr-14">
                    <a href="index.html" class="text-base link">
                        Warunki użytkowania
                    </a>
                    <a href="index.html" class="text-base link">
                        Polityka prywatności
                    </a>
                    <a href="index.html" class="text-base link">
                        O nas
                    </a>
                </div>
                <p class="xl:mr-8 text-base">&copy; New Network 2021</p>
            </footer>
        </div>
    </div>
</body>
</html>