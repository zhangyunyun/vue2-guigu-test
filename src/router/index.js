import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '../views/index/Index'
import Comment from '../views/index/comment/Comment'
import Todo from '../views/index/todo/Todo'
import List from '../views/index/list/List'
import ListDetail from '../views/index/list/detail'
import Routing from '../views/index/routing/routing'
import About from '../views/index/routing/about'
import Info from '../views/index/routing/info'
import News from '../views/index/routing/news'
import Messages from '../views/index/routing/messages'
import MessagesDetail from '../views/index/routing/components/messageDetail'

import State from '../views/index/state/state'

import Business from '../views/index/business/business'
import Client from '../views/index/client/client'
import Acquired from '../views/index/acquired/acquired'

import All from '../views/all/All'

import Search from '../views/search/Search'

const routes = [
  {
    path:'',
    redirect:'/home',
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/comment',
    component:Comment
  },
  {
    path:'/todo',
    component:Todo
  },
  {
    path:'/list',
    component:List
  },
  {
    path:'/detail',
    component:ListDetail
  },
  {
    path: '/all',
    component: All,
  },
  {
    path: '/search',
    component: Search,
  },
  {
    path: '/routing',
    component: Routing,
    children:[
      {
        path:'',
        redirect:'/about',
      },
      {
        path: '/about',
        component: About
      },
      {
        path: '/info',
        component: Info,
        children:[
          {
            path:'',
            redirect:'/info/news',
          },
          {
            path: '/info/news',
            component: News
          },
          {
            path: '/info/messages',
            component: Messages,
            children:[
              {
                //path: '/info/messages/detail/:id', //params方式
                path: '/info/messages/detail/', //query方式
                component: MessagesDetail
              }
            ]
          }
        ]
      },
    ]
  },
  {
    path: '/state',
    component: State,
  },
  {
    path: '/business',
    component:Business,
    meta:{
      Footer:false
    }
  },
  {
    path: '/client',
    component:Client,
    meta:{
      Footer:false
    }
  },
  {
    path: '/acquired',
    component:Acquired,
    meta:{
      Footer:false
    }
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass:'on'
})

export default router
