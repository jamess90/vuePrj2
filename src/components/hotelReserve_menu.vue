<template>
    <v-row style="text-align: center; margin-left: 100px;">
        <router-link :to="homeLink + this.$store.state.hotelNum">
            <v-btn style="font-size: 16px" x-large text dark>HOTEL HOME</v-btn>
        </router-link><span style="width:10px"></span>
        <v-btn style="font-size: 16px; background-color:rgba(1,1,1,0.1)" x-large text dark>
            <v-dialog ref="dialog" v-model="modal" :return-value.sync="dates" width="290px">
                <template v-slot:activator="{ on }">
                    <v-text-field v-model="dates[0]" label="Check In" style="width: 200px; margin-top: 11px;" clearable readonly v-on="on"></v-text-field>
                </template>
                <v-date-picker v-model="dates" type="date" range no-title full-width
                               :event-color="date => date[9] % 2 ? 'red' : 'yellow'"
                               :events="functionEvents">
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                    <v-btn text color="primary" @click="returnDate($refs.dialog, dates)">OK</v-btn>
                </v-date-picker>
            </v-dialog>
        </v-btn><span style="width:10px"></span>
        <v-btn style="font-size: 16px; background-color:rgba(1,1,1,0.1)" x-large text>
            <v-dialog ref="dialog2" v-model="modal2" :return-value.sync="dates" width="40%" offset-y="true">
                <template v-slot:activator="{ on }">
                    <v-text-field v-model="dates[1]" label="Check Out" style="width: 200px; margin-top: 11px;"  readonly v-on="on"></v-text-field>
                </template>
                <v-card width="100%">
                    <v-row>
                        <v-col cols="12" sm="6" class="my-2 px-1" >
                            <div class="title">Month news ({{ pickerDate || 'change month...' }})</div>
                            <div class="subheading">Change month to see other news</div>
    <!--                        <ul class="ma-4">-->
    <!--                            <li v-for="note in notes" :key="note">{{ note }}</li>-->
    <!--                        </ul>-->
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="6" class="my-2 px-1">
                            <v-date-picker v-model="dates" type="date" range no-title full-width
                                           :event-color="date => date[9] % 2 ? 'red' : 'yellow'"
                                           :events="functionEvents">
                            </v-date-picker>
                        </v-col>
                        <v-col cols="12" sm="6" class="my-2 px-1">
                            <v-date-picker v-model="dates" type="date" range no-title full-width
                                           :event-color="date => date[9] % 2 ? 'red' : 'yellow'"
                                           :events="functionEvents">
                            </v-date-picker>
                            <v-spacer></v-spacer>
                            <v-btn text color="primary" @click="modal2 = false">Cancel</v-btn>
                            <v-btn text coor="primary" @click="returnDate($refs.dialog2, dates)">OK</v-btn>
                        </v-col>
                    </v-row>
                </v-card>
<!--                        <v-date-picker v-model="dates" type="date" range no-title full-width-->
<!--                                       :event-color="date => date[9] % 2 ? 'red' : 'yellow'"-->
<!--                                       :events="functionEvents">-->
<!--                            <v-spacer></v-spacer>-->
<!--                            <v-btn text color="primary" @click="modal2 = false">Cancel</v-btn>-->
<!--                            <v-btn text color="primary" @click="returnDate($refs.dialog2, dates)">OK</v-btn>-->
<!--                        </v-date-picker>-->
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