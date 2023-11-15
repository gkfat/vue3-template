<template>
    <v-app-bar>
        <v-app-bar-nav-icon @click="appStore.toggleDrawer()" />
        <v-toolbar-title>{{ t('app.title') }}</v-toolbar-title>
        <v-spacer />
    </v-app-bar>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { useAppStore } from '@/store/app';

const appStore = useAppStore();
const { t } = useI18n();
</script>
