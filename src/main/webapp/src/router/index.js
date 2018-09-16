import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import Message from '../pages/message/Message'
import Search from '../pages/search/Search'
import Community from '../pages/community/Community'
import MessageDep from "../pages/message/components/Dep"
import MessageAct from "../pages/message/components/Act"
import MessageClub from "../pages/message/components/Club"
import MessageRenew from "../pages/message/components/Renew"
import MessageFire from "../pages/message/components/Fire"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/message',
      name: 'Message',
      component: Message,
      children:[{
          path: '/message/dep',
          name: 'MessageDep',
          component: MessageDep,
      },
      {
        path: '/message/act',
        name: 'MessageAct',
        component: MessageAct,
      },
      {
        path: '/message/club',
        name: 'MessageClub',
        component: MessageClub,
      },
      {
        path: '/message/renew',
        name: 'MessageRenew',
        component: MessageRenew,
      },
      {
        path: '/message/fire',
        name: 'MessageFire',
        component: MessageFire,
      },
    ]
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
    },
    {
      path: '/community',
      name: 'Community',
      component: Community,
    },
  ]
})
