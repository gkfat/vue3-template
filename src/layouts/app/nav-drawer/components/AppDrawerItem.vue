<template>
    <v-list>
        <template
            v-for="item in menuItems"
            :key="item.path"
        >
            <!-- 單層 -->
            <v-list-item
                v-if="!item.items"
                :to="item.path"
            >
                <v-list-item-title class="font-weight-medium">
                    {{ t(item.title) }}
                </v-list-item-title>
            </v-list-item>

            <!-- 多層 -->
            <v-list-group
                v-else
                :group="`${item.path}`"
                no-action
            >
                <template #activator="{ props }">
                    <v-list-item v-bind="props">
                        <v-list-item-title class="font-weight-medium">
                            {{ t(item.title) }}
                        </v-list-item-title>
                    </v-list-item>
                </template>

                <v-list-item
                    v-for="child in item.items"
                    :key="child.path"
                    :to="child.path"
                >
                    <v-list-item-title class="font-weight-medium">
                        {{ t(child.title) }}
                    </v-list-item-title>
                </v-list-item>
            </v-list-group>
        </template>
    </v-list>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

import { useI18n } from 'vue-i18n';
import {
    RouteRecordRaw,
    useRouter,
} from 'vue-router';

const { t } = useI18n();
const router = useRouter();

interface MenuItem {
    title: string;
    path: string;
    items?: MenuItem[];
}

const toMenuItem = (routeConfig: RouteRecordRaw): MenuItem | null => {
    const { meta, children, path } = routeConfig;

    if (!meta || meta.hidden || !path.length) {
        return null;
    }

    // 僅一層
    if (!children || children.length === 0) {
        return {
            title: meta.title,
            path,
        };
    }

    const items: MenuItem[] = [];
    children.forEach((v) => {
        const res = toMenuItem(v);
        if (res) {
            items.push(res);
        }
    });

    // 多層
    return {
        title: meta.title,
        path,
        items,
    };
};

const menuItems = computed(() => {
    const { routes } = router.options;
    const res: MenuItem[] = [];

    routes.forEach((v) => {
        const item = toMenuItem(v);
        if (item) {
            res.push(item);
        }
    });

    return res;
});
</script>