<script setup lang="ts">
import detectEthereumProvider from '@metamask/detect-provider';
const provider = await detectEthereumProvider();

console.log(isWeb3CapableBrowserKey, userIsAuthenticatedKey);

provide(isWeb3CapableBrowserKey, new Boolean(provider));
const userIsAuthenticated = ref(false);

function updateUserIsAuthenticated(value: boolean) {
  userIsAuthenticated.value = value;
}
provide(userIsAuthenticatedKey, {
  userIsAuthenticated,
  updateUserIsAuthenticated,
});

</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>