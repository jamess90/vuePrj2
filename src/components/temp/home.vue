<template>
    <v-content style="background-color: rgba(0,0,0,0.8)">
        <div>
            <br>
            <div align="center" style="height: 135px">
                <v-img :src="logo" width="120" height="120"></v-img>
            </div>
            <!--      <div id="room_info" style="height: 70%" align="center">-->
            <!--        <div class="room" style="width: 70%;" >-->
            <!--          <v-row>-->
            <!--            <v-col>-->
            <!--              <v-select :items="destinationList" label="Destination" ></v-select>-->
            <!--            </v-col>-->
            <!--            <v-col>-->
            <!--              <v-select :items="hotelResort" label="Hotel/Resort"></v-select>-->
            <!--            </v-col>-->
            <!--            <v-col>-->
            <!--                <v-text-field v-model="checkOutDate" label="Check Out"></v-text-field>-->
            <!--            </v-col>-->
            <!--          </v-row>-->
            <!--          <div class="children_ages" style="margin-top: 10px"></div>-->
            <!--        </div>-->
            <!--        <div>-->
            <!--          <ul>-->
            <!--            <li onclick="location.href='index.php?hotel=687'">-->
            <!--              <div class="hotel_photo"-->
            <!--                   style="background:url('../resources/images/logo2.png') center no-repeat; background-size:cover; "></div>-->
            <!--              <div class="hotel_info">-->
            <!--                <p>-->
            <!--                  &lt;!&ndash; <img src="../_image/icon/country/16/vn.png" align="absmiddle"> &ndash;&gt;-->
            <!--                  다낭 &gt; 나만 리트리트 (가든 스위트)</p>-->
            <!--              </div>-->
            <!--            </li>-->
            <!--            <li onclick="location.href='index.php?hotel=687'">-->
            <!--              <div class="hotel_photo"-->
            <!--                   style="background:url('../resources/images/logo2.png') center no-repeat; background-size:cover; "></div>-->
            <!--              <div class="hotel_info">-->
            <!--                <p>-->
            <!--                  &lt;!&ndash; <img src="../_image/icon/country/16/vn.png" align="absmiddle"> &ndash;&gt;-->
            <!--                  다낭 &gt; 나만 리트리트 (가든 스위트)</p>-->
            <!--              </div>-->
            <!--            </li>-->
            <!--          </ul>-->
            <!--        </div>-->
            <!--      </div>-->
            <div align="center">
                <div style="width: 60%;">
                    <template>
                        <v-container fluid>
                            <v-data-iterator
                                    :items="items"
                                    :items-per-page.sync="itemsPerPage"
                                    :page="page"
                                    :search="search"
                                    :sort-by="sortBy.toLowerCase()"
                                    :sort-desc="sortDesc"
                                    hide-default-footer
                            >
                                <template v-slot:header>
                                    <v-toolbar dark class="mb-1">
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
                                            <!--                                            <v-select v-model="sortBy" flat solo-inverted hide-details :items="keys"-->
                                            <!--                                                      label="Sort by"></v-select>-->
                                            <v-spacer></v-spacer>
                                            <v-btn-toggle v-model="sortDesc" mandatory>
                                                <v-btn large depressed :value="false">
                                                    <v-icon>mdi-arrow-up</v-icon>
                                                </v-btn>
                                                <v-btn large depressed :value="true">
                                                    <v-icon>mdi-arrow-down</v-icon>
                                                </v-btn>
                                            </v-btn-toggle>
                                        </template>
                                    </v-toolbar>
                                </template>

                                <template v-slot:default="props">
                                    <v-row>
                                        <!--                                        <div v-for="room in roomList" v-bind:key="room.id">-->
                                        <!--                                            <div colspan='4' class='content_area' style='border-bottom:1px solid #dedede'>-->
                                        <!--                                                <span style="font-size: 12px;"> {{room[0]}} </span><br>-->
                                        <!--                                                <span style="font-size: 11px">조식 : {{room[1]}}</span><br>-->
                                        <!--                                                <span class='bold font14 no-bold'>{{room[3]}}원</span><span class="bold" style="font-size: 10px;">/1박</span>-->
                                        <!--                                                <span>-->
                                        <!--                                        <button class="s-btn-medium" style="font-size:13px; float:right; margin-right:7px;" outlined color="white"-->
                                        <!--                                                x-large>예약하기-->
                                        <!--                                        </button>-->
                                        <!--                                    </span><br>-->
                                        <!--                                                <span style="font-size: 11px;">무료취소기한 : {{room[2]}}</span>-->
                                        <!--                                            </div>-->
                                        <!--                                        </div>-->

                                        <v-col v-for="item in props.items" :key="item.name" cols="12" sm="6" md="4"
                                               lg="3">
