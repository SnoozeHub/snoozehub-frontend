<script setup lang="ts">
import detectEthereumProvider from '@metamask/detect-provider';
import { useSessionStore } from './composables/storeExport';
import { useInitGoogleApis } from './composables/mapsApi';
const provider = await detectEthereumProvider();

const sessionStore = useSessionStore();
sessionStore.setIsWeb3CapableBrowser(provider != null);
sessionStore.restorePreviousSession();

onMounted(() => {
  useInitGoogleApis();
});

window.addEventListener('beforeunload',
  sessionStore.saveSession)
onBeforeUnmount(() => {
  window.removeEventListener('beforeunload',
    sessionStore.saveSession)
});
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