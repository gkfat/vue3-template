<template>
    <v-app>
        <AppNotifier />
        <router-view />
    </v-app>
</template>

<script lang="ts" setup>
import AppNotifier from '@/components/AppNotifier/AppNotifier.vue';
</script>
