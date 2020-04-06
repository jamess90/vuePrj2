<template>
    <section style="background-color: #ffffff">
        <v-parallax dark src="https://staynmore.com/photo/intro/1577773643.jpg">
            <v-row align="center" justify="center">
                <v-col class="text-center" cols="12">
                    <h1 style="font-weight: inherit; font-size: 50px; text-align: center">
                        <p style="text-align: center;">
                            <v-img src="../resources/images/logo3.png"
                                   style="max-width: 500px; margin-left: auto; margin-right: auto; display: block;"></v-img>
                        </p>
                    </h1>
                    <h1 style="font-size: 20px">호텔, 그 이상의 경험 : 스테이앤모어</h1>
                    <!--                    <h1 style="font-size: 20px">THE WORLD IS A BOOK AND THOSE WHO DO NOT TRAVEL READ ONLY ONE PAGE.</h1>-->

                    <br><br><br><br><br><br>
                    <v-btn class="align-self-end" fab @click="$vuetify.goTo('#reserve')" dark color="rgba(0,0,0,0.5)">
                        <v-icon>mdi-chevron-double-down</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </v-parallax>
        <v-content
                style="background-color: #ffffff; overflow: hidden; min-height: 1000px; max-width: 1300px; margin: 0 auto; padding: 5% 0; margin-top: -80px;">
            <div style="max-width: 1200px; overflow: hidden; margin: 0 auto; padding: 5% 0;">
                <template>
                    <v-container fluid id="reserve">
                        <v-data-iterator :items="items" :items-per-page.sync="itemsPerPage" :page="page"
                                         :search="search" :sort-by="sortBy.toLowerCase()" :sort-desc="sortDesc"
                                         hide-default-footer dark>
                            <template v-slot:header>
                                <v-toolbar class="mb-1" color="#597081">
                                    <v-select :items="destinationList" clearable flat hide-details
                                              label="Destination"></v-select>
                                    <v-spacer></v-spacer>
                                    <v-select :items="hotelResort" clearable flat hide-details
                                              label="Hotel/Resort"></v-select>
                                    <v-spacer></v-spacer>
                                    <v-text-field v-model="search" clearable flat hide-details
                                                  label="Search"></v-text-field>

                                    <template v-if="$vuetify.breakpoint.mdAndUp">
                                        <v-spacer></v-spacer>
                                        <v-spacer></v-spacer>
                                        <v-btn-toggle v-model="sortDesc" mandatory>
                                            <v-btn large depressed :value="false" color="#7EA0B7">
                                                <v-icon>mdi-arrow-up</v-icon>
                                            </v-btn>
                                            <v-btn large depressed :value="true" color="#7EA0B7">
                                                <v-icon>mdi-arrow-down</v-icon>
                                            </v-btn>
                                        </v-btn-toggle>
                                    </template>
                                </v-toolbar>
                            </template>
                            <template v-slot:default="props">
                                <v-row>
                                    <v-col v-for="item in props.items" :key="item.name" cols="12" sm="6" md="4" lg="3">
                                        <v-divider></v-divider>
                                        <v-hover v-slot:default="{ hover }">
                                            <v-card color="grey lighten-4" :elevation="hover ? 16 : 2"
                                                    max-width="600">
                                                <v-img :aspect-ratio="16/9" :src="dummy" width="100%" height="240"
                                                       v-on:click="goRoomDetail(item.id)"
                                                       style="filter: brightness(90%)">
                                                    <span style="position: relative; bottom:0px;">
                                                        <h3 float="left"
                                                            style="color:white; text-align: left; margin: 10px 10px 10px 10px;">{{item.region}}</h3>
                                                        <h5 float="left"
                                                            style="color:white; text-align: left; margin: 10px 10px 10px 10px;">{{item.name}}</h5>
                                                    </span>
                                                    <v-expand-transition>
                                                        <div v-if="hover" class="d-flex darken-2 v-card--reveal white--text">
                                                            <span style="position: relative; bottom:0px;">
                                                                <h3 style="color:white; margin: 10px 10px 10px 10px;">상세정보보러가기</h3><br>
                                                                <br>
                                                            </span>
                                                        </div>
                                                    </v-expand-transition>
                                                </v-img>
                                            </v-card>
                                        </v-hover>
                                        <v-divider></v-divider>
                                    </v-col>
                                </v-row>
                            </template>
                            <template v-slot:footer>
                                <v-row class="mt-2" align="center" style="width: 99.5%; margin-left:2px;">
                                    <span class="grey--text">Items per page</span>
                                    <v-menu offset-y>
                                        <template v-slot:activator="{ on }">
                                            <v-btn text color="#597081" class="ml-2" v-on="on">
                                                {{ itemsPerPage }}
                                                <v-icon>mdi-chevron-down</v-icon>
                                            </v-btn>
                                        </template>
                                        <v-list color="#white">
                                            <v-list-item v-for="(number, index) in itemsPerPageArray"
                                                         :key="index"
                                                         @click="updateItemsPerPage(number)">
                                                <v-list-item-title>{{ number }}</v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                    <v-spacer></v-spacer>
                                    <span class="mr-4" color="#597081"> Page {{ page }} of {{ numberOfPages }} </span>
                                    <v-btn fab color="#597081" class="mr-1" @click="formerPage">
                                        <v-icon>mdi-chevron-left</v-icon>
                                    </v-btn>
                                    <v-btn fab color="#597081" class="ml-1" @click="nextPage">
                                        <v-icon>mdi-chevron-right</v-icon>
                                    </v-btn>
                                </v-row>
                            </template>
                        </v-data-iterator>
                    </v-container>
                </template>
            </div>
        </v-content>
    </section>
