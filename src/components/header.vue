<template>
    <section style="background-color: black">
        <v-navigation-drawer
                color="#36494E"
                v-model="primaryDrawer.model"
                :clipped="primaryDrawer.clipped"
                :floating="primaryDrawer.floating"
                :mini-variant="primaryDrawer.mini"
                :permanent="primaryDrawer.type === 'permanent'"
                :temporary="primaryDrawer.type === 'temporary'"
                app
                overflow/>
        <v-app-bar :clipped-left="primaryDrawer.clipped" app color="#2a3a3ec2" dark>
            <v-app-bar-nav-icon v-if="primaryDrawer.type !== 'permanent'"
                                @click.stop="primaryDrawer.model = !primaryDrawer.model"/>
            <v-toolbar-title><v-img src="../resources/images/logo3.png" style="max-width: 200px"></v-img></v-toolbar-title>
        </v-app-bar>
    </section>
</template>

<script>

    export default {
        data: () => ({
            primaryDrawer: {
                model: false,
                type: 'default (no property)',
                clipped: false,
                floating: true,
                mini: false,
            }
        })
    }
</script>