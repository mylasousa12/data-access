import {defineNuxtConfig} from "nuxt/config";

export default defineNuxtConfig({
    devServer: {
        port: 3001
    },
    routeRules: {
        '/':{redirect: '/home'}
    },
    nitro: {
        devProxy: {
            '/auth': {
                target: 'http://localhost:3000',
                changeOrigin: true,
            },
            '/user': {
                target: 'http://localhost:3000',
                changeOrigin: true,
            }
        }
    },
    runtimeConfig: {
        public: {
            apiBase: process.env.NUXT_PUBLIC_API_BASE ?? ''
        }
    },
    app: {
        head: {
            title: 'Tripfy',
            link: [
                { rel: 'icon', type: 'image/x-icon', href:'/favicon.ico' }
            ]
        }
    }
})