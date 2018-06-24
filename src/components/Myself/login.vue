<template>
    <div class="login">
        <h1>登录
            <span @click="goRegister">去注册</span>
        </h1>
        <p>
            <label for="user">用户名</label><input type="text" v-model="user" id="user" placeholder="请输入手机号"></p>
        <p>
            <label for="pwd">密码</label><input type="password" v-model="pwd" id="pwd" placeholder="请输入密码"></p>
        <p>
            <button @click="goLogin">登录</button>
        </p>
    </div>
</template>
<script>
import { setCookie } from "../../utils/utils.js"
export default {
    data() {
        return {
            user: '',
            pwd: ''
        }
    },
    methods: {
        goRegister() {
            this.$router.push({
                name: "register"
            })
        },
        goLogin() {
            let reg1 = /^1[3578]\d{9}$/;
            if (!reg1.test(this.user)) {
                alert("请输入正确的手机号")
                return
            }
            let reg2 = /\d{6,}/;
            if (!reg2.test(this.pwd)) {
                alert("请输入正确格式的密码")
                return
            }
            if (!this.user || !this.pwd) {
                alert("请填写所有信息")
                return
            }
            this.$http.post("/api/user/login", {
                user: this.user,
                pwd: this.pwd
            }).then(res => {
                if (res.code == 1) {
                    setCookie('token', res.token)
                    document.cookie = `token=${res.token}`
                    this.$router.push({
                        name: this.$route.query.from || 'home'
                    })
                } else {
                    alert("请确认密码或用户名")
                }

            })
        }
    },
    mounted() {
        console.log(this.$route)
        //document.cookie = `classname=1122`
    }
}
</script>
<style scoped>
.login {
    width: 100%;
    height: 100%;
    background: #fff
}

.login h1 {
    line-height: .4rem;
    text-align: center;
    border-bottom: .01px solid #eee;
    font-size: .16rem
}

.login p {
    width: 80%;
    margin-left: 10%;
    line-height: .5rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.login p label {
    width: 30%;
}

.login p input {
    width: 70%;
    height: .3rem;
    outline: none;
    border-radius: .05rem;
    border: .01rem solid #ccc
}

.login p button {
    width: 100%;
    height: .3rem;
    margin-top: .5rem;
}
</style>
