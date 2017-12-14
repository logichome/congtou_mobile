import main from '@/modules/main/components/main.vue'
import home from '../modules/home/components/home.vue'
import homeChildren from './home'
import community from '../modules/community/components/community.vue'
import message from '../modules/message/components/message.vue'
import me from '../modules/me/components/me.vue'

export default [
  {
    path: '/main',
    name: 'main',
    component: main,
    children:[
      ...homeChildren,
      {
        path: '',
        redirect:'home'
      },
      {
        path: 'home',
        name: 'home',
        component: home
      },
      {
        path: 'community',
        name: 'community',
        component: community,
      },
      {
        path: 'message',
        name: 'message',
        component: message,
      },
      {
        path: 'me',
        name: 'me',
        component: me,
      }
    ]
  }
]