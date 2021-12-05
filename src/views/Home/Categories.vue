<template>
        <div class="hidden lg:flex sticky top-0 flex-shrink-0 ml-5 mt-12 w-64" style="height: 600px;">
                        <div class="flex-shrink w-full" style="height: 600px;">
                            <div
                                class="h-3/4 rounded-md border border-gray-300 dark:border-gray-800 shadow-xl flex flex-col flex-shrink-0 bg-gray-200 bg-opacity-10 dark:bg-gray-800 dark:bg-opacity-25">
                                <div
                                    class="flex h-12 items-center pl-4 pr-4 hover:bg-gray-100 dark:hover:bg-gray-700 overflow-y rounded-t-md cursor-pointer transition flex-shrink">
                                    <p class="text-center">Kategorie</p>
                                    <div class="flex-grow"></div>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44"
                                        height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none"
                                        stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </div>
                                <div
                                    class="flex items-center mb-1 pb-2 pl-4 pt-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition">
                                    <input type="checkbox" class="cursor-pointer w-4 h-4 mr-2">
                                    <p>Wszystkie</p>
                                </div>
                                <div class="relative h-full mr-1 overflow-y-scroll custom-scrollbar">
                                    <div class="ml-2 mr-4">
                                        <div
                                            class="categories__single-item border-green-800 hover:bg-green-800 bg-green-800 text-white">
                                            <input type="checkbox" checked="true" class="cursor-pointer w-4 h-4 mr-2">
                                            <p>Natura</p>
                                        </div>
                                        <div class="categories__single-item border-yellow-800 hover:bg-yellow-800">
                                            <input type="checkbox" class="cursor-pointer w-4 h-4 mr-2">
                                            <p>Polityka</p>
                                        </div>
                                        <div class="categories__single-item border-red-900 hover:bg-red-900 bg-red-900 text-white">
                                            <input type="checkbox" checked="true" class="cursor-pointer w-4 h-4 mr-2">
                                            <p>Gry</p>
                                        </div>
                                        <div
                                            class="categories__single-item border-indigo-800 hover:bg-indigo-800 bg-indigo-800 text-white">
                                            <input type="checkbox" checked="true" class="cursor-pointer w-4 h-4 mr-2">
                                            <p>Historia</p>
                                        </div>
                                        <div class="categories__single-item border-purple-800 hover:bg-purple-800">
                                            <input type="checkbox" class="cursor-pointer w-4 h-4 mr-2">
                                            <p>Edukacja</p>
                                        </div>
                                        <div class="categories__single-item border-pink-900 hover:bg-pink-900">
                                            <input type="checkbox" class="cursor-pointer w-4 h-4 mr-2">
                                            <p>Uroda</p>
                                        </div>
                                        <div
                                            class="categories__single-item border-blue-700 hover:bg-blue-700 bg-blue-700 text-white">
                                            <input type="checkbox" checked="true" class="cursor-pointer w-4 h-4 mr-2">
                                            <p>Motoryzacja</p>
                                        </div>
                                        <div class="categories__single-item border-gray-700 hover:bg-gray-700">
                                            <input type="checkbox" class="cursor-pointer w-4 h-4 mr-2">
                                            <p>Lotnictwo</p>
                                        </div>
                                        <div class="categories__single-item border-indigo-700 hover:bg-indigo-700">
                                            <input type="checkbox" class="cursor-pointer w-4 h-4 mr-2">
                                            <p>Zdrowie</p>
                                        </div>
                                        <div class="categories__single-item border-green-700 hover:bg-green-700">
                                            <input type="checkbox" class="cursor-pointer w-4 h-4 mr-2">
                                            <p>Gotowanie</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div @click="showCreatePost"
                                class="w-full flex items-center pt-8 pb-8 pl-4 pr-4 mt-12 justify-center rounded-md transition cursor-pointer transform hover:scale-105 bg-gradient-to-r from-blue-600 to-blue-900 shadow-2xl">
                                <img src="img/add.svg" alt="add" class="w-8 h-8 mr-1">
                                <p class="text-xl text-white text-center">Nowy post</p>
                            </div>
                        </div>
                    </div>
</template>
<script>
import { useStore } from 'vuex'

export default {
    setup() {
        const store = useStore()

        const showCreatePost = () => {
            store.commit('switchCreatePost')
        }
        return {showCreatePost}
    }
}
</script>