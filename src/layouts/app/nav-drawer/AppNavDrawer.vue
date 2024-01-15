<template>
    <v-navigation-drawer v-model="appStore.state.drawer">
        <AppDrawerItem />
    </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store/app';

import AppDrawerItem from './components/AppDrawerItem.vue';

const appStore = useAppStore();
</script>
