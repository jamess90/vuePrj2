import Vue from 'vue'
import VueRouter from 'vue-router'
import HotelOnly from '../components/temp/hotelonly'
import mReserve from '../components/temp/m_reservation'
import hotelDetail from '../components/hotelDetail'
import hotelReserve from '../components/hotelReserve'
import Home from '../components/home'
import NotFound from '../components/temp/notFound'
import datepickermodal from '../components/datepickermodal'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/hotelonly', component: HotelOnly },
    { path: '/mReserve', component: mReserve },
    { path: '/datepickermodal', component: datepickermodal },
    { path: '/hotelDetail/hotelNum/:hotelNum', component: hotelDetail},
    { path: '/hotelReserve/hotelNum/:hotelNum', component: hotelReserve},
    { path: '*', component: NotFound }
  ],
  scrollBehavior() {
    return {x: 0, y: 0}
  }
})

export default router
