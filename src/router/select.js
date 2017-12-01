import selectCommunity from '../modules/select/components/select_community.vue'
import selectCity from '../modules/select/components/select_city.vue'
import searchCommunity from '../modules/select/components/search_community.vue'

export default [{
  path: '/select_community',
  name: 'selectCommunity',
  component: selectCommunity
},{
  path: '/select_community/select_city',
  name: 'selectCity',
  component: selectCity
},{
  path: '/select_community/search_community',
  name: 'searchCommunity',
  component: searchCommunity
}]