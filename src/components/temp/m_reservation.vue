<template>
    <div>
        <div id="booking">
            <div id="hotel-nav" class="txt-center">
                <a href="http://m.staynmore.com/hotel_list.php?local=LON">런던</a> &gt; <a
                    href="http://m.staynmore.com/hotel.php?local=LON&amp;hotel=653">두바이</a></div>

            <div class="calendar_info_wrap">
                <ul>
                    <li><span class="b"></span> 보너스나잇</li>
                    <li><span class="s"></span> 특가할인</li>
                    <li><span class="c"></span> 연박할인</li>
                    <li><span class="e"></span> 얼리버드할인</li>
                    <li><span class="w"></span> 대기</li>
                </ul>
            </div>
            <hr>

            <!-- search start -->
            <form id="affiliate_search_form"><input type="hidden" id="local" name="local" value="LON"><input
                    type="hidden" id="hotel" name="hotel" value="653"><input type="hidden" name="check_in"
                                                                             value="2020-04-11"><input type="hidden"
                                                                                                       name="check_out"
                                                                                                       value="2020-04-12"><input
                    type="hidden" name="booking_code"><input type="hidden" name="total_price"><input type="hidden"
                                                                                                     name="total_krw_price"><input
                    type="hidden" name="deadline"><input type="hidden" name="room_type_code"><input type="hidden"
                                                                                                    name="room_type"><input
                    type="hidden" name="affiliate_type"><input type="hidden" name="affiliate_hotel_id"><input
                    type="hidden" name="rooms[0][room_count]" value="1"><input type="hidden"
                                                                               name="rooms[0][adult_count]"
                                                                               value="2"><input type="hidden"
                                                                                                name="total_child_count"
                                                                                                value="0"><input
                    type="hidden" name="total_adult_count" value="2"></form>
            <form id="searchForm" name="searchForm" method="POST">
                <!--      <input type="hidden" id="local" name="local" value="LON">-->
                <!--      <input type="hidden" id="hotel" name="hotel" value="653">-->
                <input type="hidden" id="startday" name="startday" value="20200411">
                <input type="hidden" id="endday" name="endday" value="20200412">

                <input type="hidden" id="room" name="room" value="">
                <input type="hidden" id="promo" name="promo" value="">

                <input type="hidden" id="check_hotel" name="check_hotel" value="">
                <input type="hidden" name="adult_count">
                <div class="search_wrap">
                    <div>
                        <template>
                            <v-dialog ref="dialog" v-model="modal" :return-value.sync="dates" persistent
                                      width="290px">
                                <template v-slot:activator="{ on }">
                                  <v-row>
                                    <v-col style="padding-top:0px; padding-bottom:0px;">
                                      <v-text-field v-model="dates[0]" label="Check In" readonly v-on="on"></v-text-field>
                                    </v-col>
                                    <v-col style="padding-top:0px; padding-bottom:0px;">
                                      <v-text-field v-model="dates[1]" label="Check Out" readonly v-on="on"></v-text-field>
                                    </v-col>
                                  </v-row>
                                </template>
                                <v-date-picker v-model="dates" type="date" range no-title>
                                    <v-spacer></v-spacer>
                                    <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                                    <v-btn text color="primary" @click="$refs.dialog.save(dates)">OK</v-btn>
                                </v-date-picker>
                            </v-dialog>
                        </template>
                    </div>
