<template>
    <div class="h-full w-full overflow-y-scroll">
        <div class="mt-1 relative">
            <img  class='h-40 w-full object-cover shadow-md' src="images/wallpaper.jpg" alt="ProfileBackground">
            <input type="file" id="imageFile" ref="imageFile" accept="image/*" style="display: none;">
            <img onclick="document.getElementById('imageFile').click();" ref="profileImg" class=" cursor-pointer absolute top-20 left-1/2 transform -translate-x-1/2 h-40 w-40 rounded-full shadow-xl" src="images/profile.png" alt="ProfilePhoto">
            <div class="w-full pt-24 px-5">
                <p class="text-center text-2xl font-bold">{{ name }} {{ surname }}</p>
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
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, setDoc, doc, addDoc, document } from 'firebase/firestore';
import { useStore } from 'vuex'
export default {
    setup() {
        const store = useStore()

        const name = store.getters.getName;
        const surname = store.getters.getSurname;

        return {name, surname}
    },
    mounted() {
        const storage = getStorage();
        const store = useStore();

        if(store.getters.getProfileImage) {
            getDownloadURL(ref(storage, store.getters.getProfileImage))
            .then((url) => {

                // Or inserted into an <img> element
                const img = this.$refs.profileImg;
                img.setAttribute('src', url);
                imgDetails.setAttribute('src', url);
            })
            .catch((error) => {
                // Handle any errors
            });
        }


        const fileInput = this.$refs.imageFile;
        fileInput.onchange = () => {
            const selectedFile = fileInput.files[0];
            const storage = getStorage();
            const storageRef = ref(storage, getAuth().currentUser.uid + "/profileImage" + selectedFile.name.substring(selectedFile.name.lastIndexOf(".")));
            uploadBytes(storageRef, selectedFile).then((snapshot) => {
                console.log('Uploaded a blob or file!');
                console.log(snapshot.metadata.fullPath);
                console.log(getAuth().currentUser.uid);
                const db = getFirestore();
                const docRef = doc(db, "users", getAuth().currentUser.uid);

                setDoc(docRef, {
                    profileImageUrl: snapshot.metadata.fullPath
                }, { merge: true } )
                .then(() => {
                    console.log("success");
                })

            });

            console.log(selectedFile);
        }
    }
}
</script>
