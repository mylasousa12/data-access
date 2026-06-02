import {defineNuxtConfig} from "nuxt/config";

export default defineNuxtConfig({
    routeRules: {
        '/':{redirect: '/home'}
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