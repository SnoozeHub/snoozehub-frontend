// https://v3.nuxtjs.org/api/configuration/nuxt.config
import vuetify from "vite-plugin-vuetify";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "url";
import VueI18nVitePlugin from "@intlify/unplugin-vue-i18n/vite";

export default defineNuxtConfig({
  pages: true,
  runtimeConfig: {
    // The private keys which are only available server-side
    public: {
      googleMapsApiKey: process.env.NUXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      domainName: process.env.NUXT_PUBLIC_DOMAIN_NAME,
    },
  },
  devServer: {
    port: 3000,
  },
  nitro: {
    serveStatic: true,
  },
  imports: {
    dirs: ["composables"],
  },
  ssr: false,
  build: {
    transpile: ["grpc-web"],
  },

  css: ["vuetify/styles"], // vuetify ships precompiled css, no need to import sass
  vite: {
    ssr: {
      noExternal: ["vuetify"], // add the vuetify vite plugin
    },
    plugins: [
      VueI18nVitePlugin({
        include: resolve(
          dirname(fileURLToPath(import.meta.url)),
          "./locales/*.json"
        ), // provide a path to the folder where you'll store translation data (see below)
      }),
    ],
  },
  modules: [
    "@pinia/nuxt",
    // @ts-ignore
    async (_, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) =>
        config.plugins.push(vuetify())
      );
    },
  ],
});
