<template>
    <div>
        <header class="w-full h-14 flex justify-between shadow-md dark:bg-gray-800 flex-shrink-0 bg-gray-100">
            <p class="font-main text-xl self-center ml-4 w-48">New Network<span
                    class="text-xs text-gray-400 ml-1">ALPHA</span>
            </p>
            <input placeholder="Szukaj"
                class="w-96 h-10 focus:outline-none self-center p-4 rounded-full border border-gray-300 bg-gray-200 dark:bg-gray-700 dark:border-gray-900 focus:border-blue-500">
            <div class="flex h-10 justify-end self-center w-48 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="header__button-svg" width="44" height="44"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="#000" fill="none" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                    <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                </svg>
                <div class="flex items-center cursor-pointer w-auto bg-gray-200 border dark:bg-gray-700 dark:border-gray-900 border-gray-300 rounded-full overflow-hidden">
                    <img src="images/profile.png" class="w-10 h-10" alt="profile">
                    <p class="pl-3 pr-5">Jakub</p>
                </div>

            </div>
        </header>
    </div>
</template>
<script>
export default {
    
}
</script>