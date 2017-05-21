import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Fenlei from '@/components/fenlei/fenlei'
import Mes from '@/components/mes/mes'
import Personal from '@/components/personal/personal'
import More from '@/components/more/more'
import Cameraman from '@/components/cameraman/cameraman'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/fenlei',
      name: 'fenlei',
      component: Fenlei
    },
    {
      path: '/mes',
      name: 'mes',
      component: Mes
    },
    {
      path: '/personal',
      name: 'personal',
      component: Personal
    },
    {
      path: '/more',
      name: 'more',
      component: More
    },
    {
      path: '/cameraman',
      name: 'cameraman',
      component: Cameraman
    }

  ]
})
