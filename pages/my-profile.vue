<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" sm="8" md="6">
                <v-card>
                    <v-card-title class="text-center">
                        {{ $t('my_profile') }}
                    </v-card-title>
                    <v-card-text>
                        <v-list>
                            <v-list-item>
                                <v-list-item-title>{{ $t('name') }}:</v-list-item-title>
                                <v-list-item-subtitle>{{ user?.name.split(' ')[0] }}</v-list-item-subtitle>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>{{ $t('surname') }}:</v-list-item-title>
                                <v-list-item-subtitle>{{ user?.name.split(' ')[1] }}</v-list-item-subtitle>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>{{ $t('email') }}:</v-list-item-title>
                                <v-list-item-subtitle>{{ user?.mail }}</v-list-item-subtitle>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>{{ $t('telegram_account') }}:</v-list-item-title>
                                <v-list-item-subtitle>{{ user?.telegramUsername }}</v-list-item-subtitle>
                            </v-list-item>
                        </v-list>
                    </v-card-text>
                    <v-card-actions class="justify-center">
                        <v-btn color="red" @click="showOverlay = !showOverlay">{{ $t('delete_account') }}</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <v-dialog v-model="showOverlay" persistent max-width="fit-content">
            <v-card>
                <v-card-title class="text-center" style="color:rgb(244, 67, 54)">{{ $t('delete_account_confirmation')
                }}</v-card-title>
                <v-card-text>
                    <p>{{ $t('insert_mail_to_delete', { msg: user?.mail }) }}</p>
                    <v-text-field v-model="confirmation.email" :label="$t('email')" outlined dense required
                        :rules="rules"></v-text-field>
                </v-card-text>
                <v-card-actions class="justify-center">
                    <v-btn @click="deleteAccount" elevated color="red"
                        :disabled="user?.mail != confirmation.email.trim()">{{ $t('confirm_deletion') }} </v-btn>
                    <v-btn @click="showOverlay = false">{{ $t('cancel')
                    }}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>
  
<script setup lang="ts">

import { storeToRefs } from 'pinia';
import { useI18n } from 'vue-i18n';
import { Empty } from '~/composables/grpc_gen/common-messages';
import { useMessageStore } from '~/composables/storeUtils/userMessageStore';
const sessionStore = useSessionStore();
const grpcStore = useGrpcStore();
const { user } = storeToRefs(sessionStore);
const { fetchUserData } = useSessionStore();
const { t } = useI18n();

const rules = [
    (value: string) => value.trim() == user.value?.mail || t('email_mismatch'),
];

fetchUserData().then(() => {
    if (!user.value) // Redirects to login page if user is not logged in
        navigateTo('/eth-authentication');
});

const messageStore = useMessageStore();
const showOverlay = ref(false);
const confirmation = reactive({
    email: '',
    reason: '',
});
const deleteAccount = async () => {
    // Perform account deletion logic here
    try {

        (await grpcStore.getAuthOnlyServiceClient()).deleteAccount(Empty);
    } catch (error) {
        console.log('Error deleting account:', error);
        messageStore.displayError(error, Errors.AccountDeletingError);
    }
    messageStore.displaySuccess(Successes.AccountDeletingSuccess);
    sessionStore.logout();

    navigateTo('/');
};
</script>
  
<style scoped>
.container {
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.overlay-card {
    margin: auto;
}
</style>
  