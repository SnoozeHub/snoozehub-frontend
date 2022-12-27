<script setup lang="ts">
import { UserIsAuthenticated } from '~~/composables/injectionKeys';

let loading = ref(false);

const { userIsAuthenticated, updateUserIsAuthenticated } = inject<UserIsAuthenticated>(userIsAuthenticatedKey) as UserIsAuthenticated;
async function acceptTerms() {
    try {
        loading.value = true
        setTimeout(() => (loading.value = false), 3000)
        console.log("Initiating handshake!");
        const authenticationOutcome = await init_handshake()
        updateUserIsAuthenticated(authenticationOutcome);
    } catch (e) {
        console.error(e);
        loading.value = false;
    }
}

</script>

<template>
    <div class="main-container">
        <h1 id="terms">You are now going to be prompted to allow SnoozeHub to read and process your public ETH address,
            if you
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