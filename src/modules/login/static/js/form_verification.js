import { Toast  } from 'mint-ui';

//手机号验证
export const verifyPhone = phone => {
  if(!/^1\d{10}$/.test(phone)){
    Toast('手机号格式不正确')
    return false
  } else {
    return true
  }
}

//验证码验证
export const verifyCode = code => {
  if(!/^[0-9]{4}$/.test(code)){
    Toast('验证码格式不正确')
    return false
  } else {
    return true
  }
}

//密码验证
export const verifyPassword = password => {
  if(!/^[a-zA-Z\d_]{8,16}$/.test(password)){
    Toast('密码格式不正确')
    return false
  } else {
    return true
  }
}