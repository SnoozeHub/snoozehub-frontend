<script setup lang="ts">
import { Errors } from '~~/composables/errors';
const props = defineProps<{ errors: Set<Errors> }>();
</script>

<template>
    <v-alert prominent title="Error connecting to our servers" type="error" variant="tonal"
        v-if="props.errors.has(Errors.GrpcError)" closable class="alert">
        We are currently experiencing some issues connecting to our servers. Please try again in a second.
    </v-alert>
    <v-alert prominent title="ETH blockchain error" type="error" variant="tonal"
        v-if="props.errors.has(Errors.EthereumRequestError)" closable class="alert">
        We are currently experiencing some issues processing ETH requests on the blockchain. Please try again in a
        second.
    </v-alert>
</template>
<style scoped>
.alert {
    margin-top: 1%;
    width: 70%;

}
</style>