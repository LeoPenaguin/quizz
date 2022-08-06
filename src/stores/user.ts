import { TwitterAuthProvider, type AuthProvider, type User } from '@firebase/auth'
import { signInWithPopup } from '@firebase/auth'
import { defineStore } from 'pinia'
import firebase from '@packages/firebase'

import { signOut, GoogleAuthProvider } from 'firebase/auth'

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        email: '',
        password: '',
        currentUser: null as User | null,
    }),
    actions: {
        logout() {
            return signOut(firebase.getAuth()).then(() => {
                this.currentUser = null
            })
        },
        googleLogin() {
            const provider = new GoogleAuthProvider()
            return this.popupLogin(provider)
        },
        twitterLogin() {
            const provider = new TwitterAuthProvider()
            return this.popupLogin(provider)
        },
        popupLogin(provider: AuthProvider) {
            return signInWithPopup(firebase.getAuth(), provider)
                .then((data) => {
                    console.log('Successfully logged in!', data)
                })
                .catch((error) => {
                    console.log(error.code)
                })
        },
        getCurrentUser() {
            return new Promise((resolve, reject) => {
                const unsubscribe = firebase.getAuth().onAuthStateChanged((user: User | null) => {
                    unsubscribe()
                    this.currentUser = user
                    resolve(user as User)
                }, reject)
            })
        },
    },
    getters: {
        isLoggedIn(state) {
            return state.currentUser !== null
        },
    },
})
