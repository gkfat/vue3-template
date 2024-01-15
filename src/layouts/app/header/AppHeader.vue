<template>
    <v-app-bar>
        <v-app-bar-nav-icon
            @click="appStore.toggleDrawer()"
        />

        <v-btn>
            <v-app-bar-title
                @click="router.push('/')"
            >
                {{ t('app.title') }}
            </v-app-bar-title>
        </v-btn>

        <v-spacer />

        <AppButtonAvatar />
    </v-app-bar>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

import { useAppStore } from '@/store/app';
import { useAuthStore } from '@/store/auth';

import AppButtonAvatar from './components/AppButtonAvatar.vue';

const appStore = useAppStore();
const authStore = useAuthStore();
const router = useRouter();
const { t } = useI18n();

const user = computed(() => authStore.state.user);
</script>
