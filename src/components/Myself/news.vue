<template>
    <div class="news">
        <div class="newsHead">
            <a @click="goMyself"><</a>
            <a>消息</a>
            <a></a>
        </div>
        <div class="newsList">
           <dl v-for="(item,index) in newsList" :key="index">
               <dt class="iconfont" :class="item.icons" :style="{background:item.styles}"></dt>
               <dd>
                   <p>
                       <b>{{item.title}}</b>
                       <span>{{item.time}}</span>
                   </p>
                   <p>{{item.alt}}</p>
               </dd>
           </dl>
        </div>
    </div>
</template>
<script>
    export default{
        name:'news',
        data(){
            return{
                newsList:[
                    {
                        "title":"订单物流信息",
                        "time":"2017/2/27",
                        "alt":"啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦",
                        "styles":"#64bcff",
                        "icons":"icon-che2"
                    },
                    {
                        "title":"优惠促销",
                        "time":"2017/3/19",
                        "alt":"啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦",
                        "styles":"#f66df4",
                        "icons":"icon-qian"
                    },
                    {
                        "title":"系统通知",
                        "time":"2017/5/9",
                        "alt":"啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦",
                        "styles":"#fec709",
                        "icons":"icon-dingdan"
                    },
                    {
                        "title":"我的奖金",
                        "time":"2017/11/13",
                        "alt":"啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦",
                        "styles":"#ff8f45",
                        "icons":"icon-shouhoubaozhang"
                    },
                    {
                        "title":"我的客服",
                        "time":"2018/1/24",
                        "alt":"啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦",
                        "styles":"#85a2ff",
                        "icons":"icon-kefu"
                    }
                ]
            }
        },
        methods:{
            goMyself(){
                this.$router.push({
                    name:'myself'
                })
            }
        }
    }
</script>
<style>
.news{
    width: 100%;
    height: 100%;
}
.newsHead{
    width: 100%;
    height: .4rem;
    line-height: .4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: .01px solid #ccc;
}
.newsHead a{
    text-align: center
}
.newsHead a:nth-child(1){
    font-size: .2rem!important
}
.newsList{
    width: 100%;
    height: 100%;
    background:#fff
}
.newsList dl{
    width: 100%;
    border-bottom: .01px solid #eee;
    padding: .1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.newsList dl dt{
    width: 18%;
    height: .5rem;
    border-radius: 50%;
    color: #fff;
    text-align: center;
    line-height: .5rem;
    font-size: .25rem!important;
    margin-right: .1rem;
}
.newsList dl dd{
    width: 80%;
}
.newsList dl dd p{
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-style: .13rem!important;
    line-height: .25rem;
}
.newsList dl dd p:nth-child(1){
    display: flex;
    justify-content: space-between;
}
.newsList dl dd p:nth-child(1) b{
    font-weight: bold
}
.newsList dl dd p:nth-child(1) span{
    font-size: .11rem!important
}
</style>
