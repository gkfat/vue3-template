import { ref } from 'vue';

import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', () => {
    const state = ref({
        drawer: false,
    });

    const toggleDrawer = () => {
        state.value.drawer = !state.value.drawer;
    };

    return {
        state,
        toggleDrawer,
    };
});
