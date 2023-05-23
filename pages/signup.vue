<template>
    <v-container>
        <v-card>
            <v-card-title>
                {{ $t('information_request') }}
            </v-card-title>
            <v-card-text>
                <v-form @submit.prevent="submitForm">
                    <v-text-field v-model="name" v-bind:label="$t('name')" required
                        v-bind:hint="$t('required_field')"></v-text-field>
                    <v-text-field v-model="surname" v-bind:label="$t('surname')" required
                        v-bind:hint="$t('required_field')"></v-text-field>
                    <v-text-field v-model="email" v-bind:label="$t('email')" required :rules="emailRules"
                        v-bind:hint="$t('required_field')"></v-text-field>
                    <v-text-field v-model="telegram" v-bind:label="$t('telegram_account')" required
                        v-bind:hint="$t('required_field')"></v-text-field>
                    <v-file-input v-model="photos" v-bind:label="$t('photos')" :max-files="1" accept="image/png"
                        :rules="fileRules"></v-file-input>
                    <v-btn type="submit" color="primary" :disabled="!isFormValid">{{ $t('submit') }}</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-container>
</template>
  
<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { Errors } from '~/composables/errors';
import { useMessageStore } from '~/composables/storeUtils/userMessageStore';
import { Successes } from '~/composables/successes';
const { t } = useI18n();
const fileRules = useCreateFileRules(0, 1);
const emailRules = [
    (v: string) => {
        const rex = new RegExp(
            // eslint-disable-next-line no-useless-escape
            '^(([^<>()\\[\\]\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.' +
            '[0-9]{1,3}\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
        );
        return rex.test(v) || t('email_must_be_valid');
    }]

const isFormValid = computed(() => {
    return !!name.value && !!surname.value && !!email.value && !!telegram.value && emailRules[0](email.value);
});

const { displayError, displaySuccess } = useMessageStore();
const { setUserIsAuthenticated } = useSessionStore()
const name = ref('');
const surname = ref('');
const email = ref('');
const telegram = ref('');
const photos = ref<File[] | undefined>();

async function submitForm() {
    // Submit form logic 
    const grpcStore = useGrpcStore();
    try {
        await grpcStore.authOnlyServiceClient?.signUp({
            name: name.value + ' ' + surname.value,
            mail: email.value,
            telegramUsername: telegram.value,
        });
    } catch (e: any) {
        displayError(e, Errors.RegistrationError);
        return;
    }

    if (photos.value) {
        const profilePic = await useSerializeImages(photos.value);
        try {
            await grpcStore.authOnlyServiceClient?.setProfilePic(profilePic[0]);
        } catch (e) {
            displayError(e, Errors.RegistrationError);
            return;
        }
    }
    displaySuccess(Successes.RegistrationSuccess);
    setUserIsAuthenticated(true);
    navigateTo('/verify-mail');
}
</script>
  