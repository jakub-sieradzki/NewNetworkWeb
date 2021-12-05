<template>
    <div class="absolute w-screen h-screen bg-gray-500 dark:bg-gray-700 bg-opacity-70 z-10 sm:backdrop-filter sm:backdrop-blur-sm">
        <div class="bg-gray-100 dark:bg-gray-900 h-full sm:h-96 sm:rounded-xl m-0 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:shadow-2xl w-full px-6 py-5 flex flex-col" style="max-width: 750px;">
            <div class="flex justify-between items-center">
                <p>Nowy post</p>
                <svg @click="closeCreatePost" xmlns="http://www.w3.org/2000/svg" class="stroke-current w-7 h-7 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-all cursor-pointer" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
            </div>
                <div class="flex mt-4 gap-1">
                    <div class="dropdown">
                        <div tabindex="0" class="px-3 py-1 border dark:border-gray-600 rounded-lg cursor-pointer text-sm">
                            <p>Moja tablica</p>
                        </div>
                        <div class="w-64 dropdown-content mt-2 pr-4 p-2 bg-gray-100 dark:bg-gray-800 border dark:border-gray-600 rounded-md shadow-xl max-h-64 overflow-y-scroll custom-scrollbar">
                            <p class="text-sm p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition rounded-md mb-1 cursor-pointer">Moja tablica</p>
                            <div class="w-full h-px bg-gray-300 dark:bg-gray-600 my-2"></div>
                            <p class="text-sm p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition rounded-md mt-1 cursor-pointer">Grupa0</p>
                            <p class="text-sm p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition rounded-md mt-1 cursor-pointer">Grupa1</p>
                            <p class="text-sm p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition rounded-md mt-1 cursor-pointer">Grupa2</p>
                            <p class="text-sm p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition rounded-md mt-1 cursor-pointer">Grupa3</p>
                            <p class="text-sm p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition rounded-md mt-1 cursor-pointer">Grupa3</p>
                            <p class="text-sm p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition rounded-md mt-1 cursor-pointer">Grupa3</p>
                            <p class="text-sm p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition rounded-md mt-1 cursor-pointer">Grupa3</p>
                            <p class="text-sm p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition rounded-md mt-1 cursor-pointer">Grupa3</p>
                            <p class="text-sm p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition rounded-md mt-1 cursor-pointer">Grupa3</p>
                            <p class="text-sm p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition rounded-md mt-1 cursor-pointer">Grupa3</p>
                            <p class="text-sm p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition rounded-md mt-1 cursor-pointer">Grupa3</p>
                            <p class="text-sm p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition rounded-md mt-1 cursor-pointer">Grupa3</p>
                            <p class="text-sm p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition rounded-md mt-1 cursor-pointer">Grupa3</p>
                            <p class="text-sm p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition rounded-md mt-1 cursor-pointer">Grupa3</p>
                            <p class="text-sm p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition rounded-md mt-1 cursor-pointer">Grupa3</p>
                            <p class="text-sm p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition rounded-md mt-1 cursor-pointer">Grupa3</p>
                            <p class="text-sm p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition rounded-md mt-1 cursor-pointer">Grupa3</p>
                            <p class="text-sm p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition rounded-md mt-1 cursor-pointer">Grupa3</p>
                            <p class="text-sm p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition rounded-md mt-1 cursor-pointer">Grupa3</p>
                            <p class="text-sm p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition rounded-md mt-1 cursor-pointer">Grupa3</p>
                            <p class="text-sm p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition rounded-md mt-1 cursor-pointer">Grupa3</p>
                            <p class="text-sm p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition rounded-md mt-1 cursor-pointer">Grupa3</p>
                            <p class="text-sm p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition rounded-md mt-1 cursor-pointer">Grupa3</p>
                            <p class="text-sm p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition rounded-md mt-1 cursor-pointer">Grupa3</p>
                            <p class="text-sm p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition rounded-md mt-1 cursor-pointer">Grupa3</p>
                        </div> 
                    </div>
                    <div class="dropdown">
                        <div tabindex="0" class="px-3 py-1 border dark:border-gray-600 rounded-lg cursor-pointer text-sm">
                            <p>Publiczne</p>
                        </div>
                        <div class="w-32 dropdown-content mt-2 p-2 bg-gray-100 dark:bg-gray-800 dark:border-gray-600 border rounded-md shadow-xl">
                            <p class="text-sm p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition rounded-md mb-1 cursor-pointer">Publiczne</p>
                            <p class="text-sm p-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition rounded-md mt-1 cursor-pointer">Znajomi</p>
                        </div> 
                    </div>
            </div>
            <textarea v-model="postContent.content" class="mt-5 mb-5 bg-transparent relative w-full resize-none custom-scrollbar text-xl focus:outline-none flex-grow" placeholder="Napisz, o czym myślisz..." autofocus></textarea>
            <div class="flex items-center justify-between">
                <div class="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-9 h-9 p-2 m-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-all cursor-pointer" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5" />
                    </svg>
                    <div class="h-11 w-px bg-gray-300 dark:bg-gray-700 ml-1 mr-1"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-9 h-9 p-2 m-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-all cursor-pointer" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <line x1="15" y1="8" x2="15.01" y2="8" />
                        <rect x="4" y="4" width="16" height="16" rx="3" />
                        <path d="M4 15l4 -4a3 5 0 0 1 3 0l5 5" />
                        <path d="M14 14l1 -1a3 5 0 0 1 3 0l2 2" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-9 h-9 p-2 m-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-all cursor-pointer" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="12" cy="12" r="6" />
                        <circle cx="5" cy="8" r="2" />
                        <circle cx="12" cy="4" r="2" />
                        <circle cx="19" cy="8" r="2" />
                        <circle cx="5" cy="16" r="2" />
                        <circle cx="19" cy="16" r="2" />
                        <path d="M8 22l4 -10l4 10" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-9 h-9 p-2 m-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-all cursor-pointer" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="12" cy="12" r="3" />
                        <circle cx="12" cy="12" r="8" />
                        <line x1="12" y1="2" x2="12" y2="4" />
                        <line x1="12" y1="20" x2="12" y2="22" />
                        <line x1="20" y1="12" x2="22" y2="12" />
                        <line x1="2" y1="12" x2="4" y2="12" />
                    </svg>
                </div>
                <div>
                    <button @click="sendPost" class="btn btn-sm normal-case font-normal dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white">Opublikuj
                    </button> 
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { useStore } from 'vuex'
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default {
    setup() {
        let postContent = {
            content: "",
        }

        const store = useStore()

        const closeCreatePost = () => {
            store.commit('switchCreatePost')
        }

        const sendPost = () => {
            const db = getFirestore();
            const colRef = collection(db, "posts");

            addDoc(colRef, {
                uid: store.getters.getUid,
                username: store.getters.getUsername,
                name: store.getters.getName,
                surname: store.getters.getSurname,
                profileImage: store.getters.getProfileImage,
                content: postContent.content,
                createdTimestamp: serverTimestamp()
            })
            .then(() => {
                console.log("success");
                store.commit('switchCreatePost')
                alert("Wysłano post");
            })
        }
        return {closeCreatePost, postContent, sendPost }
    }
}
</script>