<template>
<div v-bind:class="[showMenu ? 'absolute w-full top-14 bottom-0 z-10' : 'hidden xl:flex']">
        <nav v-bind:class="[showMenu ? 'flex h-full w-full bg-white bg-opacity-100 dark:bg-gray-900 dark:bg-opacity-100 ' : 'hidden bg-gray-200 dark:bg-gray-800']" class="xl:flex w-48 pr-2 pt-3 h-full overflow-y-auto custom-scrollbar shadow-2xl sticky top-0 left-0 flex-shrink-0 bg-opacity-10 dark:bg-opacity-25">
            <div class="flex flex-col w-full h-full flex-grow-0 flex-shrink-0">
                <input placeholder="Szukaj" class="md:hidden h-10 mb-6 ml-2 focus:outline-none p-4 rounded-full border border-gray-300 bg-transparent dark:border-gray-700 focus:border-blue-500">
                <div class="flex w-full h-full">
                    <div class="w-1 h-auto">
                    <div class="h-12 bg-blue-600 rounded-r-xl"></div>
                </div>
                <div class="w-full h-full flex flex-col">
                    <div @click="navToHome" class="main-menu__element bg-gray-100 dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" class="main-menu__element__icon" width="44" height="44"
                            viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <polyline points="5 12 3 12 12 3 21 12 19 12" />
                            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                        </svg>
                        <p class="self-center ml-2">Główna</p>
                    </div>
                    <div class="main-menu__element">
                        <svg xmlns="http://www.w3.org/2000/svg" class="main-menu__element__icon" width="44" height="44"
                            viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                            <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
                        </svg>
                        <p class="self-center ml-2">Tekst</p>
                    </div>
                    <div class="main-menu__element">
                        <svg xmlns="http://www.w3.org/2000/svg" class="main-menu__element__icon" width="44" height="44"
                            viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <rect x="4" y="4" width="16" height="16" rx="2" />
                            <line x1="8" y1="4" x2="8" y2="20" />
                            <line x1="16" y1="4" x2="16" y2="20" />
                            <line x1="4" y1="8" x2="8" y2="8" />
                            <line x1="4" y1="16" x2="8" y2="16" />
                            <line x1="4" y1="12" x2="20" y2="12" />
                            <line x1="16" y1="8" x2="20" y2="8" />
                            <line x1="16" y1="16" x2="20" y2="16" />
                        </svg>
                        <p class="self-center ml-2">Wideo</p>
                    </div>
                    <div class="main-menu__element">
                        <svg xmlns="http://www.w3.org/2000/svg" class="main-menu__element__icon" width="44" height="44"
                            viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <rect x="3" y="7" width="18" height="13" rx="2" />
                            <polyline points="16 3 12 7 8 3" />
                        </svg>
                        <p class="self-center ml-2">Na żywo</p>
                    </div>
                    <div class="main-menu__element">
                        <svg xmlns="http://www.w3.org/2000/svg" class="main-menu__element__icon" width="44" height="44"
                            viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <line x1="15" y1="8" x2="15.01" y2="8" />
                            <rect x="4" y="4" width="16" height="16" rx="3" />
                            <path d="M4 15l4 -4a3 5 0 0 1 3 0l5 5" />
                            <path d="M14 14l1 -1a3 5 0 0 1 3 0l2 2" />
                        </svg>
                        <p class="self-center ml-2">Zdjęcia</p>
                    </div>
                    <hr class="mt-2 mb-2 dark:border-gray-600">
                    <div class="main-menu__element">
                        <svg xmlns="http://www.w3.org/2000/svg" class="main-menu__element__icon" width="44" height="44"
                            viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="7" cy="5" r="2" />
                            <path d="M5 22v-5l-1 -1v-4a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4l-1 1v5" />
                            <circle cx="17" cy="5" r="2" />
                            <path d="M15 22v-4h-2l2 -6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1l2 6h-2v4" />
                        </svg>
                        <p class="self-center ml-2">Znajomi</p>
                    </div>
                    <div class="main-menu__element">
                        <svg xmlns="http://www.w3.org/2000/svg" class="main-menu__element__icon" width="44" height="44"
                            viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                        </svg>
                        <p class="self-center ml-2">Grupy</p>
                    </div>
                    <div class="main-menu__element">
                        <svg xmlns="http://www.w3.org/2000/svg" class="main-menu__element__icon" width="44" height="44"
                            viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M15 3v4a1 1 0 0 0 1 1h4" />
                            <path d="M18 17h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h4l5 5v7a2 2 0 0 1 -2 2z" />
                            <path d="M16 17v2a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2" />
                        </svg>
                        <p class="self-center ml-2">Strony</p>
                    </div>
                    <hr class="mt-2 mb-2 dark:border-gray-600">
                    <div class=" flex-1 flex-shrink"></div>
                    <div class="main-menu__element">
                        <svg xmlns="http://www.w3.org/2000/svg" class="main-menu__element__icon" width="44" height="44"
                            viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                            <circle cx="12" cy="12" r="3" />
                        </svg>
                        <p class="self-center ml-2">Ustawienia</p>
                    </div>
                    <p class="text-gray-400 text-xs text-center pt-3 pb-3">&copy; New Network 2021</p>
                </div>
            </div>
                </div>
        </nav>
</div>
</template>
<script>
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
    setup() {
        const router = useRouter()
        const store = useStore()
        const showMen = true

        const navToHome = () => {
            store.commit('switchShowMenu')
            router.push('/home')
        }

        return {
            navToHome,
            showMenu: computed(() => store.getters.getShowMenu),
            showMen
        }
    }
}
</script>