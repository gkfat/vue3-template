<template>
    <v-container class="fill-height d-flex align-center">
        <v-row justify="center">
            <v-card
                min-width="360px"
                rounded
            >
                <v-card-title class="my-3">
                    {{ t('login.title') }}
                </v-card-title>

                <v-card-text>
                    <v-form validate-on="input">
                        <!-- Email -->
                        <v-row>
                            <v-col>
                                <v-text-field
                                    v-model="form.email.value.value"
                                    prepend-icon="mdi-account"
                                    type="email"
                                    :error-messages="form.email.errorMessage.value"
                                    :label="t('login.input_label_email')"
                                    autocomplete="username"
                                    hide-details="auto"
                                    variant="outlined"
                                    autofocus
                                    required
                                />
                            </v-col>
                        </v-row>

                        <!-- Password -->
                        <v-row>
                            <v-col>
                                <v-text-field
                                    v-model="form.password.value.value"
                                    prepend-icon="mdi-lock"
                                    type="password"
                                    :error-messages="form.password.errorMessage.value"
                                    :label="t('login.input_label_password')"
                                    autocomplete="current-password"
                                    hide-details="auto"
                                    variant="outlined"
                                    required
                                    @keyup.enter="submit()"
                                />
                            </v-col>
                        </v-row>
                    </v-form>
                </v-card-text>

                <v-divider />

                <v-card-actions>
                    <v-btn
                        rounded="xs"
                        block
                        :loading="loading"
                        type="submit"
                        @click="submit()"
                    >
                        {{ t('login.button_login') }}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import {
    useField,
    useForm,
} from 'vee-validate';
import { useI18n } from 'vue-i18n';
import * as yup from 'yup';

import { AuthService } from '@/api/auth';
import { useNotifierStore } from '@/store/notifier';
import { AuthLogin } from '@/types/auth';

const { t } = useI18n();
const notifierStore = useNotifierStore();

const loading = ref(false);

const { handleSubmit } = useForm({
    validationSchema: yup.object({
        email: yup.string()
            .email(t('input.error_email_format'))
            .required(t('input.error_required')),
        password: yup
            .string()
            .required(t('input.error_required')),
    }),
});

const form = {
    email: useField('email'),
    password: useField('password'),
};

const login = async (data: AuthLogin) => {
    try {
        // const res = await AuthService.login(data);

        // set token
        // set storage user
        // change route
    } catch (err) {
        notifierStore.error({
            content: t('login.message_login_fail_title'),
        });
    }
};

const submit = handleSubmit(async (data) => {
    const { email, password } = data;
    loading.value = true;
    await login({
        email,
        password,
    });
    loading.value = false;
});
</script>
