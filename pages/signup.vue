<template>
    <v-container>
        <ErrorsPrompt :errors="errorSet" :error-message="errorMessage"></ErrorsPrompt>

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
                    <v-file-input v-model="photos" v-bind:label="$t('photos')" :max-files="1"
                        :rules="fileRules"></v-file-input>
                    <v-btn type="submit" color="primary" :disabled="!isFormValid">{{ $t('submit') }}</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-container>
</template>
  
<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { ProfilePic } from '~/composables/grpc_gen/common-messages';
import { Errors } from '~/composables/errors';
import { storeToRefs } from 'pinia';
import { useErrorsStore } from '~/composables/storeUtils/errorStore';
const { t } = useI18n();
const fileRules = [
    (files: Array<File>) => {
        return files.length !== 1 || (files[0].size <= 512000 && ['image/jpeg', 'image/png', 'image/jpg'].includes(files[0].type)) || t('file_type_size_error');
    }
]
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

const { errorSet, errorMessage } = storeToRefs(useErrorsStore());

const name = ref('');
const surname = ref('');
const email = ref('');
const telegram = ref('');
const photos = ref<File[] | undefined>();

async function submitForm() {
    // Submit form logic 
    console.log('Form submitted!');
    const grpcStore = useGrpcStore();
    try {
        await grpcStore.authOnlyServiceClient?.signUp({
            name: name.value + ' ' + surname.value,
            mail: email.value,
            telegramUsername: telegram.value,
        });
    } catch (e: any) {
        errorMessage.value = e.message;
        console.log(e);
        errorSet.value.add(Errors.RegistrationError);
        return;
    }

    if (!photos.value) {
        return;
    }
    const reader = new FileReader();
    reader.readAsArrayBuffer(photos.value?.[0] as File)
    await new Promise(resolve => reader.addEventListener('load', resolve));
    const profilePic = { photo: new Uint8Array(reader.result as ArrayBuffer) } as ProfilePic;
    const picUpload = await grpcStore.authOnlyServiceClient?.setProfilePic(profilePic);
    if (picUpload?.status.code as string != 'OK') {
        errorSet.value.add(Errors.RegistrationError);
        return;
    }
    navigateTo('/');
}
</script>
  