<template>
  <div class="dark:bg-gray-900 dark:text-white h-screen w-screen">
    <div class="w-full h-full flex flex-col">
      <header
        class="
          w-full
          h-14
          flex
          justify-between
          shadow-md
          dark:bg-gray-800
          flex-shrink-0
          bg-gray-100
        "
      >
        <p class="font-main text-xl self-center ml-4 w-48">
          New Network<span class="text-xs text-gray-400 ml-1">ALPHA</span>
        </p>
        <input
          placeholder="Szukaj"
          class="
            w-96
            h-10
            focus:outline-none
            self-center
            p-4
            rounded-full
            border border-gray-300
            bg-gray-200
            dark:bg-gray-700
            dark:border-gray-900
            focus:border-blue-500
          "
        />
        <div class="flex h-10 justify-end self-center w-48 mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="header__button-svg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#000"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"
            />
            <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
          </svg>
          <div
            class="
              flex
              items-center
              cursor-pointer
              w-auto
              bg-gray-200
              border
              dark:bg-gray-700
              dark:border-gray-900
              border-gray-300
              rounded-full
              overflow-hidden
            "
          >
            <img src="images/profile.png" class="w-10 h-10" alt="profile" />
            <p class="pl-3 pr-5">Jakub</p>
          </div>
        </div>
      </header>
      <div class="overflow-y-hidden flex h-full">
        <nav
          class="
            w-48
            pr-2
            pt-3
            h-full
            flex
            overflow-y-auto
            custom-scrollbar
            shadow-2xl
            sticky
            top-0
            left-0
            flex-shrink-0
            bg-gray-200 bg-opacity-10
            dark:bg-gray-800 dark:bg-opacity-25
          "
        >
          <div class="w-1 h-auto">
            <div class="h-12 bg-blue-600 rounded-r-xl"></div>
          </div>
          <div class="w-full flex flex-col">
            <div class="main-menu__element bg-gray-100 dark:bg-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="main-menu__element__icon"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="5 12 3 12 12 3 21 12 19 12" />
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
              </svg>
              <p class="self-center ml-2">Główna</p>
            </div>
            <div class="main-menu__element">
              <svg
                xmlns="http://www.w3.org/2000/svg "
                class="main-menu__element__icon"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
                <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
              </svg>
              <p class="self-center ml-2">Tekst</p>
            </div>
            <div class="main-menu__element">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="main-menu__element__icon"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="main-menu__element__icon"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="3" y="7" width="18" height="13" rx="2" />
                <polyline points="16 3 12 7 8 3" />
              </svg>
              <p class="self-center ml-2">Na żywo</p>
            </div>
            <div class="main-menu__element">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="main-menu__element__icon"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="15" y1="8" x2="15.01" y2="8" />
                <rect x="4" y="4" width="16" height="16" rx="3" />
                <path d="M4 15l4 -4a3 5 0 0 1 3 0l5 5" />
                <path d="M14 14l1 -1a3 5 0 0 1 3 0l2 2" />
              </svg>
              <p class="self-center ml-2">Zdjęcia</p>
            </div>
            <hr class="mt-2 mb-2 dark:border-gray-600" />
            <div class="main-menu__element">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="main-menu__element__icon"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="7" cy="5" r="2" />
                <path
                  d="M5 22v-5l-1 -1v-4a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4l-1 1v5"
                />
                <circle cx="17" cy="5" r="2" />
                <path
                  d="M15 22v-4h-2l2 -6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1l2 6h-2v4"
                />
              </svg>
              <p class="self-center ml-2">Znajomi</p>
            </div>
            <div class="main-menu__element">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="main-menu__element__icon"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="9" cy="7" r="4" />
                <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
              </svg>
              <p class="self-center ml-2">Grupy</p>
            </div>
            <div class="main-menu__element">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="main-menu__element__icon"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 3v4a1 1 0 0 0 1 1h4" />
                <path
                  d="M18 17h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h4l5 5v7a2 2 0 0 1 -2 2z"
                />
                <path
                  d="M16 17v2a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2"
                />
              </svg>
              <p class="self-center ml-2">Strony</p>
            </div>
            <hr class="mt-2 mb-2 dark:border-gray-600" />
            <div class="flex-1 flex-shrink"></div>
            <div class="main-menu__element">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="main-menu__element__icon"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"
                />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <p class="self-center ml-2">Ustawienia</p>
            </div>
            <p class="text-gray-400 text-xs text-center pt-3 pb-3">
              &copy; New Network 2021
            </p>
          </div>
        </nav>
        <div class="w-full h-full overflow-y-scroll pt-3 custom-scrollbar">
          <div class="flex">
            <div class="flex-grow w-10 flex-shrink"></div>
            <!--Categories-->
            <div class="sticky top-0 w-64" style="height: 600px">
              <div class="w-64 float-right" style="height: 600px">
                <div
                  class="
                    w-64
                    h-3/4
                    rounded-md
                    border border-gray-300
                    dark:border-gray-800
                    shadow-xl
                    flex flex-col flex-shrink-0
                    bg-gray-200 bg-opacity-10
                    dark:bg-gray-800 dark:bg-opacity-25
                  "
                >
                  <div
                    class="
                      flex
                      h-12
                      items-center
                      pl-4
                      pr-4
                      hover:bg-gray-100
                      dark:hover:bg-gray-700
                      overflow-y
                      rounded-t-md
                      cursor-pointer
                      transition
                      flex-shrink-0
                    "
                  >
                    <p class="text-center">Kategorie</p>
                    <div class="flex-grow"></div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="stroke-current w-5 h-5"
                      width="44"
                      height="44"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                  <div
                    class="
                      flex
                      items-center
                      mb-1
                      pb-2
                      pl-4
                      pt-2
                      hover:bg-gray-200
                      dark:hover:bg-gray-700
                      cursor-pointer
                      transition
                    "
                  >
                    <input
                      type="checkbox"
                      class="cursor-pointer w-4 h-4 mr-2"
                    />
                    <p>Wszystkie</p>
                  </div>
                  <div
                    class="
                      relative
                      h-full
                      mr-1
                      overflow-y-scroll
                      custom-scrollbar
                    "
                  >
                    <div class="ml-2 mr-4">
                      <div
                        class="
                          categories__single-item
                          border-green-800
                          hover:bg-green-800
                          bg-green-800
                          text-white
                        "
                      >
                        <input
                          type="checkbox"
                          checked="true"
                          class="cursor-pointer w-4 h-4 mr-2"
                        />
                        <p>Natura</p>
                      </div>
                      <div
                        class="
                          categories__single-item
                          border-yellow-800
                          hover:bg-yellow-800
                        "
                      >
                        <input
                          type="checkbox"
                          class="cursor-pointer w-4 h-4 mr-2"
                        />
                        <p>Polityka</p>
                      </div>
                      <div
                        class="
                          categories__single-item
                          border-red-900
                          hover:bg-red-900
                          bg-red-900
                          text-white
                        "
                      >
                        <input
                          type="checkbox"
                          checked="true"
                          class="cursor-pointer w-4 h-4 mr-2"
                        />
                        <p>Gry</p>
                      </div>
                      <div
                        class="
                          categories__single-item
                          border-indigo-800
                          hover:bg-indigo-800
                          bg-indigo-800
                          text-white
                        "
                      >
                        <input
                          type="checkbox"
                          checked="true"
                          class="cursor-pointer w-4 h-4 mr-2"
                        />
                        <p>Historia</p>
                      </div>
                      <div
                        class="
                          categories__single-item
                          border-purple-800
                          hover:bg-purple-800
                        "
                      >
                        <input
                          type="checkbox"
                          class="cursor-pointer w-4 h-4 mr-2"
                        />
                        <p>Edukacja</p>
                      </div>
                      <div
                        class="
                          categories__single-item
                          border-pink-900
                          hover:bg-pink-900
                        "
                      >
                        <input
                          type="checkbox"
                          class="cursor-pointer w-4 h-4 mr-2"
                        />
                        <p>Uroda</p>
                      </div>
                      <div
                        class="
                          categories__single-item
                          border-blue-700
                          hover:bg-blue-700
                          bg-blue-700
                          text-white
                        "
                      >
                        <input
                          type="checkbox"
                          checked="true"
                          class="cursor-pointer w-4 h-4 mr-2"
                        />
                        <p>Motoryzacja</p>
                      </div>
                      <div
                        class="
                          categories__single-item
                          border-gray-700
                          hover:bg-gray-700
                        "
                      >
                        <input
                          type="checkbox"
                          class="cursor-pointer w-4 h-4 mr-2"
                        />
                        <p>Lotnictwo</p>
                      </div>
                      <div
                        class="
                          categories__single-item
                          border-indigo-700
                          hover:bg-indigo-700
                        "
                      >
                        <input
                          type="checkbox"
                          class="cursor-pointer w-4 h-4 mr-2"
                        />
                        <p>Zdrowie</p>
                      </div>
                      <div
                        class="
                          categories__single-item
                          border-green-700
                          hover:bg-green-700
                        "
                      >
                        <input
                          type="checkbox"
                          class="cursor-pointer w-4 h-4 mr-2"
                        />
                        <p>Gotowanie</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="
                    w-64
                    flex
                    items-center
                    p-8
                    mt-12
                    justify-center
                    rounded-md
                    transition
                    cursor-pointer
                    transform
                    hover:scale-105
                    bg-gradient-to-r
                    from-blue-600
                    to-blue-900
                    shadow-2xl
                  "
                >
                  <img src="images/add.svg" alt="add" class="w-8 h-8 mr-1" />
                  <p class="text-xl text-white">Nowy post</p>
                </div>
              </div>
            </div>
            <!--End Categories-->
            <!--Posts Section-->
            <div
              class="items-center ml-10 mr-10 flex-grow-0 flex-shrink-0"
              style="width: 600px; height: max-content"
            >
              <div class="m-auto">
                <div
                  class="
                    flex
                    w-52
                    h-9
                    items-center
                    m-auto
                    justify-between
                    pl-4
                    pr-4
                    mb-3
                    border
                    rounded-md
                    dark:border-gray-800
                    cursor-pointer
                    hover:bg-gray-100
                    dark:hover:bg-gray-800
                    transition
                    text-sm
                    bg-gray-200
                    dark:bg-gray-800
                    bg-opacity-20
                    dark:bg-opacity-40
                  "
                >
                  <p>Najnowsze</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="stroke-current w-5 h-5"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
                <div class="m-auto" style="width: 530px">
                  <!-- Post -->
                  <div class="post" style="width: 530px">
                    <!-- Header -->
                    <div class="post__header">
                      <div class="post__header__user-info">
                        <img
                          src="images/profile-transparent.png"
                          class="post__header__user-info__profile-picture"
                          alt="photo"
                        />
                        <div class="overflow-hidden">
                          <p class="post__header__user-info__user-name">
                            Joanna Kowalska
                          </p>
                          <p class="post__header__user-info__user-id">
                            @JoannaK2021
                          </p>
                        </div>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="post__header__actions-button"
                        width="44"
                        height="44"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#2c3e50"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="12" cy="19" r="1" />
                        <circle cx="12" cy="5" r="1" />
                      </svg>
                    </div>
                    <!-- End Header -->
                    <!-- Content -->
                    <div class="post__content">
                      <p class="">
                        Piękne widoki w
                        <a class="post__content__link" href="">#Bieszczady</a>.
                        Niestety, jutro już wyjeżdżam. Będę tęsknić 😥
                      </p>
                      <img
                        class="post__content__img"
                        src="images/bieszczady.jpg"
                        alt="photo"
                      />
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
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="post__actions__action__icon"
                          width="44"
                          height="44"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="#2c3e50"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <circle cx="12" cy="12" r="2" />
                          <path
                            d="M12 19c-4 0 -7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7c-.42 .736 -.858 1.414 -1.311 2.033"
                          />
                          <path d="M15 19l2 2l4 -4" />
                        </svg>
                        <p class="post__actions__action__text">156</p>
                      </div>
                      <div class="post__actions__action">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="post__actions__action__icon"
                          width="44"
                          height="44"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="#2c3e50"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path
                            d="M12 20l-3 -3h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-2l-3 3"
                          />
                          <line x1="8" y1="9" x2="16" y2="9" />
                          <line x1="8" y1="13" x2="14" y2="13" />
                        </svg>
                        <p class="post__actions__action__text">
                          Komentarze <span class="text-xs">(16)</span>
                        </p>
                      </div>
                      <div class="post__actions__action">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="post__actions__action__icon"
                          width="44"
                          height="44"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="#2c3e50"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
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
                  <div class="post" style="width: 530px">
                    <!-- Header -->
                    <div class="post__header">
                      <div class="post__header__user-info">
                        <img
                          src="images/profile.png"
                          class="post__header__user-info__profile-picture"
                          alt="photo"
                        />
                        <div class="w-full">
                          <p class="post__header__user-info__user-name">
                            Imię Nazwisko
                          </p>
                          <p class="post__header__user-info__user-id">
                            @PanNazwisko
                          </p>
                        </div>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="post__header__actions-button"
                        width="44"
                        height="44"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#2c3e50"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="12" cy="19" r="1" />
                        <circle cx="12" cy="5" r="1" />
                      </svg>
                    </div>
                    <!-- End Header -->
                    <!-- Content -->
                    <div class="post__content">
                      <p class="">
                        Chciałem dać Kubie trudny egazmin, ale się nie udało :/
                        <a class="post__content__link" href="">@JakubS</a>
                        szykuj się na EE.09 😼😈
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
                    <div
                      class="
                        flex
                        bg-red-500
                        dark:bg-red-800
                        w-full
                        rounded-lg
                        mt-3
                        p-3
                      "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="self-center pr-3 w-20 h-12"
                        width="44"
                        height="44"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#FFF"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 9v2m0 4v.01" />
                        <path
                          d="M5 19h14a2 2 0 0 0 1.84 -2.75l-7.1 -12.25a2 2 0 0 0 -3.5 0l-7.1 12.25a2 2 0 0 0 1.75 2.75"
                        />
                      </svg>
                      <div class="flex flex-col text-white mb-1">
                        <p class="text-lg font-semibold">
                          Ten post zawiera nieprawdziwe informacje
                        </p>
                        <p class="text-sm">
                          Pan Nazwisko nie układa zadań egzaminacyjnych
                        </p>
                        <p class="text-xs mt-2">
                          Zweryfikowano przez: demagog.org.pl
                        </p>
                      </div>
                    </div>
                    <!--End Fake news-->
                    <!--Actions-->
                    <div class="post__actions">
                      <div class="post__actions__action">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="post__actions__action__icon"
                          width="44"
                          height="44"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="#2c3e50"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <circle cx="12" cy="12" r="2" />
                          <path
                            d="M12 19c-4 0 -7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7c-.42 .736 -.858 1.414 -1.311 2.033"
                          />
                          <path d="M15 19l2 2l4 -4" />
                        </svg>
                        <p class="post__actions__action__text">15600</p>
                      </div>
                      <div class="post__actions__action">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="post__actions__action__icon"
                          width="44"
                          height="44"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="#2c3e50"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path
                            d="M12 20l-3 -3h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-2l-3 3"
                          />
                          <line x1="8" y1="9" x2="16" y2="9" />
                          <line x1="8" y1="13" x2="14" y2="13" />
                        </svg>
                        <p class="post__actions__action__text">
                          Komentarze <span class="text-xs">(160)</span>
                        </p>
                      </div>
                      <div class="post__actions__action">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="post__actions__action__icon"
                          width="44"
                          height="44"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="#2c3e50"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
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
                  <div class="post" style="width: 530px">
                    <!-- Header -->
                    <div class="post__header">
                      <div class="post__header__user-info">
                        <img
                          src="images/profile.png"
                          class="post__header__user-info__profile-picture"
                          alt="photo"
                        />
                        <div class="w-full">
                          <p class="post__header__user-info__user-name">
                            Imię Nazwisko
                          </p>
                          <p class="post__header__user-info__user-id">
                            @PanNazwisko
                          </p>
                        </div>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="post__header__actions-button"
                        width="44"
                        height="44"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#2c3e50"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="12" cy="19" r="1" />
                        <circle cx="12" cy="5" r="1" />
                      </svg>
                    </div>
                    <!-- End Header -->
                    <!-- Content -->
                    <div class="post__content">
                      <p class="">
                        Chciałem dać Kubie trudny egazmin, ale się nie udało :/
                        <a class="post__content__link" href="">@JakubS</a>
                        szykuj się na EE.09 😼😈
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
                    <div
                      class="
                        flex
                        bg-yellow-500
                        dark:bg-yellow-700
                        w-full
                        rounded-lg
                        mt-3
                        p-3
                      "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="self-center pr-3 w-20 h-12"
                        width="44"
                        height="44"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#FFF"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="12" cy="12" r="9" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                      <div class="flex flex-col text-white mb-1">
                        <p class="text-lg font-semibold">
                          Ten post zawiera manipulacje
                        </p>
                        <p class="text-sm">
                          Pan Nazwisko nie jest z Jakubem na "ty"
                        </p>
                        <p class="text-xs mt-2">
                          Zweryfikowano przez: demagog.org.pl
                        </p>
                      </div>
                    </div>
                    <!--End Fake news-->
                    <!--Actions-->
                    <div class="post__actions">
                      <div class="post__actions__action">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="post__actions__action__icon"
                          width="44"
                          height="44"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="#2c3e50"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <circle cx="12" cy="12" r="2" />
                          <path
                            d="M12 19c-4 0 -7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7c-.42 .736 -.858 1.414 -1.311 2.033"
                          />
                          <path d="M15 19l2 2l4 -4" />
                        </svg>
                        <p class="post__actions__action__text">15600</p>
                      </div>
                      <div class="post__actions__action">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="post__actions__action__icon"
                          width="44"
                          height="44"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="#2c3e50"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path
                            d="M12 20l-3 -3h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-2l-3 3"
                          />
                          <line x1="8" y1="9" x2="16" y2="9" />
                          <line x1="8" y1="13" x2="14" y2="13" />
                        </svg>
                        <p class="post__actions__action__text">
                          Komentarze <span class="text-xs">(160)</span>
                        </p>
                      </div>
                      <div class="post__actions__action">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="post__actions__action__icon"
                          width="44"
                          height="44"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="#2c3e50"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
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

              <div class="h-10"></div>
            </div>
            <!--End Post Section-->
            <!--Popular-->
            <div class="sticky top-0" style="height: 680px">
              <div
                class="
                  w-96
                  rounded-md
                  shadow-lg
                  border
                  dark:border-gray-800
                  overflow-y-hidden
                  flex flex-col
                  bg-gray-200 bg-opacity-10
                  dark:bg-gray-800 dark:bg-opacity-25
                "
                style="height: 680px"
              >
                <p class="popular__header">Najpopularniejsze</p>
                <div class="popular__list">
                  <div class="">
                    <div class="popular__list-item">
                      <p class="popular__list-item__number border-yellow-400">
                        1
                      </p>
                      <div class="ml-3 overflow-hidden self-center">
                        <p class="truncate text-sm">
                          @PanPrezes: Chciałem Kubie dać trudny egzamin, ale się
                          nie udało :/
                        </p>
                        <p class="text-xs">Widziało: 15600</p>
                      </div>
                    </div>
                    <div class="popular__list-item">
                      <p class="popular__list-item__number border-gray-400">
                        2
                      </p>
                      <div class="ml-3 overflow-hidden self-center">
                        <p class="truncate text-sm">
                          @PanPrezes: Chciałem Kubie dać trudny egzamin, ale się
                          nie udało :/
                        </p>
                        <p class="text-xs">Widziało: 15600</p>
                      </div>
                    </div>
                    <div class="popular__list-item">
                      <p class="popular__list-item__number border-yellow-700">
                        3
                      </p>
                      <div class="ml-3 overflow-hidden self-center">
                        <p class="truncate text-sm">
                          @PanPrezes: Chciałem Kubie dać trudny egzamin, ale się
                          nie udało :/
                        </p>
                        <p class="text-xs">Widziało: 15600</p>
                      </div>
                    </div>
                    <div class="popular__list-item">
                      <p
                        class="popular__list-item__number dark:border-gray-700"
                      >
                        4
                      </p>
                      <div class="ml-3 overflow-hidden self-center">
                        <p class="truncate text-sm">
                          @PanPrezes: Chciałem Kubie dać trudny egzamin, ale się
                          nie udało :/
                        </p>
                        <p class="text-xs">Widziało: 15600</p>
                      </div>
                    </div>
                    <div class="popular__list-item">
                      <p
                        class="popular__list-item__number dark:border-gray-700"
                      >
                        5
                      </p>
                      <div class="ml-3 overflow-hidden self-center">
                        <p class="truncate text-sm">
                          @PanPrezes: Chciałem Kubie dać trudny egzamin, ale się
                          nie udało :/
                        </p>
                        <p class="text-xs">Widziało: 15600</p>
                      </div>
                    </div>
                    <div class="popular__list-item">
                      <p
                        class="popular__list-item__number dark:border-gray-700"
                      >
                        6
                      </p>
                      <div class="ml-3 overflow-hidden self-center">
                        <p class="truncate text-sm">
                          @PanPrezes: Chciałem Kubie dać trudny egzamin, ale się
                          nie udało :/
                        </p>
                        <p class="text-xs">Widziało: 15600</p>
                      </div>
                    </div>
                    <div class="popular__list-item">
                      <p
                        class="popular__list-item__number dark:border-gray-700"
                      >
                        7
                      </p>
                      <div class="ml-3 overflow-hidden self-center">
                        <p class="truncate text-sm">
                          @PanPrezes: Chciałem Kubie dać trudny egzamin, ale się
                          nie udało :/
                        </p>
                        <p class="text-xs">Widziało: 15600</p>
                      </div>
                    </div>
                    <div class="popular__list-item">
                      <p
                        class="popular__list-item__number dark:border-gray-700"
                      >
                        8
                      </p>
                      <div class="ml-3 overflow-hidden self-center">
                        <p class="truncate text-sm">
                          @PanPrezes: Chciałem Kubie dać trudny egzamin, ale się
                          nie udało :/
                        </p>
                        <p class="text-xs">Widziało: 15600</p>
                      </div>
                    </div>
                    <div class="popular__list-item">
                      <p
                        class="popular__list-item__number dark:border-gray-700"
                      >
                        9
                      </p>
                      <div class="ml-3 overflow-hidden self-center">
                        <p class="truncate text-sm">
                          @PanPrezes: Chciałem Kubie dać trudny egzamin, ale się
                          nie udało :/
                        </p>
                        <p class="text-xs">Widziało: 15600</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--End popular-->
            <div class="flex-grow w-24 flex-shrink"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>