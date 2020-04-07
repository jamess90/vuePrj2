<template>
    <v-row style="text-align: center; margin-left: 100px;">
        <router-link :to="homeLink + this.$store.state.hotelNum">
            <v-btn style="font-size: 16px" x-large text dark>HOTEL HOME</v-btn>
        </router-link><span style="width:10px"></span>
        <v-btn style="font-size: 16px; background-color:rgba(1,1,1,0.1)" x-large text dark>
            <v-dialog ref="dialog" v-model="modal" :return-value.sync="dates" width="290px">
                <template v-slot:activator="{ on }">
                    <v-text-field v-model="dates[0]" label="Check In" style="width: 200px; margin-top: 8px;" readonly v-on="on"></v-text-field>
                </template>
                <v-date-picker v-model="dates" type="date" range no-title>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                    <v-btn text color="primary" @click="$refs.dialog.save(dates)">OK</v-btn>
                </v-date-picker>
            </v-dialog>
        </v-btn><span style="width:10px"></span>
        <v-btn style="font-size: 16px; background-color:rgba(1,1,1,0.1)" x-large text dark>
            <v-dialog ref="dialog2" v-model="modal2" :return-value.sync="dates" width="200px">
                <template v-slot:activator="{ on }">
                    <v-text-field v-model="dates[1]" label="Check Out" style="width: 200px; margin-top: 8px;" readonly v-on="on"></v-text-field>
                </template>
                <v-date-picker v-model="dates" type="date" range no-title>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="modal2 = false">Cancel</v-btn>
                    <v-btn text color="primary" @click="$refs.dialog2.save(dates)">OK</v-btn>
                </v-date-picker>
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
        }
    }
</script>