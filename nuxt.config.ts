// https://v3.nuxtjs.org/api/configuration/nuxt.config
import vuetify from "vite-plugin-vuetify";
export default defineNuxtConfig({
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
  },
  modules: [
    // @ts-ignore
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) =>
        config.plugins.push(vuetify())
      );
    },
    [
      "@pinia/nuxt",
      {
        autoImports: [
          // automatically imports `defineStore`
          "defineStore", // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
          ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
  ],
});
