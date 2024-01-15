<template>
    <v-app>
        <router-view />
        <Notifier />
    </v-app>
</template>

<script lang="ts" setup>
import Notifier from '@/components/notifier/Notifier.vue';
</script>
