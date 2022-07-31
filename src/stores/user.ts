import {
  TwitterAuthProvider,
  type AuthProvider,
  type User,
} from "@firebase/auth";
import { signInWithPopup } from "@firebase/auth";
import { defineStore } from "pinia";
import auth from "@packages/auth";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    email: "",
    password: "",
    currentUser: null as User | null,
  }),
  actions: {
    register() {
      return createUserWithEmailAndPassword(
        auth.getFirebaseAuth(),
        this.email,
        this.password
      )
        .then((data) => {
          console.log("Successfully registered!", data);
        })
        .catch((error) => {
          console.log(error.code);
        });
    },
    logout() {
      return signOut(auth.getFirebaseAuth()).then(() => {
        this.currentUser = null;
      });
    },
    login() {
      return signInWithEmailAndPassword(
        auth.getFirebaseAuth(),
        this.email,
        this.password
      )
        .then((data) => {
          console.log("Successfully logged in!", data);
        })
        .catch((error) => {
          console.log(error.code);
        });
    },
    googleLogin() {
      const provider = new GoogleAuthProvider();
      return this.popupLogin(provider);
    },
    twitterLogin() {
      const provider = new TwitterAuthProvider();
      return this.popupLogin(provider);
    },
    popupLogin(provider: AuthProvider) {
      return signInWithPopup(auth.getFirebaseAuth(), provider)
        .then((data) => {
          console.log("Successfully logged in!", data);
        })
        .catch((error) => {
          console.log(error.code);
        });
    },
    getCurrentUser() {
      return new Promise((resolve, reject) => {
        const unsubscribe = auth
          .getFirebaseAuth()
          .onAuthStateChanged((user) => {
            unsubscribe();
            this.currentUser = user;
            resolve(user);
          }, reject);
      });
    },
  },
  getters: {
    isLoggedIn(state) {
      return state.currentUser !== null;
    },
  },
});
