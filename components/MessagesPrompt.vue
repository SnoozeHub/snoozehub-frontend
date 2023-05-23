<script setup lang="ts">
import { Errors } from '~~/composables/errors';
import { storeToRefs } from 'pinia';
import { useMessageStore } from '~/composables/storeUtils/userMessageStore';
import { Successes } from '~/composables/successes';
const { errorSet, successSet } = storeToRefs(useMessageStore());

function createi18nStringFromError(error: Errors, isTitle = true) {
    const errorToMessageMap: Record<Errors, string> = {
        [Errors.GrpcError]: 'connection_error',
        [Errors.NoBedsFound]: 'bed_query_error',
        [Errors.EthereumRequestError]: 'eth_error',
        [Errors.Web3CapableBrowserError]: 'web3_browser_error',
        [Errors.RegistrationError]: 'registration_error',
        [Errors.Unknown]: 'unknown_error',
        [Errors.EmailConfirmationError]: 'email_confirmation_error',
        [Errors.AccountDeletingError]: 'account_deleting_error',
    }
    return isTitle ? `${errorToMessageMap[error]}_title` : `${errorToMessageMap[error]}_body`;
}
function createi18nStringFromSuccess(success: Successes) {
    const successToMessageMap: Record<Successes, string> = {
        [Successes.EmailConfirmationSuccess]: 'email_confirmation_success',
        [Successes.AccountDeletingSuccess]: 'account_deleting_success',
        [Successes.RegistrationSuccess]: 'registration_success',
        [Successes.Unknown]: 'unknown_success',
    }
    return `${successToMessageMap[success]}`;
}
</script>

<template>
    <v-alert prominent v-bind:title="$t(createi18nStringFromError(error[0]), { err: error[1] })" type="error"
        variant="tonal" v-for="error in errorSet" :key="error[0]" closable class="alert">
        {{ $t(createi18nStringFromError(error[0], false)) }}
    </v-alert>
    <v-alert prominent type="success" variant="tonal" v-for="success in successSet" :key="success[0]" closable
        class="alert">
        {{ $t(createi18nStringFromSuccess(success)) }}
    </v-alert>
</template>
<style scoped>
.alert {
    margin-top: 0%;
    width: 100%;

}

/*make it the entire length of the page and appear at the top 
*/
.alert-danger {
    width: 100%;
    background-color: #da1f12;
    color: white;
}
</style>