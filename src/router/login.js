import login from '@/modules/login/components/login'
import passwordLogin from '@/modules/login/components/password_login'
import register from '@/modules/login/components/register'
import inviteRegister from '@/modules/login/components/invite_register'

export default [{
  path: '/login',
  name: 'login',
  component: login
},
{
  path: '/password_login',
  name: 'passwordLogin',
  component: passwordLogin
},
{
  path: '/register',
  name: 'register',
  component: register
},
{
  path: '/invite_register',
  name: 'inviteRegister',
  component: inviteRegister
}]