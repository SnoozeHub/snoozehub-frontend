<script setup lang="ts">
import { RpcError } from '@protobuf-ts/runtime-rpc';
import { Errors } from '~~/composables/errors';
import { useGrpcStore, useSessionStore } from '~~/composables/storeExport';

const loading = ref(false);

const errors = ref(new Set<Errors>());

const sessionStore = useSessionStore();
const grpcStore = useGrpcStore();
async function acceptTerms() {
    try {
        loading.value = true
        const authenticationOutcome = await useInitHandshake();
        loading.value = false;
        sessionStore.setUserIsAuthenticated(authenticationOutcome);
        if (authenticationOutcome.accountExist) {
            grpcStore.initAuthOnlyServiceClient()
            navigateTo("/");
        }
        else
            navigateTo("/signup");

    } catch (err) {
        console.log(err);
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

        <h1 id="terms">{{ $t('tos') }}
        </h1>
        <v-btn :loading="loading" :disabled="loading" color="secondary" @click="acceptTerms">
            {{ $t('accept_agreement') }}</v-btn>
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