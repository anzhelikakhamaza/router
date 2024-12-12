import { defineStore } from "pinia";

export const useAuthStore = defineStore( 'AuthStore', {
    state: () => ({
        isAuthenticated: true,
    }),
    actions: {
        login() {

        }
    }
})