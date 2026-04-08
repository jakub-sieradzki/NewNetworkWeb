# New Network (Web)

New Network is a modern, fully-featured social media web application. It provides users with a comprehensive platform to connect, share, and build communities. 

## About the Project

**New Network** includes all the core functionalities expected from a social networking platform:

* **User Profiles & Friends:** Users can create personalized profiles, upload avatars, add friends, and manage their personal image galleries.
* **Groups & Pages:** The platform supports community building through Groups (with member management, rules, and join requests) and Public Pages.
* **Rich Interactions:** Users can create posts, share content, and engage via comments. The text editor supports hashtags, mentions, and automatic link previews.
* **Personalized Experience:** Features an Out-Of-Box Experience (OOBE) onboarding process where users can select their interests (categories) to tailor their home feed.
* **Real-time Notifications:** Users stay updated with a dedicated notifications system.
* **Search & Discovery:** Built-in search functionality to find people, groups, pages, and popular content.

## Tech Stack & Key Libraries

This project uses the following major technologies:

* **Framework:** Vue 3, Vue Router, Vuex
* **Backend:** Firebase (v9)
* **Styling:** Tailwind CSS, DaisyUI, tailwind-scrollbar
* **Utilities & Features:**
  * `cropperjs` / `vue-cropperjs`: For profile/cover image cropping.
  * `photoswipe`: For immersive image viewing and galleries.
  * `linkifyjs` & `link-preview-generator`: For parsing URLs, hashtags, and mentions in text data.
  * `luxon`: For date and time formatting.

## Project Setup

To get the project running locally, you need Node.js and npm installed. Follow these steps:

### Install dependencies

    npm install

### Compiles and hot-reloads for development

    npm run serve

### Compiles and minifies for production

    npm run build

## Configuration

For advanced configuration regarding the Vue environment, see the Configuration Reference at https://cli.vuejs.org/config/.