<!--                    <div>-->
<!--                        <template>-->
<!--                            <v-row>-->
<!--                                <div class="date_wrap menu__activator">-->
<!--                                    <v-col cols="11" sm="5">-->
<!--                                        <v-dialog ref="dialog1" v-model="modal1" :return-value.sync="checkInDate" persistent-->
<!--                                                  width="290px">-->
<!--                                            <template v-slot:activator="{ on }">-->
<!--                                                <v-text-field v-model="checkInDate" label="Check In"-->
<!--                                                              readonly v-on="on"></v-text-field>-->
<!--                                            </template>-->
<!--                                            <v-date-picker v-model="checkInDate" type="date" scrollable>-->
<!--                                                <v-spacer></v-spacer>-->
<!--                                                <v-btn text color="primary" @click="modal1 = false">Cancel</v-btn>-->
<!--                                                <v-btn text color="primary" @click="$refs.dialog1.save(checkInDate)">OK</v-btn>-->
<!--                                            </v-date-picker>-->
<!--                                        </v-dialog>-->
<!--                                    </v-col>-->
<!--                                </div>-->
<!--                                <v-spacer></v-spacer>-->
<!--                                <div class="date_info">-->
<!--                                    <div class="text check-range-data">1박 2일</div>-->
<!--                                </div>-->
<!--                                <v-spacer></v-spacer>-->
<!--                                <div class="date_wrap menu__activator">-->
<!--                                    <v-col cols="11" sm="5">-->
<!--                                      <v-dialog ref="dialog2" v-model="modal2" :return-value.sync="checkOutDate" persistent-->
<!--                                                width="290px">-->
<!--                                        <template v-slot:activator="{ on }">-->
<!--                                          <v-text-field v-model="checkOutDate" label="Check Out"-->
<!--                                                        readonly v-on="on"></v-text-field>-->
<!--                                        </template>-->
<!--                                        <v-date-picker v-model="checkOutDate" type="date" scrollable>-->
<!--                                          <v-spacer></v-spacer>-->
<!--                                          <v-btn text color="primary" @click="modal2 = false">Cancel</v-btn>-->
<!--                                          <v-btn text color="primary" @click="$refs.dialog2.save(checkOutDate)">OK</v-btn>-->
<!--                                        </v-date-picker>-->
<!--                                      </v-dialog>-->
<!--                                    </v-col>-->
<!--                                </div>-->
<!--                            </v-row>-->
<!--                        </template>-->
<!--                    </div>-->
                    <!--                    <div>-->
                    <!--                        <template>-->
                    <!--                            <v-row>-->
                    <!--                                <div class="date_wrap menu__activator">-->
                    <!--                                    <v-col cols="11" sm="5">-->
                    <!--                                        <v-menu ref="menu" v-model="menu"-->
                    <!--                                                :return-value.sync="date" transition="scale-transition" offset-y-->
                    <!--                                                max-width="290px" min-width="290px">-->
                    <!--                                            <template v-slot:activator="{ on }">-->
                    <!--                                                <v-text-field v-model="dates[0]" readonly v-on="on"></v-text-field>-->
                    <!--                                            </template>-->
                    <!--                                            <v-date-picker no-title v-model="dates" width="290" class="mt-3" range>-->
                    <!--                                                <v-spacer></v-spacer>-->
                    <!--                                            </v-date-picker>-->
                    <!--                                        </v-menu>-->
                    <!--                                    </v-col>-->
                    <!--                                </div>-->
                    <!--                                <v-spacer></v-spacer>-->
                    <!--                                <div class="date_info">-->
                    <!--                                    <div class="text check-range-data">1박 2일</div>-->
                    <!--                                </div>-->
                    <!--                                <v-spacer></v-spacer>-->
                    <!--                                <div class="date_wrap menu__activator">-->
                    <!--                                    <v-col cols="11" sm="5">-->
                    <!--                                        <v-menu ref="menu" v-model="menu"-->
                    <!--                                                :return-value.sync="date" transition="scale-transition" offset-y-->
                    <!--                                                max-width="290px" min-width="290px">-->
                    <!--                                            <template v-slot:activator="{ on }">-->
                    <!--                                                <v-text-field v-model="dates[1]" readonly v-on="on"></v-text-field>-->
                    <!--                                            </template>-->
                    <!--                                        </v-menu>-->
                    <!--                                    </v-col>-->
                    <!--                                </div>-->
                    <!--                            </v-row>-->
                    <!--                        </template>-->
                    <!--                    </div>-->
                    <div id="room_info" style="height: 70%">
                        <div class="room" >
                          <v-row>
                            <v-col class="d-flex" style="padding-top:0px; padding-bottom:0px;">
                              <v-select :items="adultCnt" label="성인" ></v-select>
                            </v-col>
                            <v-col class="d-flex" style="padding-top:0px; padding-bottom:0px;">
                              <v-select :items="childCnt" label="아동"></v-select>
                            </v-col>
                          </v-row>
                          <div class="children_ages" style="margin-top: 10px"></div>
                        </div>
                      </div>
