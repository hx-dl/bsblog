import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
import MyArticle from './views/article/MyArticle.vue'
import User from './views/user/index.vue'
import Login from './views/login/Index.vue'
import Manage from './views/manage/Manage.vue'
import Edit from './views/manage/Edit.vue'

Vue.use(Router)
var router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/article',
      name: 'MyArticle',
      component: MyArticle
    },
    {
      path: '/manage',
      name: 'Manage',
      component: Manage
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit
    }
  ]
})

export default router
