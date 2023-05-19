<script setup lang="ts">
import { Errors } from '~~/composables/errors';
const props = defineProps<{ errors: Set<Errors>, errorMessage: string }>();
</script>

<template>
    <v-alert prominent v-bind:title="$t('connection_error_title')" type="error" variant="tonal"
        v-if="props.errors.has(Errors.GrpcError)" closable class="alert">
        {{ $t('connection_error_body') }}
    </v-alert>
    <v-alert prominent v-bind:title="$t('bed_query_error', { err: props.errorMessage })" type="error" variant="tonal"
        v-if="props.errors.has(Errors.NoBedsFound)" closable class="alert">
        {{ $t('bed_query_error_body') }}
    </v-alert>
    <v-alert prominent v-bind:title="$t('eth_error_title', { err: props.errorMessage })" type="error" variant="tonal"
        v-if="props.errors.has(Errors.EthereumRequestError)" closable class="alert">
        {{ $t('eth_error_body') }}
    </v-alert>
    <v-alert prominent v-bind:title="$t('web3_browser_error_title', { err: props.errorMessage })"
        v-if="props.errors.has(Errors.Web3CapableBrowserError)" closable class="alert-danger">
        {{ $t('web3_browser_error_body') }}
    </v-alert>
    <v-alert prominent v-bind:title="$t('registration_error_title', { err: props.errorMessage })"
        v-if="props.errors.has(Errors.RegistrationError)" closable class="alert-danger">
        {{ $t('registration_error_body') }}
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