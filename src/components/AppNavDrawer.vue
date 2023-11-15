<template>
    <v-navigation-drawer v-model="appStore.drawerState">
        <v-list>
            <v-list-item>yo</v-list-item>
            <v-list-item>yo</v-list-item>
            <v-list-item>yo</v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store/app';

const appStore = useAppStore();
</script>
