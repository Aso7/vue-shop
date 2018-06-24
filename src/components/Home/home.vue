<template>
    <div class="box">
        <header>
            <img src="../../../static/images/logo.png" alt="" class="img1">
            <div class="home_head">
                <b></b>
                <input type="text" placeholder="请输入您要购买的商品" @click="goSearch">
            </div>
            <a>
                <img src="../../../static/images/shop.png" alt="">
                <span>店铺</span>
            </a>
            <a>
                <img src="../../../static/images/shop.png" alt="">
                <span>消息</span>
            </a>
        </header>
        <section class="content" @scroll="onScrollFn" ref="content">
            <div class="home_top" ref="home_top">
                <Swipe/>
                <Item_icon/>
            </div>
            <div class="day" ref="day">
                <b class="iconfont icon-qian"></b>
                <h3>天天特惠
                    <span>每天都有惊喜</span>
                </h3>
                <a>更多></a>
            </div>
            <div class="food" ref="food">
                <div class="left">
                    <img src="../../../static/images/home_02.png" alt="">
                </div>
                <div class="right">
                    <img src="../../../static/images/home_04.png" alt="">
                    <img src="../../../static/images/home_06.png" alt="">
                </div>
            </div>
            <div class="day1" ref="day1">
                <i></i>
                <span>
                    <b class="iconfont icon-wan"></b>家乡味道</span>
                <a>更多></a>
            </div>
            <div class="list" ref="list">
                <ul>
                    <li v-for="(item,index) in list" :key="index">
                        <Goodsitem :instance="$refs.altCart" v-bind:data="item"></Goodsitem>
                    </li>
                </ul>
                <p>{{tips}}</p>
            </div>
            <div class="backTop" @click="backTop">▲</div>
            <Toast ref="altCart"></Toast>
        </section>
        
    </div>
</template>
<script>
import Swipe from "../swipe"
//import Index from "../index"
import Item_icon from "./icon"
import Goodsitem from "./goodsitem"
export default {
    name: "home",
    data() {
        return {
            list: [],
            flag: true,
            page:1,
            tips:"正在为您加载更多数据..."
        }
    },
    components: {
        Swipe,
        //Index,
        Item_icon,
        Goodsitem
    },
    mounted() {
        this.$http.get(`/api/index/recommend.action?page=${this.page}`).then(res => {
            this.list = JSON.parse(JSON.parse(res).recommend).wareInfoList
        })
        // this.$http.post(`/api/user/login`,{
        //     name:"jacky"
             
        // }).then(res=>{
        //     console.log(res)
        // })
    },
    methods: {
        goSearch() {
            this.$router.push({
                name: "search"
            })
        },
        backTop(){
            
        },
        onScrollFn() {
            let winH = this.$refs.content.offsetHeight;
            let docH = this.$refs.home_top.offsetHeight + this.$refs.day.offsetHeight + this.$refs.food.offsetHeight + this.$refs.day1.offsetHeight
                + this.$refs.list.offsetHeight;
            let scrollH = this.$refs.content.scrollTop;
            console.log(winH, docH, scrollH)
            if (docH - winH - scrollH < 30 && this.flag) {
                this.page++;
                //console.log("接近底部")
                this.flag = false
                this.$http(`/api/index/recommend.action?page=${this.page}`).then(res => {
                    if(res.code===1000){
                        this.tips = "别碰我底线"
                    }else{
                        this.list = [
                        ...this.list,
                        ...JSON.parse(JSON.parse(res).recommend).wareInfoList
                        ]
                    }    
                    this.flag = true
                })
            }
        }
    }
}
</script>
<style>
.backTop{
    width: .4rem;
    height: .5rem;
    border:.01rem solid #ccc;
    position: fixed;
    bottom:.5rem;
    right:0;
    text-align: center;
    line-height: .5rem;
    font-size: .3rem;
    background:red;
    color:#fff
}
.list{
    float: left;
    margin-top: .05rem;
}
.list,.list ul{
    width: 100%;
    background:#fff;
}
.list ul{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap
}
.list li{
    width: 50%;
    border-bottom: .01rem solid #ccc;
}
.list li:nth-child(odd){
    border-right: .01rem solid #ccc;
}
.list ul li dl{
    width: 100%;
}
.list dl{
    padding: .1rem;
}
.list dl dt{
    width: 100%;
    text-align: center
}
.list dl dd{
    width: 100%;
}
.list dl dd p{
    /*width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;*/
    width: 100%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-size: .13rem;
}
.list dl dd p:nth-child(2){
    margin-top: .1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.list dl dd span i{
    color: red;
    font-size: .2rem
}
.list dl dd span:nth-child(2){
    color:orangered;
}
.list dl dt img{
    width: 70%;
    height: 80%;
}
header {
    width: 100%;
}

header .img1 {
    width: 15%;
    height: 80%;
    float: left;
    margin: .08rem;
}

header .home_head {
    width: 52%;
    height: 80%;
    float: left;
    background: #eee;
    margin-top: .05rem;
    border-radius: .08rem;
}

.home_head input {
    border: 0;
    outline: 0;
    background: #eee;
    line-height: .3rem;
    text-align: center;
    border-radius: .08rem;
}

header a {
    display: inline-block;
    width: 14%;
    float: left;
    display: flex;
    justify-content: center;
    align-items: cenetr;
    flex-direction: column;
    text-align: center;
    margin-top: .05rem;
    ;
}

header a img {
    width: 40%;
    text-align: center;
    margin-left: .14rem;
}

header a span {
    font-size: .11rem!important
}

.day {
    width: 100%;
    margin: .1rem 0;
    background: #fff;
    padding: .1rem;
}

.day b {
    display: inline-block;
    width: 8%;
    height: .24rem;
    color: darkorange;
    border: .01rem solid darkorange;
    border-radius: 50%;
    text-align: center;
    line-height: .24rem;
    float: left;
}

.day h3 {
    width: 77%;
    float: left;
    font-size: .16rem;
    color: darkorange;
    font-weight: normal;
    margin-left: .05rem;
    line-height: .22rem;
}

.day h3 span {
    font-size: .14rem;
    padding-left: .1rem;
}

.day a,
.day1 a {
    font-size: .14rem!important;
}

.day1 {
    float: left;
    width: 100%;
    margin: .08rem 0;
    background: #fff;
    padding: .1rem;
    position: relative;
}

.day1 i {
    display: inline-block;
    width: 10%;
    height: .01rem;
    background: darkorange
}

.day1 b {
    text-align: center;
    line-height: .24rem;
    color: darkorange;
    display: inline-block;
    width: 12%;
    height: .24rem;
    border-radius: 50%;
    border: .01rem solid darkorange;
}

.day1 span {
    display: inline-block;
    width: 67%;
    text-align: center;
    color: darkorange;
    font-size: .17rem!important;
}

.day1 a {
    position: absolute;
    right: .15rem
}

.food {
    width: 100%;
    height: auto;
    background: #eee;
    float: left;
}

.food .left {
    width: 49%;
    float: left;
}

.left img {
    width: 100%;
}

.food .right {
    width: 48%;
    float: left;
    margin-left: 2%;
}

.right img {
    width: 100%;
}

.right img:nth-child(2) {
    padding-top: .06rem;
}
</style>
