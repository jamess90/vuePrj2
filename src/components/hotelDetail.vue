<template>
    <v-app>
        <section style="background-color: black">
            <v-row style="background-color: black; overflow: hidden; max-height: 400px; max-width: 1400px; margin: 0 auto;">
                <v-carousel hide-delimiters v-model="window" class="elevation-1">
                    <v-carousel-item
                            v-for="(photo,i) in photoList"
                            :key="i"
                            :src="photo">
                        <br><br><br><br><br><br>
                        <h1 style="color: white; font-size: 50px; text-align: center; font-style: revert">Naman
                            Retreat</h1>
                        <h1 style="color: white; font-size: 30px; text-align: center; font-style: revert">나만 리트리트</h1>
                    </v-carousel-item>

                </v-carousel>
            </v-row>
        </section>
        <section>
            <v-content style="padding-top:30px;">
                <section id="title"
                         style=" padding-bottom:30px; text-align: center; overflow: hidden; max-height: 400px; max-width: 1400px; margin: 0 auto; line-height:20px;">
                    <h1 class="top">ABOUT</h1><br>
                    <h1 style="font-size: 40px;">-------------Naman Retreat-------------</h1><br>
                    <ul>
                        <li style="color:#666666">Truong Sa Road, Ngu Hanh Son District, Danang, Vietnam</li>
                    </ul>
                    <br>
                    <h1 style="font-size: 15px; width:70%; text-align: center; overflow: hidden; margin: 0 auto;">
                        다낭에서 아름다운 비치로 손꼽히는 논누억 해변에 위치한 베트남 엠파이어 (Empire) 그룹의 나만리트리트는 자연과 현대의 모던함이 어우러진 녹색건축을 컨셉으로 베트남의
                        전통 천연 건축 재료인 '대나무'를 이용해 이국적이며 자연 친화적인 디자인이 돋보입니다. 베트남의 유명 건축가 보 트롱 니야 (Vo Trong Nghia)가 디자인을
                        맡았으며, 편안한 분위기의 건축디자인 사이에서 함께 느껴지는 우아하고 럭셔리한 감각이 인상적입니다.
                    </h1>
                </section>

                <v-row id="galley_top">
                    <v-col>
                        <v-hover v-slot:default="{ hover }">
                            <v-card style="float: right" class="mx-auto" max-width="500" :elevation="hover ? 16 : 2" outlined>
                                <v-list-item three-line>
                                    <v-list-item-content onclick="location.href='hotel.php?local=DAD&amp;hotel=393&amp;info_type=3&amp;datano=3255';">
                                        <v-list-item-title >Naman Retreat</v-list-item-title>
                                        <div>다낭에서 아름다운 비치로 손꼽히는 논누억 해변에 위치한 베트남 엠파이어 (Empire) 그룹의 나만리트리트는 자연과 현대의 모던함이 어우러진
                                            녹색건축을 컨셉으로 베트남의 ......
                                        </div>
                                    </v-list-item-content>
                                    <v-list-item-avatar tile size="250" color="grey">
                                        <v-img src="../resources/images/hotelDetail/hotelDetail1.jpeg"></v-img>
                                    </v-list-item-avatar>
                                </v-list-item>
                            </v-card>
                        </v-hover>
                    </v-col>
                    <v-col>
                        <v-hover v-slot:default="{ hover }">
                            <v-card style="float: left" class="mx-auto" max-width="500" :elevation="hover ? 16 : 2" outlined>
                                <v-list-item three-line>
                                    <v-list-item-avatar tile size="250">
                                        <v-img src="../resources/images/hotelDetail/hotelDetail2.jpeg"></v-img>
                                    </v-list-item-avatar>
                                    <v-list-item-content onclick="location.href='hotel.php?local=DAD&amp;hotel=393&amp;info_type=3&amp;datano=3255';">
                                        <v-list-item-title >Babylon</v-list-item-title>
                                        <div>감각적인 노출 콘크리트 건물 사이를 둘러싼 초록색 식물들의 조화가 편안한 안정감을 선사합니다. 모던하고도 고급스러운 객실 인테리어가
                                            돋보이며, 바빌론 객실 전용 건물에 수영장과 가까운 1층과 칵테일 한 잔 즐기기에 더할 나위 없이 좋을......
                                        </div>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-card>
                        </v-hover>
                    </v-col>

                </v-row>

                <v-row id="galley_btm">
                    <v-col>
                        <v-hover v-slot:default="{ hover }">
                            <v-card style="float: right" class="mx-auto" max-width="500" :elevation="hover ? 16 : 2" outlined>
                                <v-list-item three-line>
                                    <v-list-item-content onclick="location.href='hotel.php?local=DAD&amp;hotel=393&amp;info_type=3&amp;datano=3255';">
                                        <v-list-item-title >Hay Hay Restaurant</v-list-item-title>
                                        <div>나만리트리트의 메인 레스토랑인 하이 하이 (Hay Hay)는 베트남어로 흥미롭다, 재미있다라는 뜻이 담겨져 있습니다. 베트남 유명 건축가 보
                                            트롱 니아 (Vo Trong Nghia)가 아이디어를 낸 전통적인 대나무와 현대적인 감각이......
                                        </div>
                                    </v-list-item-content>

                                    <v-list-item-avatar tile size="250" color="grey">
                                        <v-img src="../resources/images/hotelDetail/hotelDetail3.jpeg"></v-img>
                                    </v-list-item-avatar>
                                </v-list-item>
                            </v-card>
                        </v-hover>
                    </v-col>
                    <v-col>
                        <v-hover v-slot:default="{ hover }">
                            <v-card style="float: left" class="mx-auto" max-width="500" :elevation="hover ? 16 : 2" outlined>
                                <v-list-item three-line>
                                    <v-list-item-avatar tile size="250" color="grey">
                                        <v-img src="../resources/images/hotelDetail/hotelDetail4.jpeg"></v-img>
                                    </v-list-item-avatar>
                                    <v-list-item-content onclick="location.href='hotel.php?local=DAD&amp;hotel=393&amp;info_type=3&amp;datano=3255';">
                                        <v-list-item-title >Private Beach</v-list-item-title>
                                        <div>다낭에서도 손꼽히게 아름다운 논 누옥 (Non Nuoc) 해변에 프라이빗 비치가 펼쳐져있습니다. 비치 소파와 선베드에서 부드러운 백사장,
                                            온화한 파도와 깨끗한 해변을 만나보세요.
                                        </div>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-card>
                        </v-hover>
                    </v-col>
                </v-row>
            </v-content>
        </section>
    </v-app>
</template>

<script>
    import hotelImg1 from "../resources/images/hotelDetail/hotel1.jpg"
    import hotelImg2 from "../resources/images/hotelDetail/hotel2.jpg"
    import hotelImg3 from "../resources/images/hotelDetail/hotel3.jpg"
    import hotelImg4 from "../resources/images/hotelDetail/hotel4.jpg"
    import hotelImg5 from "../resources/images/hotelDetail/hotel5.jpg"

    export default {
        data: () => ({
            length: 5,
            window: 0,
            showArrows: true,
            vertical: false,
            reverse: false,
            autorun: true,
            photoList: [
                hotelImg1,
                hotelImg2,
                hotelImg3,
                hotelImg4,
                hotelImg5
            ],
            params: {}
        }),

        created() {
            this.$store.state.pageName = 'hotelDetail'
            this.$store.state.hotelNum = this.$route.params.hotelNum

            setInterval(() => {
                if (!this.autorun) return
                if (++this.window >= this.length) this.window = 0
            }, 8000)
        },
        methods: {
        }
    }
</script>
