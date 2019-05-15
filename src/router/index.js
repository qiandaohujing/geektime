import {
  BaseRouter
} from "@/router/base"
import Home from '../components/Home'
import Vue from 'vue'
import Router from 'vue-router'
import vmodelRouter from '../components/1.2/router';
import vslotRouter from '../components/1.1/router';

Vue.use(Router)

const HomeRouter = [
  new BaseRouter('/Home', Home, 'Home', '主页')
]

export default new Router({
  base: '/',
  mode: 'history',
  routes: [{
      path: '/',
      redirect: '/Home'
    },
    ...HomeRouter,
    ...vslotRouter,
    ...vmodelRouter,
  ]
})