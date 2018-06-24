<template>
    <div class="register">
        <h1>注册</h1>
        <p><label for="user">用户名</label><input v-model="user" type="text" id="user"></p>
        <p><label for="pwd">密码</label><input v-model="pwd" type="password" id="pwd"></p>
        <p><label for="surePwd">确认密码</label><input v-model="surePwd" type="password" id="surePwd"></p>
        <p><button @click="goRegister">注册</button></p>
    </div>
</template>
<script>
//import {required,minLength} from "vuelidate"
    export default{
        data(){
            return{
                user:'',
                pwd:'',
                surePwd:''
            }
        },
       
        methods:{
            goRegister(){
                let reg1 = /^1[3578]\d{9}$/;
                if(!reg1.test(this.user)){
                    alert("请输入正确的手机号")
                    return
                }
                let reg2 = /\d{6,}/;
                if(!reg2.test(this.pwd)){
                    alert("请输入正确格式的密码")
                    return
                }
                if(this.pwd !== this.surePwd){
                    alert("前后密码不一致")
                    return
                }
                if(!this.user || !this.pwd || !this.surePwd){
                    alert("请填写所有信息")
                    return
                }
                this.$http.post("/api/user/register",{
                    user:this.user,
                    pwd:this.pwd
                }).then(res=>{
                    console.log(res)
                    if(res.code == 1){
                        this.$router.push({
                            name:'login'
                        })
                    }
                })
            }
        }
    }
</script>
<style scoped>
.register{
    width: 100%;
    height: 100%;
    background:#fff
}
.register h1{
    line-height: .4rem;
    text-align: center;
    border-bottom: .01px solid #eee ;
    font-size: .16rem
}
.register p{
    width: 80%;
    margin-left: 10%;
    line-height: .5rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.register p label{
    width: 30%;
}
.register p input{
    width: 70%;
    height: .3rem;
    outline: none;
    border-radius:.05rem;
    border: .01rem solid #ccc
}
.register p:nth-child(4){
    border-radius: .1rem;
}
.register p button{
    width: 100%;
    height: .3rem;
    margin-top: .5rem;
    background:red;
    color: #fff;
    border: .01rem solid red;
    border-radius: .1rem;
}
</style>
