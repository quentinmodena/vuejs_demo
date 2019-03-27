import Vue from 'vue'

import Router from 'vue-router'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

import HelloWorld from '@/components/HelloWorld'
import Users from '@/components/Users'
import UsersFiche from '@/components/UsersFiche'

Vue.use(VueMaterial)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/users/:id',
      name: 'UsersFiche',
      component: UsersFiche
    }
  ]
})
