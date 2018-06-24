<template>
    <div class="box">
        <header>
            <a @click="goback"><</a>
            <a>设置</a>
            <a></a>
        </header>
        <div class="setMess">
            <ul>
                <li>
                    <span>我的头像</span>
                    <span>></span>
                </li>
                <li>
                    <span>用户名</span>
                    <span>></span>
                </li>
                <li>
                    <span>我的二维码名片</span>
                    <span>></span>
                </li>
            </ul>
            <button>退出登录</button>
        </div>
    </div>
</template>
<script>
    export default{
        name:'set',
        methods:{
            goback(){
                this.$router.push({
                    name:"myself"
                })
            }
        }
    }
</script>
<style>
header a:nth-child(1){
    padding-left: .1rem;
    font-size: .2rem
}
header a:nth-child(2){
    text-align: center
}
header a{
    display: inline-block;
    width: 32%;
    line-height: .4rem;
}
.setMess,.setMess ul{
    width: 100%;
    margin-top: .05rem;
}
.setMess ul{
    background:#fff
}
.setMess ul li{
    width: 90%;
    margin-left: 5%;
    padding: .1rem 0;
    border-bottom: .01px solid #ccc;
    display: flex;
    justify-content: space-between;
}
.setMess ul li span:nth-child(2){
    font-size:.2rem!important
}
.setMess button{
    width: 80%;
    margin-left: 10%;
    line-height: .4rem;
    background:red;
    color: #fff;
    border-radius: .2rem;
    border: .01rem solid red;
    outline: 0;
    margin-top: 20%;
}
</style>
