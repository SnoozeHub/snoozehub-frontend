<script setup lang="ts">
import detectEthereumProvider from '@metamask/detect-provider';
const provider = await detectEthereumProvider();

if (provider) {
  // From now on, this should always be true:
  // provider === window.ethereum
  console.log("Success!!!");


}</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>