<!--                                            <v-card>-->
                                                <!--                                                <v-card-title class="subheading" style="font-size: 15px; line-height:16px;" v-on:click="goRoomDetail(item.id)">{{ item.name }}-->
                                                <!--                                                </v-card-title>-->
                                                <v-divider></v-divider>
                                                <v-img :src="dummy" width="240" height="240" v-on:click="goRoomDetail(item.id)"
                                                       style="margin: 5px 5px 5px 5px; filter: brightness(80%)" >
                                                    <span style="position: relative; bottom:0px;">
                                                        <br>
                                                        <br>
                                                        <br>
                                                        <br>
                                                        <br>
                                                        <br>
                                                        <h3 float="left" style="color:white; text-align: left; margin: 10px 10px 10px 10px;">{{item.region}}</h3>
                                                        <h5 float="left" style="color:white; text-align: left; margin: 10px 10px 10px 10px;">{{item.name}}</h5>
                                                    </span>
                                                </v-img>
                                                <v-divider></v-divider>

                                                <!--                                                <v-list dense>-->
                                                <!--                                                    <v-list-item v-for="(key, index) in filteredKeys" :key="index">-->
                                                <!--                                                        <v-list-item-content :class="{ 'blue&#45;&#45;text': sortBy === key }">-->
                                                <!--                                                            {{ key }}:-->
                                                <!--                                                        </v-list-item-content>-->
                                                <!--                                                        <v-list-item-content class="align-end"-->
                                                <!--                                                                             :class="{ 'blue&#45;&#45;text': sortBy === key }">-->
                                                <!--                                                            {{ item[key.toLowerCase()] }}-->
                                                <!--                                                        </v-list-item-content>-->
                                                <!--                                                    </v-list-item>-->
                                                <!--                                                </v-list>-->
<!--                                            </v-card>-->
                                        </v-col>
                                        <!--                                        <v-col v-for="item in props.items" :key="item.name" cols="12" sm="6" md="4"-->
                                        <!--                                               lg="3">-->
                                        <!--                                            <v-card>-->
                                        <!--                                                <v-card-title class="subheading font-weight-bold">{{ item.name }}-->
                                        <!--                                                </v-card-title>-->

                                        <!--                                                <v-divider></v-divider>-->

                                        <!--                                                <v-list dense>-->
                                        <!--                                                    <v-list-item v-for="(key, index) in filteredKeys" :key="index">-->
                                        <!--                                                        <v-list-item-content :class="{ 'blue&#45;&#45;text': sortBy === key }">-->
                                        <!--                                                            {{ key }}:-->
                                        <!--                                                        </v-list-item-content>-->
                                        <!--                                                        <v-list-item-content class="align-end"-->
                                        <!--                                                                             :class="{ 'blue&#45;&#45;text': sortBy === key }">-->
                                        <!--                                                            {{ item[key.toLowerCase()] }}-->
                                        <!--                                                        </v-list-item-content>-->
                                        <!--                                                    </v-list-item>-->
                                        <!--                                                </v-list>-->
                                        <!--                                            </v-card>-->
                                        <!--                                        </v-col>-->
                                    </v-row>
                                </template>

                                <template v-slot:footer>
                                    <v-row class="mt-2" align="center" justify="center">
                                        <span class="grey--text">Items per page</span>
                                        <v-menu offset-y>
                                            <template v-slot:activator="{ on }">
                                                <v-btn dark text color="white" class="ml-2" v-on="on">
                                                    {{ itemsPerPage }}
                                                    <v-icon>mdi-chevron-down</v-icon>
                                                </v-btn>
                                            </template>
                                            <v-list>
                                                <v-list-item v-for="(number, index) in itemsPerPageArray" :key="index"
                                                             @click="updateItemsPerPage(number)">
                                                    <v-list-item-title>{{ number }}</v-list-item-title>
                                                </v-list-item>
                                            </v-list>
                                        </v-menu>
                                        <v-spacer></v-spacer>
                                        <span class="mr-4 white--text">              Page {{ page }} of {{ numberOfPages }}            </span>
                                        <v-btn fab dark color="darken-3" class="mr-1" @click="formerPage">
                                            <v-icon>mdi-chevron-left</v-icon>
                                        </v-btn>
                                        <v-btn fab dark color="darken-3" class="ml-1" @click="nextPage">
                                            <v-icon>mdi-chevron-right</v-icon>
                                        </v-btn>
                                    </v-row>
                                </template>
                            </v-data-iterator>
                        </v-container>
                    </template>
                </div>
            </div>
            <div class="clear"></div>
        </div>
    </v-content>
</template>

<script>
    import logo from '../../resources/images/logo.png'
    import dummy from '../../resources/images/temp.jpeg'
    import response from '../../dummyData'

    export default {
        name: 'App',
        components: {
            // HelloWorld,
        },

        data: function () {
            return {
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
            }
        },
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

<style>

</style>
