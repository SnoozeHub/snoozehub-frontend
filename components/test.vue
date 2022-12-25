<script setup lang="ts">

// const accountInfo1 = new AccountInfo();
// accountInfo1.setName("sebastiano");
// accountInfo1.setSurname("tocci");
// accountInfo1.setMail("gmail.com");
// accountInfo1.setTelegramusername("This is a test");

import { authenticate } from '~~/composables/client';

const result = ref("Another second test");

function toggle() {
    const outcome = authenticate();
    result.value = outcome;
}
// AuthOnlyService.signUp(accountInfo1, null);

</script>

<template>

    <div>Hello this is a test! </div>
    <v-btn v-on:click="toggle">{{ result }}</v-btn>

</template>