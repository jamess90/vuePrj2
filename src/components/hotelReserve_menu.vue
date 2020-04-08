<template>
    <v-row class="bounce-enter-active-1" style="text-align: center; margin-left: 100px;">
        <router-link :to="homeLink + this.$store.state.hotelNum">
            <v-btn style="font-size: 16px" x-large text dark>HOTEL HOME</v-btn>
        </router-link><span style="width:10px"></span>
        <v-btn style="font-size: 16px; background-color:rgba(255,255,255,0.2)" x-large text>
            <v-dialog ref="dialog" v-model="modal" :return-value.sync="dates" width="800px">
                <template v-slot:activator="{ on }">
                    <v-text-field v-model="dates[0]" label="Check In" style="width: 200px; margin-top: 11px;" clearable readonly v-on="on"></v-text-field>
                </template>
                <v-card width="120%" style="overflow: hidden; overflow-x:hidden;">
                    <v-row>
                        <span style="width:10px"></span>
                        <v-col>
                            <!--아이콘으로 변경해야 함-->
                            <span><span style="color: red;">●</span>￦345,000 ~</span>
                            <span><span style="color: blue;">●</span>￦349,334 ~</span>
                            <span><span style="color: yellow;">●</span>￦353,668 ~</span>
                            <span><span style="color: darkgray;">●</span>등록요금 없음 </span>
                        </v-col>
                        <span style="width:10px"></span>
                    </v-row>
                    <v-row>
                        <span style="width:10px"></span>
                        <v-col>
                            <v-date-picker v-model="dates" type="date" range no-title full-width
                                           :event-color="date => date[9] % 2 ? 'red' : 'yellow'"
                                           :events="functionEvents">
                            </v-date-picker>
                        </v-col>
                        <v-col>
                            <v-date-picker v-model="dates" type="date" range no-title full-width
                                           :event-color="date => date[9] % 2 ? 'red' : 'yellow'"
                                           :events="functionEvents">
                            </v-date-picker>
                            <v-spacer></v-spacer>
                            <div align="right">
                                <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                                <v-btn text coor="primary" @click="returnDate($refs.dialog, dates)">OK</v-btn>
                            </div>
                        </v-col>
                        <span style="width:10px"></span>
                    </v-row>
                </v-card>
            </v-dialog>
        </v-btn><span style="width:10px"></span>
        <v-btn style="font-size: 16px; background-color:rgba(255,255,255,0.2)" x-large text>
            <v-dialog ref="dialog2" v-model="modal2" :return-value.sync="dates" width="800px">
                <template v-slot:activator="{ on }">
                    <v-text-field v-model="dates[1]" label="Check Out" style="width: 200px; margin-top: 11px;" clearable readonly v-on="on"></v-text-field>
                </template>
                <v-card width="120%" style="overflow: hidden; overflow-x:hidden;">
                    <v-row>
                        <span style="width:10px"></span>
                        <v-col>
                                <span style="color: red;">●</span>￦345,000 ~
                                <span style="color: blue;">●</span>￦349,334 ~
                                <span style="color: yellow;">●</span>￦353,668 ~
                                <span style="color: darkgray;">●</span>등록요금 없음
                        </v-col>
                        <span style="width:10px"></span>
                    </v-row>
                    <v-row>
                        <span style="width:10px"></span>
                        <v-col>
                            <v-date-picker v-model="dates" type="date" range no-title full-width
                                           :event-color="date => date[9] % 2 ? 'red' : 'yellow'"
                                           :events="functionEvents">
                            </v-date-picker>
                        </v-col>
                        <v-col>
                            <v-date-picker v-model="dates" type="date" range no-title full-width
                                           :event-color="date => date[9] % 2 ? 'red' : 'yellow'"
                                           :events="functionEvents">
                            </v-date-picker>
                            <v-spacer></v-spacer>
                            <div align="right">
                                <v-btn text color="primary" @click="modal2 = false">Cancel</v-btn>
                                <v-btn text coor="primary" @click="returnDate($refs.dialog2, dates)">OK</v-btn>
                            </div>
                        </v-col>
                        <span style="width:10px"></span>
                    </v-row>
                </v-card>
            </v-dialog>
        </v-btn>
    </v-row>
</template>

<script>
    export default {
        name: 'hotelReserve_menu',
        data: function () {
            return {
                homeLink: '/hotelDetail/hotelNum/',
                dates: [ ],
                modal: false,
                modal2: false
            }
        },
        mounted () {
            this.arrayEvents = [...Array(6)].map(() => {
                const day = Math.floor(Math.random() * 30)
                const d = new Date()
                d.setDate(day)
                return d.toISOString().substr(0, 10)
            })
        },

        methods: {
            functionEvents (date) {
                const [,, day] = date.split('-')
                if ([12, 17, 28].includes(parseInt(day, 10))) return true
                if ([1, 19, 22].includes(parseInt(day, 10))) return ['red', '#00f']
                return false
            },
            returnDate (dialog, dates) {
                if(dates[0] > dates[1]){
                    let temp = dates[0]
                    dates[0] = dates[1]
                    dates[1] = temp
                }
                dialog.save(dates)
            }
        },
    }
</script>