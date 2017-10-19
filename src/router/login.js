import login from '@/modules/login/components/login'
import passwordLogin from '@/modules/login/components/password_login'
import register from '@/modules/login/components/register'
import inviteRegister from '@/modules/login/components/invite_register'
import registerBindPhone from '@/modules/login/components/register_bind_phone'
import resetPassword from '@/modules/login/components/reset_password'
import completeInfo from '@/modules/login/components/complete_info'

export default [{
  path: '/login',
  name: 'login',
  component: login
},
{
  path: '/login/password_login',
  component: passwordLogin
},
{
  path: '/login/register',
  component: register
},
{
  path: '/login/invite_register',
  component: inviteRegister
},
{
  path: '/login/register_bind_phone',
  component: registerBindPhone
},
{
  path: '/login/reset_password',
  component: resetPassword
},
{
  path: '/login/complete_info',
  component: completeInfo
}]