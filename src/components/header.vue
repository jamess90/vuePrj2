<template>
    <section style="background-color: black">

        <v-navigation-drawer
                color="rgba(1,1,1,0.8)"
                v-model="primaryDrawer.model"
                :clipped="primaryDrawer.clipped"
                :floating="primaryDrawer.floating"
                :mini-variant="primaryDrawer.mini"
                :permanent="primaryDrawer.type === 'permanent'"
                :temporary="primaryDrawer.type === 'temporary'"
                app
                overflow>
                <v-img src="../resources/images/staynmore_glow.png"></v-img>
                <v-col style="text-align: center;" >
                    <v-divider color="#dddddd" style="box-shadow: 0px 0px 1px #dddddd;"></v-divider>
                    <router-link to="/"><v-btn style="font-size: 13px; font-family: 'Nanum Gothic'" min-width="100%" x-large color="#dddddd" text dark><h1>처음으로</h1></v-btn></router-link>
                    <v-divider color="#dddddd" style="box-shadow: 0px 0px 1px #dddddd;"></v-divider>
                    <v-btn style="font-size: 13px; font-family: 'Nanum Gothic'" min-width="100%" x-large color="#dddddd" text dark><h1>예약확인</h1></v-btn>
                    <v-divider color="#dddddd" style="box-shadow: 0px 0px 1px #dddddd;"></v-divider>
                    <v-btn style="font-size: 13px; font-family: 'Nanum Gothic'" min-width="100%" x-large color="#dddddd" text dark><h1>온라인문의</h1></v-btn>
                    <v-divider color="#dddddd" style="box-shadow: 0px 0px 1px #dddddd;"></v-divider>
                    <v-btn style="font-size: 13px; font-family: 'Nanum Gothic'" min-width="100%" x-large color="#dddddd" text dark><h1>기업/단체문의</h1></v-btn>
                    <v-divider color="#dddddd" style="box-shadow: 0px 0px 1px #dddddd;"></v-divider>
                    <v-btn style="font-size: 13px; font-family: 'Nanum Gothic'" min-width="100%" x-large color="#dddddd" text dark><h1>신용카드 무이자할부</h1></v-btn>
                    <v-divider color="#dddddd" style="box-shadow: 0px 0px 1px #dddddd;"></v-divider>
                    <v-btn style="font-size: 13px; font-family: 'Nanum Gothic'" min-width="100%" x-large color="#dddddd" text dark><h1>프로모션</h1></v-btn>
                    <v-divider color="#dddddd" style="box-shadow: 0px 0px 1px #dddddd;"></v-divider>
                    <v-btn style="font-size: 13px; font-family: 'Nanum Gothic'" min-width="100%" x-large color="#dddddd" text dark><h1>다른호텔보기</h1></v-btn>
                    <v-divider color="#dddddd" style="box-shadow: 0px 0px 1px #dddddd;"></v-divider>
                </v-col>
<!--            <v-img src="../resources/images/staynmore.png"></v-img>-->
<!--                <v-col style="text-align: center;" >-->
<!--                    <v-divider></v-divider>-->
<!--                    <v-btn style="font-size: 13px" min-width="100%" x-large color="#3a393e" text ><h1>예약확인</h1></v-btn>-->
<!--                    <v-divider></v-divider>-->
<!--                    <v-btn style="font-size: 13px" min-width="100%" x-large color="#3a393e" text ><h1>온라인문의</h1></v-btn>-->
<!--                    <v-divider></v-divider>-->
<!--                    <v-btn style="font-size: 13px" min-width="100%" x-large color="#3a393e" text ><h1>기업/단체문의</h1></v-btn>-->
<!--                    <v-divider></v-divider>-->
<!--                    <v-btn style="font-size: 13px" min-width="100%" x-large color="#3a393e" text ><h1>신용카드 무이자할부</h1></v-btn>-->
<!--                    <v-divider></v-divider>-->
<!--                    <v-btn style="font-size: 13px" min-width="100%" x-large color="#3a393e" text ><h1>프로모션</h1></v-btn>-->
<!--                    <v-divider></v-divider>-->
<!--                    <v-btn style="font-size: 13px" min-width="100%" x-large color="#3a393e" text ><h1>다른호텔보기</h1></v-btn>-->
<!--                    <v-divider></v-divider>-->
<!--                </v-col>-->
        </v-navigation-drawer>

        <v-app-bar :clipped-left="primaryDrawer.clipped" app color="rgba(10,50,80,0.9)" dark><!--#002542a6-->
            <v-app-bar-nav-icon v-if="primaryDrawer.type !== 'permanent'" v-show="this.$store.state.pageName!=='home'"
                                @click.stop="primaryDrawer.model = !primaryDrawer.model"/>

            <v-toolbar-title>
                <v-img src="../resources/images/logo3.png" style="max-width: 200px; min-width: 200px;"></v-img>
            </v-toolbar-title>

            <component_home_menu v-show="this.$store.state.pageName=='home'"></component_home_menu>
            <component_hotelDetail_menu v-show="this.$store.state.pageName=='hotelDetail'"></component_hotelDetail_menu>
            <component_hotelReserve_menu v-show="this.$store.state.pageName=='hotelReserve'"></component_hotelReserve_menu>

        </v-app-bar>
    </section>
</template>

<script>
    import home_menu from "./home_menu";
    import hotelDetail_menu from "./hotelDetail_menu";
    import hotelReserve_menu from "./hotelReserve_menu";

    export default {
        components: {
            'component_home_menu' : home_menu,
            'component_hotelDetail_menu' : hotelDetail_menu,
            'component_hotelReserve_menu' : hotelReserve_menu
        },
        data: () => ({
            primaryDrawer: {
                model: false,
                type: 'temporary',
                // type: 'default (no property)',
                clipped: false,
                floating: true,
                mini: false,
            },
            menuName: ''
        }),
        methods: {
            changeMenuBar : function () {
                this.menuName = this.$store.state.pageName
                return this.menuName
            }
        }
    }
</script>