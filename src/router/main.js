import main from '@/modules/main/components/main.vue'
import home from '../modules/home/components/home.vue'

export default [
  {
    path: '/main',
    name: 'main',
    component: main,
    children:[
      {
        path: '',
        redirect:'home'
      },
      {
        path: 'home',
        name: 'home',
        component: home,
      }
    ]
  }
]