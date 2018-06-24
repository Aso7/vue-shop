<template>
    <div class="box">
        <header>
            <a class="iconfont icon-shezhi" @click="set"></a>
            <a>我的717商城</a>
            <a class="iconfont icon-xiaoxi" @click="news"></a>
        </header>
        <section>
            <div class="mineTop">
                <b><img src="../../../static/images/head.jpg" alt=""></b>
                <span>大北呀</span>
            </div>
            <div class="myShop">
                <b class="iconfont icon-shangpu"></b>
                <span>我的店铺</span>
                <i>></i>
            </div>
            <allStatus></allStatus>
            <allMsg></allMsg>
            <div class="hot">
                <h2>热门推荐</h2>
            </div>
        </section>
    </div>
</template>
<script>
import allMsg from "./allMsg"
import allStatus from "./allStatus"
    export default{
        name:'',
        components:{
            allMsg,
            allStatus
        },
        methods:{
            set(){
                this.$router.push({
                    name:'set'
                })
            },
            news(){
                this.$router.push({
                    name:"news"
                })
            }
        }
    }
</script>
<style>
.hot{
    width: 100%;
    margin-top: .05rem;
    background:#fff
}
.hot h2{
    text-align: center;
    line-height: .4rem;
    font-weight: normal;
    font-size: .15rem
}
.myShop{
    width: 100%;
    background:#fff;
    padding: .1rem;
    border-bottom: .01px solid #eee;
    position: relative;
}
.myShop span{
    font-size: .15rem!important;
    color: red;
} 
.myShop i{
    position: absolute;
    right:5%;
    top:40%;
    font-size: .2rem;
    color:red;
}
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
header a{
    line-height: .4rem;
    font-size: .15rem
}
header a:nth-child(1){
    text-align: left;
    padding-left: .1rem;
}
header a:nth-child(2){
    text-align: center;
}
header a:nth-child(3){
    text-align: right;
    padding-right: .1rem;
}
.mineTop{
    width: 100%;
    height: 20%;
    background:url(../../../static/images/mine.png) center center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.mineTop b{
    display: inline-block;
    width: 15%;
    height: 60%;
    border-radius: 50%
}
.mineTop b img{
    width: 100%;
    border-radius: 50%
}
.mineTop span{
    color:#fff;
    font-size: .13rem
}
</style>
