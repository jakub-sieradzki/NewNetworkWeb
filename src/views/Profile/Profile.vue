<template>
    <div class="flex flex-col flex-grow overflow-y-scroll md:overflow-y-hidden">
        <div class=" md:bg-gray-300 md:shadow-2xl md:overflow-hidden h-full md:my-10 md:mx-5 lg:mx-20 xl:mx-30 3xl:mx-40 flex flex-col md:dark:bg-gray-700 md:bg-opacity-20 md:rounded-lg md:flex-row gap-0">
            <div class="flex-grow-2 md:dark:bg-gray-900 md:bg-gray-200 md:bg-opacity-30 md:dark:bg-opacity-70">
                <img class='h-40 w-full object-cover shadow-md' src="/img/wallpaper.jpg" alt="ProfileBackground">
                <input type="file" id="imageFile" ref="imageFile" accept="image/*" style="display: none;">
                <img onclick="document.getElementById('imageFile').click();" ref="profileImg" class=" cursor-pointer m-auto -mt-20 h-40 w-40 rounded-full shadow-xl" src="images/profile.png" alt="ProfilePhoto">
                <div class="flex flex-col">
                    <p class="text-center text-2xl font-bold">{{ name }} {{ surname }}</p>
                    <p class="text-center text-sm mt-4 px-5 text-gray-500 dark:text-gray-400">Kto chce, szuka sposobu, kto nie chce, szuka powodu</p>
                    <button class="btn btn-outline mx-auto mt-5" ref="addFriendButton" @click="addFriend">Znajomi</button> 
                </div>
            </div>
            <div class="md:overflow-y-hidden flex-grow-9">
                <div class="overflow-hidden h-full md:mt-10 2xl:px-32 md:px-5">
                    <div class="tabs border-white flex-grow flex-nowrap w-full pb-5 overflow-x-auto">
                        <router-link to="posts" class="tab tab-bordered flex-grow tab-active">Posty</router-link>
                        <router-link to="gallery" class="tab tab-bordered flex-grow">Galeria</router-link>
                        <router-link to="friends" class="tab tab-bordered flex-grow">Znajomi</router-link>
                        <router-link to="info" class="tab tab-bordered flex-grow">Informacje</router-link>
                    </div>
                    <div class="relative md:overflow-y-scroll custom-scrollbar h-5/6 px-5">
                        <router-view name="profileContent" class="h-full"></router-view>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>
<script>
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth } from 'firebase/auth';
import { useStore } from 'vuex';
import { getFirestore, collection, setDoc, doc, getDocs, updateDoc, addDoc, document, query, where, arrayUnion, arrayRemove } from 'firebase/firestore';
import { useRouter } from 'vue-router';
export default {
    data() {
        return {
            name: null,
            surname: null,
            description: null,
            profileImageUrl: null,
            username: null,
            uid: null,
        }
    },
    beforeRouteEnter(to, from, next) {
        console.log("working");
            const db = getFirestore();
            const q = query(collection(db, "users"), where("username", "==", to.params.username));
            getDocs(q)
                .then((docs) => {
                    docs.forEach(doc => {
                        next(vm => {
                            console.log("next started");
                            vm.name = doc.data().name;
                            vm.surname = doc.data().surname;
                            vm.description = doc.data().description;
                            vm.profileImageUrl = doc.data().profileImageUrl;
                            vm.username = to.params.username;
                            vm.uid = doc.id;
                            console.log(doc.data());
                            console.log("Uid: " + doc.id)
                            console.log(vm.profileImageUrl);
                            console.log("next ended");
                            vm.loadProfilePhoto();
                            vm.checkFriend();
                            console.log("getPeopleFriends: ", vm.$store.getters.getPeopleFriends);
                        })

                    })
                });
    },
    beforeRouteUpdate(to, from, next) {
            const db = getFirestore();
            const q = query(collection(db, "users"), where("username", "==", to.params.username));
            getDocs(q)
                .then((docs) => {
                    docs.forEach(doc => {
                        next(vm => {
                            console.log("next started");
                            vm.name = doc.data().name;
                            vm.surname = doc.data().surname;
                            vm.description = doc.data().description;
                            vm.profileImageUrl = doc.data().profileImageUrl;
                            vm.username = to.params.username;
                            vm.uid = doc.id;
                            console.log(doc.data());
                            console.log("Uid: " + doc.id)
                            console.log(vm.profileImageUrl);
                            console.log("next ended");
                            vm.loadProfilePhoto();
                            vm.checkFriend();
                            console.log("getPeopleFriends: ", vm.$store.getters.getPeopleFriends);
                        })

                    })
                });
    },
    methods: {
        loadProfilePhoto() {
            console.log("mounted started");
            const storage = getStorage();
            const img = this.$refs.profileImg;
            if(this.profileImageUrl) {
                getDownloadURL(ref(storage, this.profileImageUrl))
                .then((url) => {

                    // Or inserted into an <img> element
                    img.setAttribute('src', url);
                })
                .catch((error) => {
                    // Handle any errors
                });
            } else {
                img.setAttribute('src', '/img/avatar.png');
            }
        },
        checkFriend() {
            if(this.$store.getters.getPeopleFriends.includes(this.uid)) {
                this.$refs.addFriendButton.innerHTML = "Usuń ze znajomych";
            } else {
                this.$refs.addFriendButton.innerHTML = "Dodaj do znajomych";
            }
        },
        addFriend() {
            const store = useStore();
            const db = getFirestore();
            console.log("Add friend");
            if(this.$store.getters.getPeopleFriends.includes(this.uid)) {
                const peopleRef = doc(db, "users", this.$store.getters.getUid, "details", "people");
                updateDoc(peopleRef, {
                    friends: arrayRemove(this.uid),
                    observed: arrayRemove(this.uid)
                }).then(() => {
                    this.$store.getters.getPeopleFriends.splice(this.$store.getters.getPeopleFriends.indexOf(this.uid), 1);
                    this.$store.getters.getPeopleObserved.splice(this.$store.getters.getPeopleObserved.indexOf(this.uid), 1);
                    this.$refs.addFriendButton.innerHTML = "Dodaj do znajomych";
                    console.log("getPeopleFriends: ", this.$store.getters.getPeopleFriends);
                });
            } else {
                const peopleRef = doc(db, "users", this.$store.getters.getUid, "details", "people");
                updateDoc(peopleRef, {
                    friends: arrayUnion(this.uid),
                    observed: arrayUnion(this.uid)
                }).then(() => {
                    this.$store.getters.getPeopleFriends.push(this.uid);
                    this.$store.getters.getPeopleObserved.push(this.uid);
                    this.$refs.addFriendButton.innerHTML = "Usuń ze znajomych";
                    console.log("getPeopleFriends: ", this.$store.getters.getPeopleFriends);
                });
            }
        }
    },
    mounted() {
        console.log("working")
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
