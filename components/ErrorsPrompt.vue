<script setup lang="ts">
import { Errors } from '~~/composables/errors';
const props = defineProps<{ errors: Set<[Errors, string]> }>();

function createStringFromError(error: Errors, isTitle = true) {
    const errorToMessageMap: Record<Errors, string> = {
        [Errors.GrpcError]: 'connection_error',
        [Errors.NoBedsFound]: 'bed_query_error',
        [Errors.EthereumRequestError]: 'eth_error',
        [Errors.Web3CapableBrowserError]: 'web3_browser_error',
        [Errors.RegistrationError]: 'registration_error',
        [Errors.Unknown]: 'unknown_error',
    }
    return isTitle ? `${errorToMessageMap[error]}_title` : `${errorToMessageMap[error]}_body`;
}
</script>

<template>
    <v-alert prominent v-bind:title="$t(createStringFromError(error[0]), { err: error[1] })" type="error" variant="tonal"
        v-for="error in props.errors" :key="error[0]" closable class="alert">
        {{ $t(createStringFromError(error[0], false)) }}
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