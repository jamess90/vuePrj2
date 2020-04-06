import Vue from 'vue'
import VueRouter from 'vue-router'
import HotelOnly from '../components/temp/hotelonly'
import mReserve from '../components/temp/m_reservation'
import hotelDetail from '../components/hotelDetail'
import Home from '../components/home2'
import NotFound from '../components/temp/notFound'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/hotelonly', component: HotelOnly },
    { path: '/mReserve', component: mReserve },
    { path: '/hotelDetail/hotelNum/:hotelNum', component: hotelDetail },
    { path: '*', component: NotFound }
  ],
  scrollBehavior() {
    return {x: 0, y: 0}
  }
})

export default router
