<script setup lang="ts">


const client = new AuthOnlyServiceClient("http://localhost:3000", null, null);

client.getMyBookings(null, null);

</script>

<template>

    <div>Hello this is a test!</div>

</template>