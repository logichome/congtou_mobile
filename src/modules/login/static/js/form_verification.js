import { Toast  } from 'mint-ui';
export const verifyPhone = phone => {
  if(phone.length !== 11){
    Toast('手机号格式不正确')
  }
}