<script setup lang="ts">
import { Buffer } from 'buffer';


// const accountInfo1 = new AccountInfo();
// accountInfo1.setName("sebastiano");
// accountInfo1.setSurname("tocci");
// accountInfo1.setMail("gmail.com");
// accountInfo1.setTelegramusername("This is a test");


const result = ref("Another second test");

async function toggle() {
    // const outcome = authenticate();

}
// AuthOnlyService.signUp(accountInfo1, null);

</script>

<template>

    <div>Hello this is a test! </div>
    <v-btn v-on:click="toggle">Verify signature!</v-btn>

</template>