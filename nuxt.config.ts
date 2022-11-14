// https://v3.nuxtjs.org/api/configuration/nuxt.config
import vuetify from 'vite-plugin-vuetify';
export default defineNuxtConfig({
    ssr: false,
    // head: {
    //     script: [
    //         { ssr: false, src: "/grpc-gen/auth-only-service_pb.js" },
    //         { ssr: false, src: "/grpc-gen/-service_pb.js" },
    //         { ssr: false, src: "/grpc-gen/common-messages_pb.js" },
    //         { ssr: false, src: "/grpc-gen/Auth-only-serviceServiceClientPb.ts" },
    //         { ssr: false, src: "/grpc-gen/Public-serviceServiceClientPb.ts" }
    //       ]
    // }
    // ,
    build: {
        transpile: ['grpc-web']
    },
    plugins: [
        '@/plugins/grpc-gen/Auth-only-serviceServiceClientPb.ts'
    ],
    css: ['vuetify/styles'], // vuetify ships precompiled css, no need to import sass
    vite: {
        // @ts-ignore
        // curently this will lead to a type error, but hopefully will be fixed soon #justBetaThings
        ssr: {
            noExternal: ['vuetify'], // add the vuetify vite plugin
        },
    },
    modules: [
        // @ts-ignore
        // this adds the vuetify vite plugin
        // also produces type errors in the current beta release
        async (options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(
                vuetify()
            ))
        }
    ]
})
