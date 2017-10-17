import axios from './interceptors'
import {API_ROOT} from './config'

export const getUserInfo = info => axios.get(API_ROOT + 'getuserinfo',{params:info})
