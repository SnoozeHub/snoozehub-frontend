<script setup lang="ts">
import { RpcError } from '@protobuf-ts/runtime-rpc';
import { Errors } from '~~/composables/errors';
import { useGrpcStore, useSessionStore } from '~~/composables/storeExport';

let loading = ref(false);

let errors = ref(new Set<Errors>());

const sessionStore = useSessionStore();
const grpcStore = useGrpcStore();
async function acceptTerms() {
    try {
        loading.value = true
        const authenticationOutcome = await useInitHandshake();
        loading.value = false;
        sessionStore.setUserIsAuthenticated(authenticationOutcome);
        if (authenticationOutcome) {
            grpcStore.initAuthOnlyServiceClient()
            navigateTo("/");
        }
        else
            navigateTo("/signup");

    } catch (err) {
        if (err instanceof RpcError)
            errors.value.add(Errors.GrpcError);
        else
            errors.value.add(Errors.EthereumRequestError);
        loading.value = false;
    }
}

</script>

<template>
    <div class="main-container">
        <ErrorsPrompt :errors="errors"></ErrorsPrompt>

        <h1 id="terms">You are now going to be prompted to allow SnoozeHub to read and process your public ETH address.
            <br>
            If you
            don't want to share
            this information with us DON'T click on the button below
        </h1>
        <v-btn :loading="loading" :disabled="loading" color="secondary" @click="acceptTerms">I understand and I want
            to
            proceed </v-btn>
    </div>

</template>

<style scoped>
#terms {
    width: 70%;
    margin-top: 1%;
    margin-bottom: 3%;
    text-align: center;

}

.main-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
}

.custom-loader {
    animation: loader 1s infinite;
    display: flex;
}

@-moz-keyframes loader {
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(360deg);
    }
}

@-webkit-keyframes loader {
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(360deg);
    }
}

@-o-keyframes loader {
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(360deg);
    }
}

@keyframes loader {
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>