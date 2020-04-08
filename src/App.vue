<template>
    <v-app id="sandbox">
        <header-component></header-component>

        <v-content>
            <router-view></router-view>
        </v-content>

        <footer-component></footer-component>
    </v-app>
</template>

<script>

    import footer from './components/footer'
    import header from './components/header'
    import animation from './resources/css/animation.css'

    export default {
        animation,
        components: {
            'footer-component': footer,
            'header-component': header
        },
        data: () => ({
            drawers: ['Default (no property)', 'Permanent', 'Temporary'],
            primaryDrawer: {
                model: null,
                type: 'default (no property)',
                clipped: false,
                floating: false,
                mini: false,
            },
        }),
    }
</script>