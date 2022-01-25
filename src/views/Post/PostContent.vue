<template>
  <div v-if="allSegments">
    <span v-for="segment in allSegments" :key="segment.key">
      <span>{{ segment.before }}</span>
      <span class="postLinkStyle" @click="navToHashtag(segment.hashtag.slice(1).toLowerCase())">{{ segment.hashtag }}</span>
      <span>{{ segment.after }}</span>
    </span>
  </div>
  <p v-else>{{ postContent }}</p>
</template>
<script>
export default {
  props: ["postContent", "postHashtags"],
  data() {
    return {
      linksGenerate: false,
      allSegments: null,
    };
  },
  mounted() {
    if (this.postHashtags) {
      if (this.postHashtags.length > 0) {
        let contentString = this.postContent;
        let hashtagsArray = this.postHashtags;
        let postContentLowerCase = this.postContent.slice().toLowerCase();
        let allContent = {};
        for (let i = 0; i < hashtagsArray.length; i++) {
          let segment = {};
          let hashtag = "#" + hashtagsArray[i];
          let hashtagIndex = postContentLowerCase.indexOf(hashtag);
          segment["before"] = contentString.slice(0, hashtagIndex);
          segment["hashtag"] = contentString.slice(hashtagIndex, hashtagIndex + hashtag.length);

          if (i == hashtagsArray.length - 1) {
            segment["after"] = contentString.slice(hashtagIndex + hashtag.length);
          }

          contentString = contentString.slice(hashtagIndex + hashtag.length);
          postContentLowerCase = postContentLowerCase.slice(hashtagIndex + hashtag.length);

          allContent[i] = segment;
        }
        this.allSegments = allContent;
      }
    }
  },
  methods: {
      navToHashtag(value) {
          this.$router.push("/hashtag/" + value);
      }
  }
};
</script>
