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
                    <v-btn style="font-size: 13px" min-width="100%" x-large color="#dddddd" text dark><h1>예약확인</h1></v-btn>
                    <v-divider color="#dddddd" style="box-shadow: 0px 0px 1px #dddddd;"></v-divider>
                    <v-btn style="font-size: 13px" min-width="100%" x-large color="#dddddd" text dark><h1>온라인문의</h1></v-btn>
                    <v-divider color="#dddddd" style="box-shadow: 0px 0px 1px #dddddd;"></v-divider>
                    <v-btn style="font-size: 13px" min-width="100%" x-large color="#dddddd" text dark><h1>기업/단체문의</h1></v-btn>
                    <v-divider color="#dddddd" style="box-shadow: 0px 0px 1px #dddddd;"></v-divider>
                    <v-btn style="font-size: 13px" min-width="100%" x-large color="#dddddd" text dark><h1>신용카드 무이자할부</h1></v-btn>
                    <v-divider color="#dddddd" style="box-shadow: 0px 0px 1px #dddddd;"></v-divider>
                    <v-btn style="font-size: 13px" min-width="100%" x-large color="#dddddd" text dark><h1>프로모션</h1></v-btn>
                    <v-divider color="#dddddd" style="box-shadow: 0px 0px 1px #dddddd;"></v-divider>
                    <v-btn style="font-size: 13px" min-width="100%" x-large color="#dddddd" text dark><h1>다른호텔보기</h1></v-btn>
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

        <v-app-bar :clipped-left="primaryDrawer.clipped" app color="#002542a6" dark><!--2a3a3ec2-->
            <v-app-bar-nav-icon v-if="primaryDrawer.type !== 'permanent'"
                                @click.stop="primaryDrawer.model = !primaryDrawer.model"/>
            <v-toolbar-title>
                <v-img src="../resources/images/logo3.png" style="max-width: 200px"></v-img>
            </v-toolbar-title>

            <v-row style="text-align: center;" >
                <v-spacer></v-spacer>
                <router-link to="/"><v-btn style="font-size: 16px" x-large text dark>HOME</v-btn></router-link>
                <v-btn style="font-size: 16px" x-large text dark>ROOM & AMENITIES</v-btn>
                <v-btn style="font-size: 16px" x-large text dark>RESTAURANT & BAR</v-btn>
                <v-btn style="font-size: 16px" x-large text dark>POOL</v-btn>
                <v-btn style="font-size: 16px" x-large text dark>FACILITIES</v-btn>
                <v-btn style="font-size: 16px" x-large text dark>SPA</v-btn>
                <v-btn style="font-size: 16px" x-large text dark>LOCATION</v-btn>
                <v-spacer></v-spacer>
            </v-row>
        </v-app-bar>
    </section>
</template>

<script>


    export default {
        data: () => ({
            primaryDrawer: {
                model: false,
                type: 'temporary',
                // type: 'default (no property)',
                clipped: false,
                floating: true,
                mini: false,
            }
        })
    }
</script>