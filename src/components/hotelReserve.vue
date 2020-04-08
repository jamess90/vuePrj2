<template>
    <v-app>
        <section style="background-color: black">
            <v-row style="background-color: black; overflow: hidden; max-height: 100px; max-width: 1400px; margin: 0 auto;">
                <v-carousel hide-delimiters v-model="window" class="elevation-1">
                    <v-carousel-item
                            v-for="(photo,index) in photoList"
                            :key="index"
                            :src="photo">
                        <br>
                        <h1 style="color: white; font-size: 25px; text-align: center; font-style: revert">Naman Retreat</h1>
                        <h1 style="color: white; font-size: 15px; text-align: center; font-style: revert">나만 리트리트</h1>
                    </v-carousel-item>
                </v-carousel>
            </v-row>
        </section>
        <section>
            <v-content style="padding-top:30px;">
                <section id="title" class="fade-enter-active-1"
                         style="padding-bottom:30px; text-align: center; overflow: hidden; max-width: 1025px; margin: 0 auto; line-height:20px;">
                    <div style="text-align: left; margin-bottom: 10px;" max-width="1025" >
                        <br>
                        <span style="font-size: 28px; font-weight: bold; color: #e53935">｜</span>
                        <span style="font-size: 28px; font-weight: bold">날짜별 객실요금확인</span>
                        스테이앤모어의 모든 요금은 <span style="font-weight: bold; color: #e53935">별도의 카드수수료가 발생하지 않습니다</span>
                    </div>
                    <v-card class="mx-auto" style="text-align: left; background-color: rgba(255,0,0,0.1); border: 2px solid rgba(255,0,0,0.2); " max-width="1025" outlined>
                        <v-list-item style="margin: 30px 30px 30px 30px;">
                            <ul>
                                <v-list-item-title style="font-weight: bold; font-size: 18px">예약전 주의사항<br></v-list-item-title>
                                <br>
                                <li>* 실시간 예약 확정이 아니며 예약 접수 후 영업일 기준 48시간 이내에 확정 유무를 안내해드립니다.</li>
                                <li>* 결제요청서 발송 후 당일 17시까지 결제 완료시 호텔수배가 완료되며, 미결제 시 자동으로 예약이 취소됩니다.</li>
                                <li>* 예약해주신 룸 타입이 아닌 상위/하위 카테고리의 객실이 가능한 경우 변경 제안서를 발송해드립니다.</li>
                                <li>* 만실 등의 사유로 예약이 불가할 경우 예약은 자동 취소 및 환불 처리됩니다. (현금결제의 경우 3-7일 정도 소요됩니다.)</li>
                                <li>* 취소수수료는 예약 시 안내된 취소 규정에 따르며, 투숙 기간 또는 프로모션 적용에 따라 상이하니 주의 부탁드립니다.</li>
                                <li>* 호텔비 및 추가사항의 비용은 예약 확정 시 요금 기준으로 적용되며 확정 이후 프로모션, 환불 등으로 인한 차액은 환불이 불가합니다.</li>
                                <li>* 진행사항 (확정/취소/환불/제안서 등..) 안내는 카카오톡,SMS,이메일의 방법으로 안내드립니다.</li>
                                <li>* 한국 국적이 아닌 투숙객 및 예약자가 포함된 경우 투숙에 제한이 있을 수 있으므로 예약 전 이용 가능 여부를 확인해 주시기 바랍니다.</li>
                                <li>* 투숙객의 만 나이는 체크아웃날짜를 기준으로 생년월일을 계산합니다.</li>
                            </ul>
                        </v-list-item>
                    </v-card>
                </section>
                <section class="fade-enter-active-1"
                         style="padding-bottom:30px; text-align: center; overflow: hidden; max-width: 1025px; margin: 0 auto; line-height:20px;">
                    <v-card class="mx-auto" style="text-align: left;" max-width="1025" outlined>
                        <v-list-item style="margin: 30px 30px 30px 30px;">
                            <ul>
                                <li>* 본 호텔요금에는 <span style="font-weight: bold; color: #e53935">세금 및 서비스 요금(Taxes, Service Fees Included), 카드 수수료</span>가 모두 포함되어 있습니다.</li><br>

                                <li>[호텔규정 및 안내사항]</li>
                                <li>* 각 룸타입별 기준인원 조식이 포함되어 있습니다.</li>
                                <li>* 피트니트 센터 및 사우나, 스팀 룸 무료이용</li>
                                <li>* 체크인 14시 / 체크아웃 12시 이전</li>
                                <li>* 아동 나이기준 유아 0-3세 , 아동 4-11세, 12세부터 성인</li>
                                <li>* 각 룸타입별 기준인원외 추가동반 투숙 인원은 인원추가비용이 발생합니다. (유아도 해당)</li>
                                <li>* 가든스위트룸을 제외한 성인 인원추가비용은 간이침대 1개가 제공됩니다.</li>
                                <li>* 가든스위트룸엔 간이침대 추가가 불가합니다. (추가인원은 기존 침대를 쉐어)</li>
                                <li>* 가든스위트룸은 스파가 포함되어 있지 않습니다.</li>
                                <li>* 간이침대는 호텔 상황에따라 제공이 불가할 수 있습니다.</li>
                                <li>* 호이안/다낭/코코베이 셔틀버스있습니다 (세부사항 홈페이지참고)</li>
                                <li>* 침대가드/유아어메니티/얼리체크인/레이트체크아웃 요청 불가합니다.</li><br>

                                <li># 3베드룸 베네핏 포함사항 (특가요금은 해당없음)</li>
                                <li>- 왕복픽업서비스+첫날 미니바1회 + 스페셜 어메니티(과일&잼)</li><br>

                                <li>&lt;스파 이용 안내&gt;</li>
                                <li>* 박당 1회 스파트리트먼트 무료 제공 (약 50분)</li>
                                <li>* 17세 이상 성인 부터 스파서비스 이용가능</li>
                                <li>* 스파예약은 바우처하단의 (스파신청서, 스파메뉴, 신청이메일주소) 정보를 참고하시어 직접 예약부탁드립니다.</li>
                                <li>- 마사지 종류 : Relax (아로마) / Refresh (스웨덴식) / Renew (지압) / Reconnect (타이).</li><br>

                                <li># 룸타입별 투숙인원규정</li>
                                <li>- 바빌론&1베드풀빌라 (성인2기준): 최대 성인3인 or 성인2+아동2</li>
                                <li>- 가든스위트 1베드 (성인2기준) : 최대 성인3+아동2</li>
                                <li>- 가든스위트 2베드 (성인4기준) : 최대 성인5+아동4</li>
                                <li>- 가든스위트 3베드 (성인6기준) : 최대 성인7+아동6</li>
                                <li>- 2베드 풀빌라 (성인4기준) : 최대 성인5인 or 성인4+아동2</li>
                                <li>- 3베드 풀빌라 (성인6+유아3기준): 최대 성인7인+아동3인 or 성인6+아동6</li>
                            </ul>
                        </v-list-item>
                    </v-card>
                </section>
                <section class="fade-enter-active-1"
                         style="padding-bottom:30px; text-align: center; max-width: 1025px; margin: 0 auto; line-height:20px;">
                    <v-card class="mx-auto" style="text-align: left; background-color: rgba(0,0,255,0.1); border: 2px solid rgba(0,0,255,0.2); " max-width="1025" outlined>
                        <v-list-item style="margin: 0px 30px 0px 30px;">
                            * 3박 이상 예약 시 적용되는 할인 프로모션이 있습니다.
                        </v-list-item>
                    </v-card>
                    <br>
                    <v-card class="mx-auto" style="text-align: left;" max-width="1025" outlined v-for="items in roomInfoList" :key="items.roomId">
                        <v-list-item style="margin: 10px 10px 10px 10px;">
                                <v-list-item three-line>
                                    <v-list-item-avatar tile width="600px" height="220px" color="grey">
                                        <v-img src="../resources/images/hotelDetail/hotelDetail4.jpeg"></v-img>
                                    </v-list-item-avatar>
                                    <ul>
                                        <v-list-item-title style="font-weight: bold; font-size: 25px">{{items.roomName}}<br></v-list-item-title>
                                        <li><span class="font14 no-bold" style="background:#333333; color:#fff; padding:3px 10px; font-size:12px;;">{{items.roomNameEn}}</span></li>
                                        <br>
                                        <li>다낭에서도 손꼽히게 아름다운 논 누옥 (Non Nuoc) 해변에 프라이빗 비치가 펼쳐져있습니다. 비치 소파와 선베드에서 부드러운 백사장,
                                            온화한 파도와 깨끗한 해변을 만나보세요.</li>
                                    </ul>
                                </v-list-item>
                        </v-list-item>
                        <v-card class="mx-auto bounce-enter-active-1" style="margin-bottom: 30px; text-align: center;" max-width="88.5%" outlined>
                            <v-simple-table>
                                <template v-slot:default>
                                    <tbody>
                                    <tr style="height: 80px">
                                        <td style="text-align: left; height: 50px">
                                            <span v-if="items.options.tax" ><v-btn style="color:#13af73; font-size: 13px; margin-right: 5px;" x-small outlined >세금포함</v-btn></span>
                                            <span v-if="items.options.breakfast" ><v-btn style="color:#0054c4; font-size: 13px; margin-right: 5px;" x-small outlined >조식포함</v-btn></span>
                                            <span v-if="items.options.spa" ><v-btn style="color:#8660C7; font-size: 13px; margin-right: 5px;" x-small outlined >스파포함</v-btn></span><br>
                                            <div class="price_won_late" style="margin-top: 3px; display: none;">
                                                <span class="red fas fa-clock"></span>
                                                <span class="red" style="margin-left: 5px;">레이트 체크아웃 요금추가됨</span>
                                            </div>
                                            <v-btn style="color:#e53935; font-size: 13px; margin-right: 5px; margin-top:5px;" x-small outlined >취소수수료 - 29일전 [ 2020/05/03 ] : 차감없음 / 전액환불</v-btn><br>

                                        </td>
                                        <td>{{ items.fee }}</td>
                                        <td><router-link :to="'/roomReserve/roomNum/' + items.roomId"><v-btn dark >예약</v-btn></router-link></td>
                                        <td><br></td>
                                    </tr>
                                    </tbody>
                                </template>
                            </v-simple-table>
                        </v-card>
                    </v-card>
                </section>
                <section class="fade-enter-active-1"
                         style="padding-bottom:30px; text-align: center; overflow: hidden; max-width: 1025px; margin: 0 auto; line-height:20px;">
                    <div style="text-align: left; margin-bottom: 10px;" max-width="1025" >
                        <br>
                        <span style="font-size: 28px; font-weight: bold; color: #e53935">｜</span>
                        <span style="font-size: 28px; font-weight: bold">취소수수료 안내</span>
                    </div>
                    <v-card class="mx-auto" style="text-align: left;" max-width="1025" outlined>
                        <v-card class="mx-auto bounce-enter-active-1" style="margin: 30px 70px 30px 70px; text-align: center;" max-width="87%" outlined>
                            <v-simple-table>
                                <template v-slot:default>
                                    <tbody>
                                    <tr v-for="item in cancelPolity" :key="item.name">
                                        <td>{{ item.condition1 }}</td>
                                        <td>{{ item.condition2 }}</td>
                                        <td>{{ item.Commission }}</td>
                                        <td>{{ item.refund }}</td>
                                    </tr>
                                    </tbody>
                                </template>
                            </v-simple-table>
                        </v-card>
                        <v-list-item style="margin: 30px 30px 30px 30px;">
                            <ul>
                                <li>- 취소수수료는 객실요금에 대한 취소 수수료이며, 객실 외 추가사항 또한 동일하게 적용됩니다.</li>
                                <li>- 모든 취소요청은 정상적인 취소승인 절차를 위하여 마이페이지 내의 취소 요청을 접수해주시기 바랍니다.</li>
                                <li>- 취소요청은 정상 영업일 기준 (월~금/ 10:00~17:00) 접수시에만 당일 처리됩니다.</li>
                                <li>- 토,일,공휴일 등 업무외 시간에 접수된 취소요청은 정상 영업일, 정상 영업시간까지 미뤄지니 주의 부탁드립니다.</li>
                                <li>- 취소수수료 차감 시점에 발생하는 모든 변경요청 또한 취소규정과 동일하게 적용됩니다.</li>
                                <li>예) 양도, 영문이름, 생년월일, 투숙인원수, 날짜, 룸타입, 투숙기간 등 의 모든 변경요청</li>
                            </ul>
                        </v-list-item>
                    </v-card>
                </section>
                <section class="fade-enter-active-1"
                         style="text-align: center; overflow: hidden; max-width: 1025px; margin: 30px auto; line-height:20px;">
                    <v-card class="mx-auto" style="text-align: center;" max-width="1025px" outlined>
                            <v-list-item style="margin: 30px 30px 30px 30px;">
                                <span style="font-size: 25px; font-weight: bold;">Extra Bed & PickUp</span>
                                <span style="width: 10px"></span>
                                <div class="my-2" v-on:click="isClick = !isClick">
                                    <v-btn small dark>View</v-btn>
                                </div>
                            </v-list-item>
                            <div v-show="isClick" style="text-align: center;">
                                <v-card class="mx-auto fade-enter-active-1" style="margin: 30px 70px 30px 70px; text-align: center;" max-width="87%" outlined>
                                    <v-simple-table>
                                        <template v-slot:default>
                                            <tbody>
                                            <tr style="background-color: rgba(0,0,0,0.1)">
                                                <td>항목</td>
                                                <td>성인/대당요금</td>
                                                <td>아동요금</td>
                                            </tr>
                                            <tr v-for="item in roomFeeInfoList" :key="item.name">
                                                <td align="left" style="margin-left: 30px">{{ item.list }}</td>
                                                <td>{{ item.adultFee }}</td>
                                                <td>{{ item.childFee }}</td>
                                            </tr>
                                            </tbody>
                                        </template>
                                    </v-simple-table>
                                </v-card>
                            </div>
                    </v-card>
                    <br>
                </section>
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
        window: 0,
        photoList: [
            hotelImg1,
            hotelImg2,
            hotelImg3,
            hotelImg4,
            hotelImg5
        ],
        params: {},
        isClick: false,
        cancelPolity: [
            {
                roomName: '바빌론',
                roomNameEn: 'Babylon',
                condition1: '숙박일로부터 29일 전',
                condition2: '2020/05/03 까지 취소 시',
                Commission: '차감 없음',
                refund: '전액 환불'
            },
            {
                condition1: '숙박일로부터 28일 전',
                condition2: '2020/05/04 부터 취소 시',
                Commission: '1박',
                refund: ''
            },
            {
                condition1: '숙박일로부터 22일 전',
                condition2: '2020/05/10 부터 취소 시',
                Commission: '100%',
                refund: ''
            }
        ],
        roomInfoList: [
            {
                roomId: 1,
                roomName: '바빌론',
                roomNameEn: 'Babylon',
                options: {
                    tax: false,
                    breakfast: true,
                    spa: false
                },
                fee: '528,000' + '/ 1박',
            },
            {
                roomId: 2,
                roomName: '2 베드룸 풀빌라',
                roomNameEn: '2 Bedroom Pool Villa',
                options: {
                    tax: false,
                    breakfast: true,
                    spa: true
                },
                fee: '807,000' + '/ 1박',
            },
            {
                roomId: 3,
                roomName: '3 베드룸 가든뷰 풀빌라',
                roomNameEn: '3 Bedroom Garden View Pool Villa',
                options: {
                    tax: true,
                    breakfast: true,
                    spa: true
                },
                fee: '892,000' + '/ 1박',
            }
        ],
        roomFeeInfoList: [
            {
                list: '1) 공항->호텔 편도픽업 (승용차1대/성인2인+아동1인기준/현지여행사제공)',
                adultFee: '19,000원',
                childFee: '0원',
            },
            {
                list: '2) 공항->호텔 편도픽업 (SUV1대/성인3인+아동1인기준/현지여행사제공)',
                adultFee: '23,000원',
                childFee: '0원',
            },
            {
                list: '3) 공항->호텔 편도픽업 (밴1대/최대 9인/현지여행사제공)',
                adultFee: '30,000원',
                childFee: '0원',
            },
            {
                list: '3베드룸 프라이빗 빌라 BBQ 6인 1회 (취소불가)',
                adultFee: '351,000원',
                childFee: '0원',
            },
            {
                list: '프라이빗 빌라 BBQ 인원 추가요금 (성인,아동 구분없음)',
                adultFee: '49,000원',
                childFee: '25,000원',
            }
        ]
}),
        name: 'hotelReserve',
        created() {
            this.$store.state.pageName = 'hotelReserve'
            this.$store.state.hotelNum = this.$route.params.hotelNum
        },
    }
</script>