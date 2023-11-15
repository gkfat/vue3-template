import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAppStore = defineStore('app', () => {
    const drawerState = ref(false);

    const toggleDrawer = () => {
        drawerState.value = !drawerState.value;
    };

    return {
        drawerState,
        toggleDrawer,
    };
});
