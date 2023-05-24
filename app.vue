<script setup lang="ts">
import detectEthereumProvider from '@metamask/detect-provider';
import { useSessionStore } from './composables/storeExport';
import { useInitGoogleApis } from './composables/mapsApi';
import { useTheme } from 'vuetify/lib/framework.mjs';
const vuetifyTheme = useTheme();
const { locale } = useI18n();
import { useI18n } from 'vue-i18n';
import { useCacheStore } from './composables/storeUtils/cacheStore';

const provider = await detectEthereumProvider();

const sessionStore = useSessionStore();
sessionStore.setIsWeb3CapableBrowser(provider != null);
const cacheStore = useCacheStore();

sessionStore.restorePreviousSession();
cacheStore.retrieveDefaultBedsList();
vuetifyTheme.global.name.value = sessionStore.getTheme;
locale.value = sessionStore.getLanguage;

onMounted(async () => {
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