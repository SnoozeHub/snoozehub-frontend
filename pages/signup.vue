<template>
    <v-container>
        <v-card>
            <v-card-title>
                Enter Your Information Below
            </v-card-title>
            <v-card-text>
                <v-form @submit.prevent="submitForm">
                    <v-text-field v-model="name" label="Name" required hint="This field is required"></v-text-field>
                    <v-text-field v-model="surname" label="Surname" required hint="This field is required"></v-text-field>
                    <v-text-field v-model="email" label="Email" required :rules="emailRules"
                        hint="This field is required"></v-text-field>
                    <v-text-field v-model="telegram" label="Telegram Account" required
                        hint="This field is required"></v-text-field>
                    <v-file-input v-model="photos" label="Upload Photos"></v-file-input>
                    <v-btn type="submit" color="primary" :disabled="!isFormValid">Submit</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-container>
</template>
  
<script setup lang="ts">

const emailRules = [
    (v: string) => {
        const rex = new RegExp(
            // eslint-disable-next-line no-useless-escape
            '^(([^<>()\\[\\]\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.' +
            '[0-9]{1,3}\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$'
        );
        return rex.test(v) || 'E-mail must be valid';
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
  