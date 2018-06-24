<template>
    <div class="box">
        <header>
            <div class="one">
                <b class="iconfont icon-fangdajing"></b>  
                <input type="text" @click="goSearch" placeholder="请输入搜索">
            </div>
            <b class="iconfont icon-xiaoxi"></b>
        </header>
        <section>
            <aside class="left">
                <ul>
                    <li @click="getData($event)" :class="code==17951827?'active':''" data-id="17951827">热门分类</li>
                    <li @click="getData($event)" :class="code==17951828?'active':''" data-id="17951828">手机数码</li>
                    <li @click="getData($event)" :class="code==17951829?'active':''" data-id="17951829">电脑办公</li>
                    <li @click="getData($event)" :class="code==17951830?'active':''" data-id="17951830">电视影音</li>
                    <li @click="getData($event)" :class="code==17951831?'active':''" data-id="17951831">空调冰洗</li>
                    <li @click="getData($event)" :class="code==17951832?'active':''" data-id="17951832">厨房卫浴</li>
                    <li @click="getData($event)" :class="code==17951833?'active':''" data-id="17951833">生活电器</li>
                    <li @click="getData($event)" :class="code==17951834?'active':''" data-id="17951834">食品酒水</li>
                    <li @click="getData($event)" :class="code==17951835?'active':''" data-id="17951835">美妆个护</li>
                    <li @click="getData($event)" :class="code==17951836?'active':''" data-id="17951836">母婴玩具</li>
                    <li @click="getData($event)" :class="code==17951837?'active':''" data-id="17951837">医疗保健</li>
                    <li @click="getData($event)" :class="code==17951838?'active':''" data-id="17951838">服饰鞋帽</li>
                    <li @click="getData($event)" :class="code==17951839?'active':''" data-id="17951839">运动户外</li>
                    <li @click="getData($event)" :class="code==17951840?'active':''" data-id="17951840">箱包奢品</li>
                    <li @click="getData($event)" :class="code==17951841?'active':''" data-id="17951841">钟表首饰</li>
                    <li @click="getData($event)" :class="code==17951842?'active':''" data-id="17951842">住宅家具</li>
                    <li @click="getData($event)" :class="code==17951843?'active':''" data-id="17951843">家装建材</li>
                    <li @click="getData($event)" :class="code==17951844?'active':''" data-id="17951844">家居日用</li>
                    <li @click="getData($event)" :class="code==17951845?'active':''" data-id="17951845">床品家纺</li>
                    <li @click="getData($event)" :class="code==17951846?'active':''" data-id="17951846">汽车用品</li>
                    <li @click="getData($event)" :class="code==17951847?'active':''" data-id="17951847">黄金收藏</li>
                    <li @click="getData($event)" :class="code==17951849?'active':''" data-id="17951849">智能家居</li>
                    <li @click="getData($event)" :class="code==17951850?'active':''" data-id="17951850">金融理财</li>
                    <li @click="getData($event)" :class="code==17951851?'active':''" data-id="17951851">生活服务</li>
                </ul>
            </aside>
            <div class="content">
                <div class="cont-box">
                    <div class="floor" v-for="(item,index) in list" :key="item.goodsTypeId">
                        <p class="title">{{item.goodsTypeName}}</p>
                        <dl v-for="(v,i) in item.goodsTypeList" :key="i">
                            <dt><img :src="v.goodsTypeImgUrl" alt=""></dt>
                            <dd>{{v.goodsTypeName}}</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import {mapState} from "vuex"
export default {
    name: "allList",
    data() {
        return {
            code: 17951827
        }
    },
    computed:{
        list(){
            return this.classifyData[this.code]
        },
        ...mapState(['classifyData'])
    },
    methods: {
        getData(e) {
            console.log(e)
            let id = e.target.getAttribute('data-id')
            this.code = id
            // this.$http.get(`/api/classify?cid=${id}`).then(res => {
            //     this.list = res.secondLevelCategories
            //     console.log(res)
            // })
            this.$store.dispatch('fetchList',id)
        },
        goSearch(){
            console.log("12")
            this.$router.push({
                name:'search'
            })
        }
    },
    mounted() {
    }
}
</script>
<style scoped>
header {
    height: 9%;
    position: relative;
    border-bottom: .01rem solid #eee;
}

.one {
    width: 70%;
    height: .3rem;
    background: #eee;
    border-radius: .05rem;
    margin: .05rem 0 .05rem 15%;
    float: left;
    position: relative;
}

.one b {
    display: inline-block;
    width: .3rem;
    position: absolute;
    left: 8%;
    font-size: .18rem;
    color: #999;
}

.one input {
    text-align: center;
    margin-left: 15%;
    margin-top: 3%;
    background: #eee;
    border: 0;
    outline: 0;
}

header b {
    float: left;
    position: absolute;
    font-size: .2rem;
    right: 4%;
    top: 20%
}

.left {
    width: 30%;
    background: #eee;
    float: left;
    height: 100%;
    overflow: auto;
}

.left ul,
.left ul li {
    width: 100%;
}

.left ul li {
    line-height: .3rem;
    text-align: center;
    padding-right: .1rem
}

.content {
    width: 70%;
    height: 100%;
    float: left;
    background: #fff;
    overflow: auto;
}

.cont-box,
.floor {
    width: 100%;
}

.floor p {
    width: 100%;
    text-align: left;
    line-height: .2rem;
    float: left;
    font-size: .13rem;
    padding: .1rem;
}

.floor dl {
    width: 31%;
    float: left;
    background: #eee;
    margin-left: 2%;
    margin-bottom: .05rem;
}

.floor dl dt {
    width: 100%;
    text-align: center
}

.floor dl dt img {
    width: 70%;
}

.floor dl dd {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    font-size: .12rem;
    line-height: .25rem;
}

.active {
    border-left: .03rem solid red;
    background:#fff
}
</style>