</template>

<script>
    import response from "../dummyData";
    import logo from "../resources/images/logo.png";
    import dummy from "../resources/images/temp.jpeg";

    export default {
        data: () => ({
            drawers: ['Default (no property)', 'Permanent', 'Temporary'],
            primaryDrawer: {
                model: null,
                type: 'default (no property)',
                clipped: false,
                floating: false,
                mini: false,
            },
            footer: {
                inset: false,
            },
            response: response,
            logo: logo,
            dummy: dummy,
            destinationList: [
                '괌',
                '나트랑',
                '다낭',
                '마카오',
                '발리',
                '방콕',
                '사이판',
                '세부',
                '시엠립',
                '치앙마이',
                '칭다오',
                '카오락',
                '칸쿤',
                '코타키나발루',
                '쿠알라룸푸르',
                '타이페이',
                '파타야',
                '팔라우',
                '푸꾸옥',
                '하와이',
                '해밀턴 아일랜드',
                '호이안',
                '홍콩',
                '후아힌'],
            hotelResort: ['Hotel/Resort'],
            itemsPerPageArray: [8, 16, 32],
            search: '',
            filter: {},
            sortDesc: false,
            page: 1,
            itemsPerPage: 8,
            sortBy: 'name',
            keys: [
                'Name',
                'Calories',
                'Fat',
                'Carbs',
                'Protein',
                'Sodium',
                'Calcium',
                'Iron'
            ],
            items: [
                {
                    name: '빈펄 콘도텔 리버프론트 다낭 (Vinpearl Condotel Riverfront Da Nang)',
                    region: '다낭',
                    id: 1
                },
                {
                    name: '후에 필그리미지 빌리지 부티크 (Pilgrimage Village boutique resort & spa)',
                    region: '다낭',
                    id: 2
                },
                {
                    name: '오션빌라스(Ocean Villas)',
                    region: '다낭',
                    id: 3
                },
                {
                    name: '래디슨블루 푸꾸옥 (Radisson Blu Resort Phu Quoc)',
                    region: '푸꾸옥',
                    id: 4
                },
                {
                    name: '퓨전 리조트 푸꾸옥 (Fusion Resort Phu Quoc)',
                    region: '푸꾸옥',
                    id: 5
                },
                {
                    name: 'JW 메리어트 푸꾸옥 (JW Marriott PhuQuoc Emerald Bay)',
                    region: '푸꾸옥',
                    id: 6
                },
                {
                    name: '포시즌스 오아후 앳 코올리나 (Four Seasons Resort Oahu at Ko Olina)',
                    region: '하와이',
                    id: 7
                },
                {
                    name: '센츄리 호텔 (SAIPAN CENTURY HOTEL)',
                    region: '사이판',
                    id: 8
                },
                {
                    name: '림바 짐바란 발리 바이 아야나 (RIMBA Jimbaran BALI by AYANA)',
                    region: '발리',
                    id: 9
                },
                {
                    name: '모벤픽 (Movenpick Resort & Spa Jimbaran Bali)',
                    region: '발리',
                    id: 10
                }
            ],
        }),
        created() {
            this.roomList = this.response.data
        },
        computed: {
            numberOfPages() {
                return Math.ceil(this.items.length / this.itemsPerPage)
            },
            filteredKeys() {
                return this.keys.filter(key => key !== `Name`)
            },
        },
        methods: {
            nextPage() {
                if (this.page + 1 <= this.numberOfPages) this.page += 1
            },
            formerPage() {
                if (this.page - 1 >= 1) this.page -= 1
            },
            updateItemsPerPage(number) {
                this.itemsPerPage = number
            },
            goRoomDetail(id) {
                this.$router.push('hotelDetail/hotelNum/' + id)
            }
        }
    }
</script>