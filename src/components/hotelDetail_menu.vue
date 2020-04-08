<template>
    <v-row style="text-align: center; margin-left: 50px;">
        <router-link :to="homeLink + this.$store.state.hotelNum">
            <v-btn  class="bounce-enter-active-1" style="font-size: 16px" x-large text dark><font-awesome-icon :icon="faHome" style="margin-right:10px"></font-awesome-icon>HOTEL HOME</v-btn>
        </router-link>
        <v-menu :open-on-hover="true" :close-on-click="true" :offset-y="true">
            <template v-slot:activator="{ on }">
                <v-btn  class="bounce-enter-active-1" style="font-size: 16px" x-large text dark v-on="on"><font-awesome-icon :icon="faBed" style="margin-right:10px"></font-awesome-icon>ROOM & AMENITIES</v-btn>
            </template>
            <v-list style="background-color: #F3F6F8">
                <v-list-item v-for="(item, index) in items" :key="index" @click="test">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <v-menu :open-on-hover="true" :close-on-click="true" :offset-y="true">
            <template v-slot:activator="{ on }">
                <v-btn class="bounce-enter-active-1"  style="font-size: 16px" x-large text dark v-on="on"><font-awesome-icon :icon="faWineGlass" style="margin-right:10px"></font-awesome-icon>RESTAURANT & BAR</v-btn>
            </template>
            <v-list style="background-color: #F3F6F8">
                <v-list-item v-for="(item, index) in items" :key="index" @click="test">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <v-menu :open-on-hover="true" :close-on-click="true" :offset-y="true">
            <template v-slot:activator="{ on }">
                <v-btn class="bounce-enter-active-1"  style="font-size: 16px" x-large text dark v-on="on"><font-awesome-icon :icon="faSwimmingPool" style="margin-right:10px"></font-awesome-icon>POOL</v-btn>
            </template>
            <v-list style="background-color: #F3F6F8">
                <v-list-item v-for="(item, index) in items" :key="index" @click="test">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <v-menu :open-on-hover="true" :close-on-click="true" :offset-y="true">
            <template v-slot:activator="{ on }">
                <v-btn class="bounce-enter-active-1"  style="font-size: 16px" x-large text dark v-on="on"><font-awesome-icon :icon="faStore" style="margin-right:10px"></font-awesome-icon>FACILITIES</v-btn>
            </template>
            <v-list style="background-color: #F3F6F8">
                <v-list-item v-for="(item, index) in items" :key="index" @click="test">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <v-menu :open-on-hover="true" :close-on-click="true" :offset-y="true">
            <template v-slot:activator="{ on }">
                <v-btn class="bounce-enter-active-1"  style="font-size: 16px" x-large text dark v-on="on"><font-awesome-icon :icon="faSpa" style="margin-right:10px"></font-awesome-icon>SPA</v-btn>
            </template>
            <v-list style="background-color: #F3F6F8">
                <v-list-item v-for="(item, index) in items" :key="index" @click="test">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <v-menu :open-on-hover="true" :close-on-click="true" :offset-y="true">
            <template v-slot:activator="{ on }">
                <v-btn class="bounce-enter-active-1"  style="font-size: 16px" x-large text dark v-on="on"><font-awesome-icon :icon="faLocationArrow" style="margin-right:10px"></font-awesome-icon>LOCATION</v-btn>
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

    import { faHome } from '@fortawesome/free-solid-svg-icons'
    import { faBed } from '@fortawesome/free-solid-svg-icons'
    import { faCloudMeatball } from '@fortawesome/free-solid-svg-icons'
    import { faWineGlass } from '@fortawesome/free-solid-svg-icons'
    import { faSwimmingPool } from '@fortawesome/free-solid-svg-icons'
    import { faStore } from '@fortawesome/free-solid-svg-icons'
    import { faSpa } from '@fortawesome/free-solid-svg-icons'
    import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'


    export default {
        name: 'hotel_menu',
        data: function () {
            return {
                faHome,
                faBed,
                faCloudMeatball,
                faWineGlass,
                faSwimmingPool,
                faStore,
                faSpa,
                faLocationArrow,
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