<template>
  <div class="dark:bg-gray-900 dark:text-white h-screen w-screen">
    <div class="w-full h-full flex flex-col">
        <Navbar />
        <div class="overflow-y-hidden flex h-full">
            <Navpanel />
            <div class="w-full h-full overflow-y-scroll pt-3 custom-scrollbar">
                <div class="flex">
                    <div class="flex-grow w-10 flex-shrink">
                    </div>
                    <!--Categories-->
                        <Categories />
                    <!--End Categories-->
                    <!--Posts Section-->
                        <Main />
                    <!--End Post Section-->
                    <!--Popular-->
                        <Popular />
                    <!--End popular-->
                    <div class="flex-grow w-24 flex-shrink">
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
</template>
<script>
import Categories from './Categories.vue';
import Main from './Main.vue';
import Navbar from './Navbar.vue';
import Navpanel from './Navpanel.vue';
import Popular from './Popular.vue';


export default {
  components: {
    Popular,
    Navbar,
    Navpanel,
    Categories,
    Main,
    },

  name: "App",
};
</script>