import AnButton from '../../buttom/'
import AnFormItem from '../../formitem/'
import AnInput from '../../input/'
import AnForm from '../'


export default {
    title: 'AnForm',
    component: AnForm
}

export const Form = () => ({
    components: { AnButton,AnFormItem,AnInput,AnForm },
    template: ` <An-form class="form" ref="form" :model="user" :rules="rules">
    <An-form-item label="用户名" prop="username">
      <!-- <An-input v-model="user.username"></An-input> -->
      <An-input :value="user.username" @input="user.username=$event" placeholder="请输入用户名"></An-input>
    </An-form-item>
    <An-form-item label="密码" prop="password">
      <An-input type="password" v-model="user.password"></An-input>
    </An-form-item>
    <An-form-item>
      <An-button type="primary" @click="login">登 录</An-button>
    </An-form-item>
  </An-form>`,
    data () {
      return {
        user: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            {
              required: true,
              message: '请输入用户名'
            }
          ],
          password: [
            {
              required: true,
              message: '请输入密码'
            },
            {
              min: 6,
              max: 12,
              message: '请输入6-12位密码'
            }
          ]
        }
      }
    },
    methods: {
      login () {
        console.log('button')
        this.$refs.form.validate(valid => {
          if (valid) {
            alert('验证成功')
          } else {
            alert('验证失败')
            return false
          }
        })
      }
    }
})