<template>
  <div class="fixed top-0 h-screen w-screen md:bg-gray-200/60 dark:md:bg-gray-800/80 md:backdrop-blur-sm z-30">
    <div class="flex flex-col justify-center w-full h-full md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:py-16 md:px-12" style="max-width: 800px">
      <div class="flex flex-col flex-grow-0 h-full md:h-auto bg-gray-50 dark:bg-gray-900 md:shadow-2xl md:rounded-xl px-6 py-5">
        <div class="flex justify-between mb-3">
          <p>Edytuj zdjęcie</p>
          <svg @click="closeEditImage" xmlns="http://www.w3.org/2000/svg" class="stroke-current w-7 h-7 p-1 rounded-full lg:hover:bg-gray-200 dark:lg:hover:bg-gray-800 transition-all cursor-pointer" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
        <vue-cropper class="h-96" ref="imageCropper" :src="imageToChangeUrl" :aspect-ratio="1 / 1" :dragMode="'move'" />
        <div class="flex w-full justify-between py-3">
          <div class="flex gap-1">
            <div @click="zoom(0.2)" class="cropImageButton">
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current p-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="10" cy="10" r="7" />
                <line x1="7" y1="10" x2="13" y2="10" />
                <line x1="10" y1="7" x2="10" y2="13" />
                <line x1="21" y1="21" x2="15" y2="15" />
              </svg>
            </div>
            <div @click="zoom(-0.2)" class="cropImageButton">
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current p-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="10" cy="10" r="7" />
                <line x1="7" y1="10" x2="13" y2="10" />
                <line x1="21" y1="21" x2="15" y2="15" />
              </svg>
            </div>
            <div ref="scaleXbutton" @click="scaleX()" class="cropImageButton ml-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current p-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="12" y1="3" x2="12" y2="21" />
                <polyline points="16 7 16 17 21 17 16 7" />
                <polyline points="8 7 8 17 3 17 8 7" />
              </svg>
            </div>
            <div ref="scaleYbutton" @click="scaleY()" class="cropImageButton mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current p-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <polyline points="7 16 17 16 7 21 7 16" />
                <polyline points="7 8 17 8 7 3 7 8" />
              </svg>
            </div>
            <div @mousedown="startRotating(-2)" @mouseup="stopRotating()" class="cropImageButton">
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current p-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19.95 11a8 8 0 1 0 -.5 4m.5 5v-5h-5" />
              </svg>
            </div>
            <div @mousedown="startRotating(2)" @mouseup="stopRotating()" class="cropImageButton">
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current p-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4.05 11a8 8 0 1 1 .5 4m-.5 5v-5h5" />
              </svg>
            </div>
          </div>
          <div @click="crop" class="flex items-center justify-center w-20 bg-emerald-600 lg:hover:bg-emerald-700 rounded-md cursor-pointer transition">
            <p class="text-sm text-white">Gotowe</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueCropper from "vue-cropperjs";
export default {
  props: ["imageToChangeUrl"],
  components: {
    VueCropper,
  },
  data() {
    return {
      rotateInterval: null,
    };
  },
  methods: {
    closeEditImage() {
      this.$parent.showEditImage = false;
    },
    zoom(value) {
      this.$refs.imageCropper.relativeZoom(value);
    },
    scaleX() {
      const button = this.$refs.scaleXbutton;
      let scale = button.getAttribute("data-scale");
      scale = scale ? -scale : -1;
      this.$refs.imageCropper.scaleX(scale);
      button.setAttribute("data-scale", scale);
    },
    scaleY() {
      const button = this.$refs.scaleYbutton;
      let scale = button.getAttribute("data-scale");
      scale = scale ? -scale : -1;
      this.$refs.imageCropper.scaleY(scale);
      button.setAttribute("data-scale", scale);
    },
    startRotating(value) {
      this.$refs.imageCropper.rotate(value);

      this.rotateInterval = setInterval(() => {
        this.$refs.imageCropper.rotate(value);
      }, 100);
    },
    stopRotating() {
      clearInterval(this.rotateInterval);
    },
    crop() {
      const imgCanvas = this.$refs.imageCropper.getCroppedCanvas();
      imgCanvas.toBlob((blob) => {
        this.$parent.readyProfileImageUrl = URL.createObjectURL(blob);
        this.$parent.isProfileImageEdited = true;
        this.closeEditImage();
      }, "image/jpeg");
    },
  },
  mounted() {
    console.log("mounted");
  },
};
</script>
