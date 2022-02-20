<template>
  <create-new-group v-if="showCreateNewGroup" />
  <div class="flex w-full h-fit pt-24 px-5 justify-center">
    <div class="flex flex-col w-full sm:w-5/6 md:w-2/3 items-center">
      <p class="text-5xl font-semibold py-5">Twoje grupy</p>
      <div class="flex flex-col w-full gap-8 mt-10">
        <div class="flex flex-col gap-3">
          <p class="text-sm font-semibold">Grupy, do których dołączyłeś</p>
          <div class="flex flex-col sm:flex-row gap-4">
            <div v-for="group in joinedInfoList" :key="group.id">
              <single-group-list-item :group="group"/>
            </div>
          </div>
        </div>
        <div class="flex flex-col w-full gap-3">
          <p class="text-sm font-semibold">Grupy, którymi administrujesz lub które moderujesz</p>
          <div class="flex flex-col sm:flex-row gap-4 flex-wrap">
            <div @click="toggleShowCreateNewGroup" class="flex px-6 py-7 w-full sm:w-56 h-24 border-4 border-dashed dark:border-gray-800 hover:dark:border-gray-700 rounded-lg items-center gap-3 cursor-pointer hover:border-gray-400 transition duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current w-7 h-7" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              <p class="text-sm">Utwórz nową grupę</p>
            </div>
            <div v-for="group in administeredInfoList" :key="group.id">
              <single-group-list-item :group="group"/>
            </div>
            <div v-for="group in moderatedInfoList" :key="group.id">
              <single-group-list-item :group="group"/>
            </div>
          </div>
        </div>
      </div>
      <div class="h-24 w-full">
      </div>
    </div> 
  </div>
</template>
<script>
import SingleGroupListItem from "@/components/SingleGroupListItem.vue";
import CreateNewGroup from "@/views/Group/CreateNewGroup.vue";
import { mapState } from "vuex";
import { getGroupsInfo } from "@/database/getData";
export default {
  components: {
    CreateNewGroup,
    SingleGroupListItem,
  },
  data() {
    return {
      showCreateNewGroup: false,
      administeredInfoList: [],
      moderatedInfoList: [],
      joinedInfoList: [],
    };
  },
  computed: {
    ...mapState("userGroupsInfo", ["joined", "administered", "moderated"]),
  },
  methods: {
    toggleShowCreateNewGroup() {
      this.showCreateNewGroup = !this.showCreateNewGroup;
    },
  },
  async mounted() {
    console.log("administered pages: ", this.administered);
    this.joinedInfoList = await getGroupsInfo(this.joined);
    this.administeredInfoList = await getGroupsInfo(this.administered);
    this.moderatedInfoList = await getGroupsInfo(this.moderated);
  },
};
</script>
