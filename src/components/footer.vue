<template>
    <v-footer style="position: absolute" :inset="footer.inset" app dark padless>
        <v-card flat tile style="color: #597081; width:2000px" class="lighten-1 white--text text-center" >
            <v-card-text>
                <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
                    <v-icon size="100px">{{ icon }}</v-icon>
                </v-btn>
            </v-card-text>

            <v-card-text class="white--text pt-0">
                법인명 : (주)트래블멤버스  |  대표 : 임진욱,이호열 | 주소 : 서울시 중구 서소문로11길 50 신아빌딩 704호<br>
                사업자등록번호 529-87-00026  |  사업자정보확인 통신판매업신고번호 : 2017-서울중구-1429<br>
                관광사업등록 제2017-000116호  |  제 100-000-2019 0398 7819호 (서울보증보험)<br>
                고객센터 : 1544-8241  |  개인정보관리. : 안병열<br>

            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text">
                 <strong>CopyRights(C){{ new Date().getFullYear() }} Staynmore All Rights Reserved</strong>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
    export default {
        data: () => ({
            icons: [
                'fab fa-facebook-square',
                'fab fa-twitter',
                'fab fa-google-plus',
                'fab fa-linkedin',
                'fab fa-instagram',
            ],
            footer:{
                inset: true
            }
        }),
    }
</script>