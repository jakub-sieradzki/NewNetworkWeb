<template>
    <div>
        <div class="items-center ml-10 mr-10 flex-grow-0 flex-shrink-0"
                        style="width: 600px; height: max-content">
                        <div class="m-auto">
                            <div
                                class="flex w-52 h-9 items-center m-auto justify-between pl-4 pr-4 mb-3 border rounded-md dark:border-gray-800 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition text-sm bg-gray-200 dark:bg-gray-800 bg-opacity-20 dark:bg-opacity-40">
                                <p>Najnowsze</p>
                                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-5 h-5" width="44"
                                    height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </div>
                            <div class="m-auto" style="width: 530px">
                                <!-- Post -->
                                <div class="post" style="width: 530px;">
                                    <!-- Header -->
                                    <div class="post__header">
                                        <div class="post__header__user-info">
                                            <img src="images/profile-transparent.png"
                                                class="post__header__user-info__profile-picture" alt="photo">
                                            <div class="overflow-hidden">
                                                <p class="post__header__user-info__user-name">Joanna Kowalska</p>
                                                <p class="post__header__user-info__user-id">
                                                    @JoannaK2021</p>
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
                                        <p class="">Piękne widoki w <a class="post__content__link"
                                                href="">#Bieszczady</a>.
                                            Niestety, jutro już
                                            wyjeżdżam. Będę tęsknić 😥</p>
                                        <img class="post__content__img" src="images/bieszczady.jpg" alt="photo">
                                    </div>
                                    <!-- End Content -->
                                    <!-- Info -->
                                    <div class="post__info">
                                        <!--Categories list-->
                                        <div class="flex">
                                            <div class="bg-green-800 post__info__category">
                                                <p class="text-sm text-white">Natura</p>
                                            </div>
                                            <div class="bg-gray-500 post__info__category">
                                                <p class="text-sm text-white">Inna kategoria</p>
                                            </div>
                                            <div class="bg-blue-800 post__info__category">
                                                <p class="text-sm text-white">Coś tam</p>
                                            </div>
                                        </div>
                                        <p class="post__info__time">Wczoraj, 19:06</p>
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
                                            <p class="post__actions__action__text">156</p>
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
                                            <p class="post__actions__action__text">Komentarze <span
                                                    class="text-xs">(16)</span>
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
                                            <p class="post__actions__action__text">Udostępnij</p>
                                        </div>
                                    </div>
                                    <!--End Actions-->
                                </div>
                                <!-- End Post -->
                                <!-- Post -->
                                <div class="post" style="width: 530px;">
                                    <!-- Header -->
                                    <div class="post__header">
                                        <div class="post__header__user-info">
                                            <img src="images/prezes.png"
                                                class="post__header__user-info__profile-picture" alt="photo">
                                            <div class="w-full">
                                                <p class="post__header__user-info__user-name">Jarosław Kaczyński</p>
                                                <p class="post__header__user-info__user-id">
                                                    @PanPrezes</p>
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
                                        <p class="">Chciałem dać Kubie trudny egazmin, ale się nie udało :/ <a
                                                class="post__content__link" href="">@JakubS</a> szykuj się na EE.09 😼😈
                                        </p>
                                    </div>
                                    <!-- End Content -->
                                    <!-- Info -->
                                    <div class="post__info">
                                        <!--Categories list-->
                                        <div class="flex">
                                            <div class="bg-yellow-800 post__info__category">
                                                <p class="text-sm text-white">Polityka</p>
                                            </div>
                                            <div class="bg-yellow-600 post__info__category">
                                                <p class="text-sm text-white">Śmieszne</p>
                                            </div>
                                            <div class="bg-red-800 post__info__category">
                                                <p class="text-sm text-white">Informacje</p>
                                            </div>
                                        </div>
                                        <p class="post__info__time">Wczoraj, 19:06</p>
                                    </div>
                                    <!-- End Info -->
                                    <!--Fake news-->
                                    <div class="flex bg-red-500 dark:bg-red-800 w-full rounded-lg mt-3 p-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="self-center pr-3 w-20 h-12"
                                            width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFF"
                                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M12 9v2m0 4v.01" />
                                            <path
                                                d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75" />
                                        </svg>
                                        <div class="flex flex-col text-white mb-1">
                                            <p class="text-lg font-semibold">Ten post zawiera nieprawdziwe informacje
                                            </p>
                                            <p class="text-sm">Pan Prezes nie układa zadań egzaminacyjnych</p>
                                            <p class="text-xs mt-2">Zweryfikowano przez: demagog.org.pl</p>
                                        </div>
                                    </div>
                                    <!--End Fake news-->
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
                                            <p class="post__actions__action__text">15600</p>
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
                                            <p class="post__actions__action__text">Komentarze <span
                                                    class="text-xs">(160)</span>
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
                                            <p class="post__actions__action__text">Udostępnij</p>
                                        </div>
                                    </div>
                                    <!--End Actions-->
                                </div>
                                <!-- End Post -->
                                <!-- Post -->
                                <div class="post" style="width: 530px;">
                                    <!-- Header -->
                                    <div class="post__header">
                                        <div class="post__header__user-info">
                                            <img src="images/prezes.png"
                                                class="post__header__user-info__profile-picture" alt="photo">
                                            <div class="w-full">
                                                <p class="post__header__user-info__user-name">Jarosław Kaczyński</p>
                                                <p class="post__header__user-info__user-id">
                                                    @PanPrezes</p>
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
                                        <p class="">Chciałem dać Kubie trudny egazmin, ale się nie udało :/ <a
                                                class="post__content__link" href="">@JakubS</a> szykuj się na EE.09 😼😈
                                        </p>
                                    </div>
                                    <!-- End Content -->
                                    <!-- Info -->
                                    <div class="post__info">
                                        <!--Categories list-->
                                        <div class="flex">
                                            <div class="bg-yellow-800 post__info__category">
                                                <p class="text-sm text-white">Polityka</p>
                                            </div>
                                            <div class="bg-yellow-600 post__info__category">
                                                <p class="text-sm text-white">Śmieszne</p>
                                            </div>
                                            <div class="bg-red-800 post__info__category">
                                                <p class="text-sm text-white">Informacje</p>
                                            </div>
                                        </div>
                                        <p class="post__info__time">Wczoraj, 19:06</p>
                                    </div>
                                    <!-- End Info -->
                                    <!--Fake news-->
                                    <div class="flex bg-yellow-500 dark:bg-yellow-700 w-full rounded-lg mt-3 p-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="self-center pr-3 w-20 h-12"
                                            width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFF"
                                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <circle cx="12" cy="12" r="9" />
                                            <line x1="12" y1="8" x2="12" y2="12" />
                                            <line x1="12" y1="16" x2="12.01" y2="16" />
                                        </svg>
                                        <div class="flex flex-col text-white mb-1">
                                            <p class="text-lg font-semibold">Ten post zawiera manipulacje</p>
                                            <p class="text-sm">Pan Prezes nie jest z Jakubem na "ty"</p>
                                            <p class="text-xs mt-2">Zweryfikowano przez: demagog.org.pl</p>
                                        </div>
                                    </div>
                                    <!--End Fake news-->
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
                                            <p class="post__actions__action__text">15600</p>
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
                                            <p class="post__actions__action__text">Komentarze <span
                                                    class="text-xs">(160)</span>
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
                                            <p class="post__actions__action__text">Udostępnij</p>
                                        </div>
                                    </div>
                                    <!--End Actions-->
                                </div>
                                <!-- End Post -->
                            </div>
                        </div>

                        <div class="h-10">

                        </div>
                    </div>
    </div>
</template>
<script>
export default {
    
}
</script>