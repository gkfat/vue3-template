<template>
    <v-layout>
        <AppHeader />
        <AppNavDrawer />
        <v-main>
            <router-view />
        </v-main>
    </v-layout>
</template>

<script lang="ts" setup>
import AppHeader from '@/layouts/app/header/AppHeader.vue';
import AppNavDrawer from '@/layouts/app/nav-drawer/AppNavDrawer.vue';
</script>
