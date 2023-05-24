<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" sm="8" md="6">
                <v-card>
                    <v-card-title class="text-center">
                        {{ $t('verification_code') }}
                    </v-card-title>
                    <v-card-text>
                        <v-text-field v-model="verificationCode" label="Enter Verification Code" outlined dense
                            required></v-text-field>
                    </v-card-text>
                    <v-card-actions class="justify-center">
                        <v-btn color="primary" @click="confirmCode">{{ $t('submit') }}</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script setup lang="ts">
import { useMessageStore } from '~/composables/storeUtils/userMessageStore';

const verificationCode = ref('');
const grpcStore = useGrpcStore();
const { displayError, displaySuccess } = useMessageStore();


async function confirmCode() {
    // Perform code confirmation logic here
    try {
        const outcome = await (await grpcStore.getAuthOnlyServiceClient()).verifyMail({
            verificationCode: verificationCode.value
        })
        if (!outcome?.response.ok) {
            throw outcome?.status;
        }
    } catch (e) {
        console.log(e);
        displayError(e, Errors.EmailConfirmationError);
        return;
    };
    displaySuccess(Successes.EmailConfirmationSuccess);
    navigateTo('/my-profile');

}


</script>
  
<style scoped>
.container {
    margin-top: 60px;
}
</style>
  