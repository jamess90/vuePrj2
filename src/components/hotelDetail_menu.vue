<template>
    <v-row style="text-align: center; margin-left: 100px;">
        <router-link :to="homeLink + this.$store.state.hotelNum">
            <v-btn  class="bounce-enter-active-1" style="font-size: 16px" x-large text dark>HOTEL HOME</v-btn>
        </router-link>
        <v-menu :open-on-hover="true" :close-on-click="true" :offset-y="true">
            <template v-slot:activator="{ on }">
                <v-btn  class="bounce-enter-active-1" style="font-size: 16px" x-large text dark v-on="on">ROOM & AMENITIES</v-btn>
            </template>
            <v-list style="background-color: #F3F6F8">
                <v-list-item v-for="(item, index) in items" :key="index" @click="test">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <v-menu :open-on-hover="true" :close-on-click="true" :offset-y="true">
            <template v-slot:activator="{ on }">
                <v-btn class="bounce-enter-active-1"  style="font-size: 16px" x-large text dark v-on="on">RESTAURANT & BAR</v-btn>
            </template>
            <v-list style="background-color: #F3F6F8">
                <v-list-item v-for="(item, index) in items" :key="index" @click="test">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <v-menu :open-on-hover="true" :close-on-click="true" :offset-y="true">
            <template v-slot:activator="{ on }">
                <v-btn class="bounce-enter-active-1"  style="font-size: 16px" x-large text dark v-on="on">POOL</v-btn>
            </template>
            <v-list style="background-color: #F3F6F8">
                <v-list-item v-for="(item, index) in items" :key="index" @click="test">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <v-menu :open-on-hover="true" :close-on-click="true" :offset-y="true">
            <template v-slot:activator="{ on }">
                <v-btn class="bounce-enter-active-1"  style="font-size: 16px" x-large text dark v-on="on">FACILITIES</v-btn>
            </template>
            <v-list style="background-color: #F3F6F8">
                <v-list-item v-for="(item, index) in items" :key="index" @click="test">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <v-menu :open-on-hover="true" :close-on-click="true" :offset-y="true">
            <template v-slot:activator="{ on }">
                <v-btn class="bounce-enter-active-1"  style="font-size: 16px" x-large text dark v-on="on">SPA</v-btn>
            </template>
            <v-list style="background-color: #F3F6F8">
                <v-list-item v-for="(item, index) in items" :key="index" @click="test">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <v-menu :open-on-hover="true" :close-on-click="true" :offset-y="true">
            <template v-slot:activator="{ on }">
                <v-btn class="bounce-enter-active-1"  style="font-size: 16px" x-large text dark v-on="on">LOCATION</v-btn>
            </template>
            <v-list style="background-color: #F3F6F8">
                <v-list-item v-for="(item, index) in items" :key="index" @click="test">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <router-link :to="reserveLink + this.$store.state.hotelNum">
            <v-btn  class="fade-enter-active-3" style="font-size: 16px; background-color: #D3B2A5; height: 100%;" x-large text dark>객실요금 및 예약</v-btn>
        </router-link>
    </v-row>
</template>

<script>
    export default {
        name: 'hotel_menu',
        data: function () {
            return {
                params: {},
                homeLink: '/hotelDetail/hotelNum/',
                reserveLink: '/hotelReserve/hotelNum/',
                items: [
                    {title: 'Click Me'},
                    {title: 'Click Me'},
                    {title: 'Click Me'},
                    {title: 'Click Me 2'},
                ],
                disabled: false,
                absolute: false,
                openOnHover: false,
                value: false,
                value2: false,
                value3: false,
                closeOnClick: true,
                closeOnContentClick: true,
                offsetX: false,
                offsetY: true,
            }
        },
        methods: {
            test: function () {

            }
        }
    }
</script>