<!--                  <div id="room_info">-->
<!--                    <div class="room" style="float: left; margin: 20px 0 10px 0; width: 100%;">-->
<!--                      <div style="display: inline-block">-->
<!--                        <span class="font12">성인</span>-->
<!--                        <button type="button" onsubmit="return false" id="adultMinus" class="personButton">-->
<!--                          <i aria-hidden="true" class="v-icon mdi mdi-minus theme&#45;&#45;light" icon="mdi-minus"-->
<!--                             x-small></i>-->
<!--                        </button>-->
<!--                        <span class="adult_count" data-adult-count="2">2</span>-->
<!--                        <button type="button" onsubmit="return false" id="adultPlus" class="personButton">-->
<!--                          <i aria-hidden="true" class="v-icon mdi mdi-plus theme&#45;&#45;light" icon="mdi-plus"-->
<!--                             x-small></i>-->
<!--                        </button>-->
<!--                      </div>-->
<!--                      <div style="display: inline-block;margin-left: 24px;" class="children_infos">-->
<!--                        <span class="font12">아동</span>-->
<!--                        <button type="button" onsubmit="return false" id="childMinus" class="personButton">-->
<!--                          <i aria-hidden="true" class="v-icon mdi mdi-minus theme&#45;&#45;light" icon="mdi-minus"-->
<!--                             x-small></i>-->
<!--                        </button>-->
<!--                        <span class="child_count">0</span>-->
<!--                        <button type="button" onsubmit="return false" id="childPlus" class="personButton">-->
<!--                          <i aria-hidden="true" class="v-icon mdi mdi-plus theme&#45;&#45;light" icon="mdi-plus"-->
<!--                             x-small></i>-->
<!--                        </button>-->
<!--                      </div>-->
<!--                      <div class="children_ages" style="margin-top: 10px"></div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  &lt;!&ndash;        <button type="button" class="search" v-on:click="clickCalendar" style="border: 0px;&ndash;&gt;-->
                    <!--    background-color: #1d1d1d;-->
                    <!--    color: #fff;-->
                    <!--    width: 100%;-->
                    <!--    margin-top: 5vw;-->
                    <!--    padding: 2vw;-->
                    <!--    font-size: 5vw;">요금검색</button>-->
                    <div class="my-2">
                        <v-btn class="s-btn-white font-25vw" block color="medium" dark v-on:click="clickCalendar()"
                               style="width: 100%; border: 0px; margin-top: 5vw; padding: 2vw; font-size: 15px;" large>
                            요금 검색
                        </v-btn>
                    </div>
                </div>

            </form>
            <hr>
            <div class="txt-center" style="width:100%;padding:3vw 5vw 3vw 5vw;">
                <template>
                    <v-dialog v-model="dialog1">
                        <template v-slot:activator="{ on }">
                            <v-btn v-on="on" class="s-btn-white font-25vw" style="margin:0px 10px 10px 0px" outlined color="black" large>호텔규정 및
                                안내사항
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-title class="headline grey lighten-4" primary-title>
                                호텔규정 및 안내사항
                            </v-card-title>
                            <v-card-text>
                                <br/>
                                * 해당호텔의 호텔비는 제휴업체를 통한 실시간 확정상품입니다.<br/>
                            </v-card-text>
                            <v-divider></v-divider>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="medium" text v-on:click="dialog1 = false">닫기</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </template>
                <template>
                    <v-dialog v-model="dialog2">
                        <template v-slot:activator="{ on }">
                            <v-btn v-on="on" class="s-btn-white font-25vw" style="margin:0px 0px 10px 10px" outlined color="black" large>예약 전 주의사항
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-title class="headline grey lighten-4" primary-title>
                                예약전 주의사항
                            </v-card-title>
                            <v-card-text>
                                <br/>
                                * 해당호텔의 호텔비는 제휴업체를 통한 실시간 확정상품입니다.<br/>
                            </v-card-text>
                            <v-divider></v-divider>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="medium" text v-on:click="dialog2 = false">닫기</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </template>
            </div>
            <hr>

            <!-- affiliate room list -->
            <div class="block_wrap" style="padding: 0 5.5vw;">
                <h3 class="title">
                    제휴상품
                    <span style="font-size: 11px; margin: 0 5px; color: #167ec4;">(세금/봉사료 포함)</span>
                    <span>
                      <template>
                          <v-dialog v-model="dialog3" width="500">
                            <template v-slot:activator="{ on }">
                              <v-btn class="s-btn-white font-25vw" v-on="on" style="float:right; font-size:11px; margin:5px 0px 5px 0px;" outlined
                                     color="black" small>제휴상품 예약전 주의사항</v-btn>
                            </template>
                            <v-card>
                              <v-card-title class="headline red lighten-4" primary-title>
                                [제휴상품 예약전 주의사항]
                              </v-card-title>
                              <v-card-text>
                                    <br/>
                                    * 해당호텔의 호텔비는 제휴업체를 통한 실시간 확정상품입니다.<br/>
                                    * 제휴업체의 공급 특성상 객실요금 확인 페이지를 보여줌과 동시에 결제시한이 20분 이내로 자동 설정됩니다. <br/>
                                    20분이상 요금조회 페이지를 열어두는경우 결제시 오류 또는 해당 요금으로 결제가 불가 할 수 있으므로<br/>
                                    20분이내 예약 및 결제까지 완료해 주셔야합니다. <br/>
                                    * 제휴상품은 실시간으로 상품가 및 객실 가능여부 변동이 있을 수 있으며 상품가는 예약확정시점에 따라 확정됩니다.<br/>
                                    * 제휴상품은 전화상담시 실시간 확인이 어려울 수 있으며, 문의사항이 제한될 수 있습니다.<br/>
                              </v-card-text>
                              <v-divider></v-divider>
                              <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="medium" text v-on:click="dialog3 = false">닫기</v-btn>
                              </v-card-actions>
                            </v-card>
                          </v-dialog>
                      </template>
                    </span>
                </h3>
            </div>
            <div id="loading" style="display: none;">
                <!--      <img id="spinner" src="/mobile/images/spinner.gif">-->
            </div>
        </div>

        <!-- 달력 -->
        <div class="calendar_wrap" v-on:click="myCalendar"></div>

        <!-- Modal -->
        <div id="myModal" class="modal fade" role="dialog">
            <div class="modal-dialog">
                <!-- Modal content-->
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><i class="fas fa-times"></i></button>
                        <div style="margin: 0px 10px 0px 10px">
                            <div v-for="room in roomList" v-bind:key="room.id">
                                <div colspan='4' class='content_area' style='border-bottom:1px solid #dedede'>
                                    <span style="font-size: 12px;"> {{room[0]}} </span><br>
                                    <span style="font-size: 11px">조식 : {{room[1]}}</span><br>
                                    <span class='bold font14 no-bold'>{{room[3]}}원</span><span class="bold" style="font-size: 10px;">/1박</span>
                                    <span>
                                        <button class="s-btn-medium" style="font-size:13px; float:right; margin-right:7px;" outlined color="white"
                                               x-large>예약하기
                                        </button>
                                    </span><br>
                                    <span style="font-size: 11px;">무료취소기한 : {{room[2]}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-body">

                    </div>

                </div>
            </div>
        </div>

        <div id="wrap">
            <!--      <style>-->
            <!--        #wrap p  { !important margin-bottom:0px; }-->
            <!--      </style>-->
            <div id="bottom_wrap">
                <div id="bottom">
                    <div class="full-btn-bottom" style="margin-bottom: 10px;">
                        <span style="color: #fff !important; font-size: 3vw !important; ">모든 문의는 온라인 예약접수 후 상담이 가능합니다.<br>
                        상담시간 : 오전:10:00~12:30,
                          오후:14:00~16:00 <br>(토,일,공휴일 휴무)</span>
                    </div>
                    <v-btn class="s-btn-medium" style="font-size:13px; float:left" outlined color="white" x-large>
                        <v-icon></v-icon>
                        <i class="fa fa-phone fa-lg"></i>
                        고객센터  1544 - 8241
                    </v-btn>
                    <template>
                        <v-dialog v-model="dialog4">
                            <template v-slot:activator="{ on }">
                                <v-btn class="s-btn-medium" v-on="on" style="font-size:13px; float:right; margin-right:7px;" outlined color="white"
                                       x-large>개인정보보호방침
                                </v-btn>
                            </template>
                            <v-card>
                                <v-card-title class="headline grey lighten-4" primary-title>
                                    개인정보보호방침
                                </v-card-title>
                                <v-card-text>
                                    <div class="info_content">
                                        '_COMPANY_NAME'은(는) (이하 '회사'는)고객님의 개인정보를 중요시하며, "정보통신망 이용촉진 및 정보보호"에 관한 법률을 준수하고
                                        있습니다. 회사는 개인정보취급방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한
                                        조치가 취해지고 있는지 알려드립니다. 회사는 개인정보취급방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다.<br><br>

                                        본 방침은 : 2014 년 08 월 28 일 부터 시행됩니다.<br><br>

                                        <b>1, 수집하는 개인정보 항목</b><br><br>

                                        회사는 회원가입, 상담, 예약 서비스의 원활한 처리를 위해 아래와 같은 개인정보를 수집하고 있습니다.<br>
                                        * 수집항목 : 이름, 비밀번호, 휴대전화번호, 이메일, 여권번호, 여권만료일<br>
                                        * 개인정보 수집방법 : 홈페이지<br><br>

                                        <b>2, 개인정보의 수집 및 이용목적</b><br><br>

                                        회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.<br>
                                        * 예약상담 : 예약 내용 처리 및 전달<br>
                                        * 고객 관리 : 개인 식별, 불만처리 등 민원처리, 고지사항 전달<br><br>

                                        <b>3, 개인정보의 보유 및 이용기간</b><br><br>

                                        원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.<br>
                                        단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.<br>
                                        * 보존 항목 : 이름, 비밀번호, 휴대전화번호, 이메일 등<br>
                                        * 보존 근거 : 등록된 게시물의 수정,삭제시 필요<br>
                                        * 보존 기간 : 사이트 폐쇄시까지<br><br>

                                        <b>4, 개인정보 제3자 제공 및 공유</b><br><br>

                                        회사는 회원고객의 동의가 있거나 관련 법령의 규정에 의한 경우를 제외하고 어떠한 경우에도 "개인정보의 수집 및 이용목적" 에서 고지한 범위를
                                        넘어서거나, 해당되는 회원 서비스 영역과 무관한 타 기업/기관에 제공하거나 이용하지 않습니다. 단, 고객 서비스 수행에 직접적으로 관계되는
                                        업체에 한해서 제한적인 조건으로 개인정보가 제공되며 내용은 다음과 같습니다.<br><br>

                                        <table class="box_table">
                                            <tbody>
                                            <tr>
                                                <th colspan="2">숙박/행사수배</th>
                                            </tr>
                                            <tr>
                                                <td>제공받는자</td>
                                                <td>해외호텔 및 숙박업체</td>
                                            </tr>
                                            <tr>
                                                <td>제공항목</td>
                                                <td>영문성명/생년월일/긴급연락처(휴대폰)</td>
                                            </tr>
                                            <tr>
                                                <td>제공받는자의 이용목적</td>
                                                <td>숙박예약 및 확인</td>
                                            </tr>
                                            <tr>
                                                <td>보유및 이용기간</td>
                                                <td>서비스 및 법령에 따른 보존기간까지</td>
                                            </tr>

                                            <tr>
                                                <th colspan="2">여행자보험</th>
                                            </tr>
                                            <tr>
                                                <td>제공받는자</td>
                                                <td>AIG,동부화재</td>
                                            </tr>
                                            <tr>
                                                <td>제공항목</td>
                                                <td>성명,생년월일,성별,여권번호</td>
                                            </tr>
                                            <tr>
                                                <td>제공받는자의 이용목적</td>
                                                <td>여행자보험가입</td>
                                            </tr>
                                            <tr>
                                                <td>보유및 이용기간</td>
                                                <td>보험 가입이후 5년</td>
                                            </tr>
                                            </tbody>
                                        </table>

                                        단,다음의 경우에는 예외적으로 고객의 동의없이 개인정보를 제공할 수 있습니다.
                                        - 관계법령에 의하여 수사상의 목적으로 관계기관으로부터 요구가 있는 경우

                                        <br><br>

                                        <b>5, 개인정보의 파기절차 및 방법</b><br><br>

                                        회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.<br>
                                        파기절차 및 방법은 다음과 같습니다.<br><br>

                                        * 파기절차<br>
                                        -고객의 개인정보는 목적이 달성된 후 즉시 파기됩니다.<br>
                                        -동 개인정보는 법률에 의한 경우가 아니고서는 보유 이외의 다른 목적으로 이용되지 않습니다.<br><br>

                                        * 파기방법<br>
                                        -종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.<br>
                                        -전자적 파일 형태로 저장된 개인정보는 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.<br><br>

                                        <b>6, 개인정보 제공</b><br><br>

                                        회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.<br>
                                        - 이용자들이 사전에 동의한 경우<br>
                                        - 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우<br><br>

                                        <b>7, 수집한 개인정보의 위탁</b><br><br>

                                        회사는 고객님의 동의없이 고객님의 정보를 외부 업체에 위탁하지 않습니다. 향후 그러한 필요가 생길 경우, 위탁 대상자와 위탁 업무 내용에 대해
                                        고객님에게 통지하고 필요한 경우 사전 동의를 받도록 하겠습니다.<br><br>

                                        <b>8, 이용자 및 법정대리인의 권리와 그 행사방법</b><br><br>

                                        이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정,삭제 할 수 있으며 가입해지를 요청할 수도 있습니다. 이용자의 개인정보 조회
                                        및 수정,삭제를 위해서는 개인정보관리책임자에게 서면, 전화 또는 이메일로 연락하시면 지체없이 조치하겠습니다. 귀하가 개인정보의 오류에 대한
                                        정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 회사는 이용자의 요청에 의해 해지 또는 삭제된
                                        개인정보는 회사가 수집하는 개인정보의 보유 및 이용기간”에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고
                                        있습니다.<br><br>

                                        <b>9, 개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항</b><br><br>

                                        회사는 귀하의 정보를 수시로 저장하고 찾아내는 ‘쿠키(cookie)’ 등을 운용합니다.<br>
                                        쿠키란 회사의 웹사이트를 운영하는데 이용되는 서버가 귀하의 브라우저에 보내는 아주 작은 텍스트 파일로서 귀하의 컴퓨터 하드디스크에
                                        저장됩니다.<br>
                                        회사는 다음과 같은 목적을 위해 쿠키를 사용합니다.<br><br>

                                        ▶ 쿠키 등 사용 목적<br>
                                        이용자의 접속 빈도나 방문 시간 등을 분석, 방문 회수 파악 등<br><br>
                                        ▶쿠키 설정 거부 방법<br>
                                        예: 쿠키 설정을 거부하는 방법으로는 이용자는 사용하시는 웹 브라우저의 옵션을 선택함으로써 모든 쿠키를 허용하거나 쿠키를 저장할 때마다 확인을
                                        거치거나, 모든 쿠키의 저장을 거부할 수 있습니다.<br><br>

                                        * 설정방법<br>
                                        예(인터넷 익스플로어의 경우): 웹 브라우저 상단의 도구 &gt; 인터넷 옵션 &gt; 개인정보<br>
                                        단, 귀하께서 쿠키 설치를 거부하였을 경우 서비스 제공에 어려움이 있을 수 있습니다.<br><br>

                                        <b>10, 개인정보에 관한 민원서비스</b><br><br>

                                        회사는 고객의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 관련 부서 및 개인정보관리책임자를 지정하고
                                        있습니다.<br>
                                        * 개인정보관리책임부서 : 전산팀<br>
                                        * 개인정보관리책임자 : _PERSONAL_INFO_MANAGER<br>
                                        * 전화번호 : _PERSONAL_INFO_TEL<br>
                                        * 이메일 : _PERSONAL_INFO_MAIL<br>
                                        귀하께서는 회사의 서비스를 이용하시며 발생하는 모든 개인정보보호 관련 민원을 개인정보관리책임자 혹은 담당부서로 신고하실 수 있습니다. 회사는
                                        이용자들의 신고사항에 대해 신속하게 충분한 답변을 드릴 것입니다.<br><br>

                                        기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다. 1.개인분쟁조정위원회
                                        (www.1336.or.kr/1336)<br>
                                        2.정보보호마크인증위원회 (www.eprivacy.or.kr/02-580-0533~4)<br>
                                        3.대검찰청 인터넷범죄수사센터 (http://icic.sppo.go.kr/02-3480-3600)<br>
                                        4.경찰청 사이버테러대응센터 (www.ctrc.go.kr/02-392-0330)<br>
                                    </div>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="medium" text v-on:click="dialog4 = false">닫기</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </template>
                    <br>
                </div>
                <div style="margin-left:10px">
                    <div class="mb-10">
                        상호명 : (주)트래블멤버스 | 대표 : 임 진욱<br>
                        주소 : 서울시 중구 서소문로11길 50 신아빌딩 704호<br>
                        사업자등록번호 : 529-87-00026<br>
                        통신판매업신고번호 : 2017-서울중구-1429<br>
                        관광사업등록 : 제2017-000116호<br>
                        제 100-000-2019 0398 7819호 (서울보증보험)<br>
                        고객센터 : 1544-8241<br>
                        개인정보관리 : 안병열<br>
                    </div>
                    <span class="copyright">CopyRights(c)2015 Staynmore All Rights Reserved.</span>
                    <div class="mt-5">
                        <button onclick="location.href='http://staynmore.com/index.php?pccheck=topc&amp;hotel='"
                                class="s-btn" style="border:1px solid #fff;">PC 버전
                        </button>
                    </div>
                </div>
                <br>
            </div>
        </div>
        <div id="bottom_btn">
            <ul>
                <li><a href="javascript:history.back();"><img src="../../mobile/images/bottom_left.png"></a></li>
                <li>
                    <div class="bookbtn_hide">예약하기</div>
                </li>
                <li id="top-btn"><a href="javascript:;"><img src="../../mobile/images/bottom_top.png"></a></li>
            </ul>
            <div id="bookbox">
                <div class="mb-10">호텔을 먼저 선택해 주세요.</div>
                <select id="footer_local" name="footer_local">
                    <option value="">지역선택</option>
                    <option value="HNL">하와이</option>
                    <option value="PQC">푸꾸옥</option>
                    <option value="CXR">나트랑</option>
                    <option value="DAD">다낭</option>
                    <option value="AX3">호이안</option>
                    <option value="MUI">무이네</option>
                    <option value="HAN">하노이</option>
                    <option value="SGN">호치민</option>
                    <option value="SPN">사이판</option>
                    <option value="GUM">괌</option>
                    <option value="DPS">발리</option>
                    <option value="BKK">방콕</option>
                    <option value="KHL">카오락</option>
                    <option value="HKT">푸켓</option>
                    <option value="USM">코사무이</option>
                    <option value="KBV">끄라비</option>
                    <option value="CNX">치앙마이</option>
                    <option value="PTY">파타야</option>
                    <option value="HUA">후아힌</option>
                    <option value="BKI">코타키나발루</option>
                    <option value="KUL">쿠알라룸프루</option>
                    <option value="CCN">칸쿤2</option>
                    <option value="CUN">칸쿤</option>
                    <option value="LON" selected="">런던</option>
                    <option value="BER">베를린</option>
                    <option value="ROR">팔라우</option>
                    <option value="HLT">해밀턴 아일랜드</option>
                    <option value="SYD">시드니</option>
                    <option value="HKG">홍콩</option>
                    <option value="MFM">마카오</option>
                    <option value="TAO">칭다오</option>
                    <option value="SHA">상해</option>
                    <option value="SYX">하이난</option>
                    <option value="OKA">오키나와</option>
                    <option value="UKY">교토</option>
                    <option value="NRT">도쿄</option>
                    <option value="KMI">미야자키</option>
                    <option value="CEB">세부</option>
                    <option value="KLO">보라카이</option>
                    <option value="TAG">보홀</option>
                    <option value="MNL">마닐라</option>
                    <option value="ELD">엘니도</option>
                    <option value="REP">시엠립</option>
                    <option value="PAR">파리</option>
                    <option value="EVI">에비앙 레 뱅</option>
                    <option value="IBZ">이비자</option>
                    <option value="BRU">브루나이</option>
                    <option value="TPE">타이페이</option>
                    <option value="SIN">싱가포르</option>
                    <option value="MAL">몰디브</option>
                    <option value="DXB">두바이</option>
                </select>
                <br><br>
                <select id="footer_hotel" name="footer_hotel">
                    <option value="">호텔선택</option>
                    <option value="652">베스트 웨스턴</option>
                    <option value="653">두바이</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
    import response from '../../dummyData'

    export default {
        data: function () {
            return {
                response: response,
                dialog1: false,
                dialog2: false,
                dialog3: false,
                dialog4: false,
                date: null,
                checkInDate: null,
                checkOutDate: null,
                menu: false,
                modal: false,
                modal2: false,
                menu2: false,
                dates: [ ],
                adultCnt:[0,1,2,3,4,5,6,7,8],
                childCnt:[0,1,2,3,4],
                roomList: [ ]
            }
        },
        computed: {
            dateRangeText() {
                return this.dates.join(' ~ ')
            },
        },
        methods: {
            myCalendar: function () {
                alert('test1111')
            },
            clickCalendar: function () {
                console.log(response)
                this.roomList = this.response.data
            }
        }
    }
</script>

<style>

</style>
