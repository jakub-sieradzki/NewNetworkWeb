<template>
    <!-- Post -->
                                <div class="post flex-grow">
                                    <!-- Header -->
                                    <div class="post__header">
                                        <div class="post__header__user-info">
                                            <img src="images/profile-transparent.png"
                                                class="post__header__user-info__profile-picture" alt="photo">
                                            <div class="overflow-hidden">
                                                <p class="post__header__user-info__user-name">{{ name }} {{ surname }}</p>
                                                <p class="post__header__user-info__user-id">
                                                    {{ uid }}</p>
                                            </div>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="post__header__actions-button"
                                            width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5"
                                            stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <circle cx="12" cy="12" r="1" />
                                            <circle cx="12" cy="19" r="1" />
                                            <circle cx="12" cy="5" r="1" />
                                        </svg>
                                    </div>
                                    <!-- End Header -->
                                    <!-- Content -->
                                    <div class="post__content">
                                        <p class="">{{ content }}</p>
                                    </div>
                                    <!-- End Content -->
                                    <!-- Info -->
                                    <div class="post__info">
                                        <!--Categories list-->
                                        <div class="flex h-7 text-center overflow-x-scroll">
                                            <div class="bg-green-800 post__info__category">
                                                <p class="text-sm text-white whitespace-nowrap">Natura</p>
                                            </div>
                                            <div class="bg-gray-500 post__info__category">
                                                <p class="text-sm text-white whitespace-nowrap">Inna kategoria</p>
                                            </div>
                                            <div class="bg-blue-800 post__info__category">
                                                <p class="text-sm text-white whitespace-nowrap">Coś tam</p>
                                            </div>
                                        </div>
                                        <p class="post__info__time flex-shrink truncate w-1/4">{{ date_created }}</p>
                                    </div>
                                    <!-- End Info -->
                                    <!--Actions-->
                                    <div class="post__actions">
                                        <div class="post__actions__action">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="post__actions__action__icon"
                                                width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5"
                                                stroke="#2c3e50" fill="none" stroke-linecap="round"
                                                stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <circle cx="12" cy="12" r="2" />
                                                <path
                                                    d="M12 19c-4 0 -7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7c-.42 .736 -.858 1.414 -1.311 2.033" />
                                                <path d="M15 19l2 2l4 -4" />
                                            </svg>
                                            <p class="post__actions__action__text">{{ views }}</p>
                                        </div>
                                        <div class="post__actions__action">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="post__actions__action__icon"
                                                width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5"
                                                stroke="#2c3e50" fill="none" stroke-linecap="round"
                                                stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path
                                                    d="M12 20l-3 -3h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-2l-3 3" />
                                                <line x1="8" y1="9" x2="16" y2="9" />
                                                <line x1="8" y1="13" x2="14" y2="13" />
                                            </svg>
                                            <p class="post__actions__action__text"><span class="hidden sm:inline-block">Komentarze</span> <span
                                                    class="sm:text-xs"><span class="hidden sm:inline-block">(</span>{{ com_count }}<span class="hidden sm:inline-block">)</span></span>
                                            </p>
                                        </div>
                                        <div class="post__actions__action">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="post__actions__action__icon"
                                                width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5"
                                                stroke="#2c3e50" fill="none" stroke-linecap="round"
                                                stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <circle cx="6" cy="12" r="3" />
                                                <circle cx="18" cy="6" r="3" />
                                                <circle cx="18" cy="18" r="3" />
                                                <line x1="8.7" y1="10.7" x2="15.3" y2="7.3" />
                                                <line x1="8.7" y1="13.3" x2="15.3" y2="16.7" />
                                            </svg>
                                            <p class="hidden sm:block post__actions__action__text">Udostępnij</p>
                                        </div>
                                    </div>
                                    <!--End Actions-->
                                </div>
                                <!-- End Post -->
</template>
<script>
export default {
props: ['name', 'surname', 'uid', 'content', 'date_created', 'views', 'com_count'],
}
</script>