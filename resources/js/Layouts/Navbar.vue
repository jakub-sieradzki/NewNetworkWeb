<template>
    <header class="flex w-full h-14 shadow-md dark:bg-gray-800 flex-shrink-0 bg-gray-100">
        <div class="w-full h-10 self-center relative ml-3 mr-3 lg:ml-4 lg:mr-4">
            <div class="xl:hidden cursor-pointer absolute top-1/2 transform -translate-y-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current justify-center self-center w-8 h-8" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                </svg>
            </div>
            <p class="font-main text-xl absolute top-1/2 left-11 xl:left-0 transform -translate-y-1/2">New Network<span
                    class="text-xs text-gray-400 ml-1">ALPHA</span>
            </p>
            <input placeholder="Szukaj" class="hidden md:block absolute left-1/2 transform -translate-x-1/2 md:w-80 lg:w-96 h-10 focus:outline-none p-4 rounded-full border border-gray-300 bg-gray-200 dark:bg-gray-700 dark:border-gray-900 focus:border-blue-500">
            <div class="flex h-10 self-center absolute top-0 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="p-2 w-10 h-10 mr-2 stroke-current rounded-full cursor-pointer border bg-gray-200 border-gray-300 dark:bg-gray-700 dark:border-gray-900" width="44" height="44"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="#000" fill="none" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                    <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                </svg>
                <div class="flex items-center cursor-pointer w-auto bg-gray-200 border dark:bg-gray-700 dark:border-gray-900 border-gray-300 rounded-full overflow-hidden">
                    <img src="images/profile.png" class="w-10 h-10" alt="profile">
                    <p class="pl-3 pr-5 hidden md:block">Jakub</p>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    
}
</script>