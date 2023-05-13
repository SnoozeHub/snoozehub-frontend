<script setup lang="ts">
import detectEthereumProvider from '@metamask/detect-provider';
import { useSessionStore, useGrpcStore } from './composables/storeExport';
const provider = await detectEthereumProvider();

const sessionStore = useSessionStore();
sessionStore.setIsWeb3CapableBrowser(provider != null);
sessionStore.restorePreviousSession();
</script>

<template>
  <div>
    <v-app>
      <NuxtLayout class="fill-height">
        <v-main>
          <NuxtPage />
        </v-main>
      </NuxtLayout>
    </v-app>
  </div>
</template>