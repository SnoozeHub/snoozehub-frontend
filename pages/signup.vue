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
                    <v-file-input v-model="photos" v-bind:label="$t('photos')"></v-file-input>
                    <v-btn type="submit" color="primary" :disabled="!isFormValid">{{ $t('submit') }}</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-container>
</template>
  
<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

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
    return !!name.value && !!surname.value && !!email.value && !!telegram.value;
});

import { ProfilePic } from '~/composables/grpc_gen/common-messages';

const name = ref('');
const surname = ref('');
const email = ref('');
const telegram = ref('');
const photos = ref<File[] | undefined>();

function submitForm() {
    // Submit form logic 
    console.log('Form submitted!');
    const grpcStore = useGrpcStore();
    const regOutcome = grpcStore.authOnlyServiceClient?.signUp({
        name: name.value + ' ' + surname.value,
        mail: email.value,
        telegramUsername: telegram.value,
    });
    if (photos.value != undefined && photos.value?.length > 1) {
        console.log('More than one photo uploaded!');
    }
    const profilePic = { photo: photos.value?.[0] } as ProfilePic;
    grpcStore.authOnlyServiceClient?.setProfilePic(profilePic)
}
</script>
  