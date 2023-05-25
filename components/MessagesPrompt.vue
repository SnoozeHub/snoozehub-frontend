<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useMessageStore } from '~/composables/storeUtils/userMessageStore';
const { errorSet, successSet } = storeToRefs(useMessageStore());
</script>

<template>
    <v-alert prominent v-bind:title="$t(errorToi18nString(error[0]), { err: error[1] })" type="error" variant="tonal"
        v-for="error in errorSet" :key="error[0]" closable class="alert" @click:close="errorSet.delete(error)">
        {{ $t(errorToi18nString(error[0], false)) }}
    </v-alert>
    <v-alert prominent type="success" variant="tonal" v-for="success in successSet" :key="success[0]" closable
        @click:close="successSet.delete(success)" class="alert">
        {{ $t(successToi18nString(success)) }}
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