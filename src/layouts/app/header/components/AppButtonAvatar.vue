<template>
    <v-menu
        v-model="menu"
        rounded
    >
        <template #activator="{ props }">
            <v-btn
                icon
                v-bind="props"
            >
                <v-avatar
                    color="primary"
                    :size="36"
                >
                    <span class="white--text font-weight-bold">
                        {{ avatarAlternative }}
                    </span>
                </v-avatar>
            </v-btn>
        </template>

        <v-list>
            <!-- User Avatar -->
            <v-list-item class="text-center">
                <v-avatar
                    color="primary"
                    :size="36"
                >
                    <span class="white--text font-weight-bold">
                        {{ avatarAlternative }}
                    </span>
                </v-avatar>

                <p class="text-h6">
                    {{ user?.name }}
                </p>
            </v-list-item>

            <v-divider class="my-1" />

            <v-list-item @click="logout()">
                <template #prepend>
                    <v-icon>mdi-logout-variant</v-icon>
                </template>
                <v-list-item-title>
                    {{ t('app.button_logout') }}
                </v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script lang="ts" setup>
import {
    computed,
    ref,
} from 'vue';

import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

import { useAuthStore } from '@/store/auth';

const authStore = useAuthStore();
const router = useRouter();
const { t } = useI18n();
const menu = ref(false);

const user = computed(() => authStore.state.user);

const avatarAlternative = computed(() => '');

const logout = async () => {
    await authStore.logout();
    router.push('/login');
};
</script>
