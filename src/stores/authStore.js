import { defineStore } from "pinia";

export const useAuthStore = defineStore( 'AuthStore', {
    state: () => ({
        user: null,
        isAuthenticated: true,
    }),
    actions: {
        login() {

        }
    }
})