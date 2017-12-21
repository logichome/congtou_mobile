import living from '@/modules/home/components/living.vue'
import notice from '@/modules/home/components/notice.vue'
import noticeDetail from '@/modules/home/components/notice_detail.vue'

export default [
  {
    path: '/main/home/living',
    component: living,
  },
  {
    path: '/main/home/notice',
    component: notice,
  },
  {
    path: '/main/home/notice_detail',
    component: noticeDetail,
  },
]