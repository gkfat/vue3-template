<template>
    <v-card
        class="rounded-lg elevation-8"
        max-width="600px"
        :min-width="mobile ? '80%' : '350px'"
        :color="color"
    >
        <v-card-actions class="pl-4 pr-1">
            <span
                class="grey--text text-lighten-3 text-body-1"
                v-text="content"
            />
            <v-spacer />
            <v-btn
                color="grey lighten-3"
                class="ml-2"
                icon
                @click="dismissNotify(pKey)"
            >
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';

import { useDisplay } from 'vuetify';

import { useNotifierStore } from '@/store/notifier';

const { mobile } = useDisplay();

const notifierStore = useNotifierStore();

const props = defineProps({
    pKey: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        default: 'primary',
    },
    content: {
        type: String,
        default: '',
    },
    timeout: {
        type: Number,
        default: -1,
    },
});

const dismissNotify = (id: string) => notifierStore.remove(id);

onMounted(() => {
    if (props.timeout > 0) {
        setTimeout(() => dismissNotify(props.pKey), props.timeout);
    }
});
</script>
