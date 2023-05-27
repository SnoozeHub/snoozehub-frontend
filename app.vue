<script setup lang="ts">
import detectEthereumProvider from '@metamask/detect-provider';
import { useSessionStore } from './composables/storeExport';
import { useInitGoogleApis } from './composables/mapsApi';
import { useTheme } from 'vuetify/lib/framework.mjs';
const vuetifyTheme = useTheme();
const { locale } = useI18n();
import { useI18n } from 'vue-i18n';
import { useCacheStore } from './composables/storeUtils/cacheStore';
import { UseHeadInput } from '@unhead/vue';
const provider = await detectEthereumProvider();

const sessionStore = useSessionStore();
sessionStore.setIsWeb3CapableBrowser(provider != null);
const cacheStore = useCacheStore();

sessionStore.restorePreviousSession();
cacheStore.retrieveDefaultBedsList();
vuetifyTheme.global.name.value = sessionStore.getTheme;
locale.value = sessionStore.getLanguage;

useInitGoogleApis();

const meta: UseHeadInput = {
    link: [{ rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
    { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
    { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
    { rel: "manifest", href: "/site.webmanifest" },
    { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#8cd6eb" }]
}

useHead(meta);

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

<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#8cd6eb">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="theme-color" content="#ffffff">