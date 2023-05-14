<script setup lang="ts">
import { Errors } from '~~/composables/errors';
const props = defineProps<{ errors: Set<Errors> }>();
</script>

<template>
    <v-alert prominent v-bind:title="$t('connection_error_title')" type="error" variant="tonal"
        v-if="props.errors.has(Errors.GrpcError)" closable class="alert">
        {{ $t('connection_error_body') }}
    </v-alert>
    <v-alert prominent v-bind:title="$t('eth_error_title')" type="error" variant="tonal"
        v-if="props.errors.has(Errors.EthereumRequestError)" closable class="alert">
        {{ $t('eth_error_body') }}
    </v-alert>
    <v-alert prominent v-bind:title="$t('web3_browser_error_title')" v-if="props.errors.has(Errors.Web3CapableBrowserError)"
        closable class="alert-danger">
        <template #icon>
            {{ $t('web3_browser_error_body') }}
        </template>

    </v-alert>
</template>
<style scoped>
.alert {
    margin-top: 1%;
    width: 70%;

}

/*make it the entire length of the page and appear at the top 
*/
.alert-danger {
    width: 100%;
    background-color: #da1f12;
    color: white;
}
</style>