<template>
    <v-layout>
        <AppHeader />
        <AppNavDrawer />
        <v-main>
            <v-container fluid>
                <router-view />
            </v-container>
        </v-main>
    </v-layout>
</template>

<script lang="ts" setup>
import AppNavDrawer from '@/components/AppNavDrawer.vue';
import AppHeader from '@/components/AppHeader.vue';
</script>
