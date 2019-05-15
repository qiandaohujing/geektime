import Vue from 'vue'
import Router from 'vue-router'
// import login from '../components/1.1/login'
import vmodelRouter from '../components/1.2/router';
import vslotRouter from '../components/1.1/router';

Vue.use(Router)

export default new Router({
  base: '/',
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/vslot'
    },
    ...vslotRouter,
    ...vmodelRouter,
  ]
})