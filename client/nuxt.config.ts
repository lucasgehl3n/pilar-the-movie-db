// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
        '@nuxt/test-utils/module',
    ],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    css: [
        '~/assets/scss/main.scss',
        'flowbite/dist/flowbite.css',
    ],

    ssr: false,
    compatibilityDate: '2024-10-14',
    runtimeConfig: {
        public: {
            BASE_URL_BACKEND: process.env.BASE_URL_BACKEND,
        }
    },
})