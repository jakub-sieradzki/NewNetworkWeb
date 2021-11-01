<template>
    <div class="h-full w-full">
        <div class="mt-1 relative">
            <img class='h-40 w-full object-cover shadow-md' src="images/wallpaper.jpg" alt="ProfileBackground">
            <img class="absolute top-20 left-1/2 transform -translate-x-1/2 h-40 rounded-full shadow-xl" src="images/profile.png" alt="ProfilePhoto">
            <div class="w-full pt-24 px-5">
                <p class="text-center text-2xl font-bold">Jakub Sieradzki</p>
                <p class="text-center text-sm mt-4 px-5 text-gray-500 dark:text-gray-400">Kto chce, szuka sposobu, kto nie chce, szuka powodu</p>
                <div class="tabs border-white flex-grow flex-nowrap w-full mt-10 pb-5 overflow-x-auto">
                    <router-link to="/profile/posts" class="tab tab-bordered flex-grow tab-active">Posty</router-link>
                    <router-link to="/profile/gallery" class="tab tab-bordered flex-grow">Galeria</router-link>
                    <router-link to="/profile/friends" class="tab tab-bordered flex-grow">Znajomi</router-link>
                    <router-link to="/profile/info" class="tab tab-bordered flex-grow">Informacje</router-link>
                </div>
                <router-view name="profileContent"></router-view>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    setup() {
        
    },
}
</script>
