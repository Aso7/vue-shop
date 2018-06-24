<template>
    <div class="item_icon">
        <router-link v-for="(item,index) in icons" :key="index" :to="{name:'iconDetail'}">
            <b class="iconfont" :class="item.icon" :style="{background:item.style}"></b>
            <span>{{item.tit}}</span>
        </router-link>
        <Swipe1/>
    </div>
</template>
<script>
import Swipe1 from "../swipe1"
export default {
    name: 'item_icon',
    data() {
        return {
            icons: [
                { "style": "#f60", "tit": "家乡味道", "icon": "icon-meishi" },
                { "style": "mediumpurple", "tit": "进口食品", "icon": "icon-2" },
                { "style": "yellow", "tit": "牛奶乳品", "icon": "icon-niunai" },
                { "style": "green", "tit": "茶果冲饮", "icon": "icon-coffee" },
                { "style": "red", "tit": "休闲零食", "icon": "icon-shutiao" },
                { "style": "orange", "tit": "米面粮油", "icon": "icon-wheat" },
                { "style": "#f80", "tit": "调味调料", "icon": "icon-jiu" },
                { "style": "skyblue", "tit": "酒水饮料", "icon": "icon-jiubei" }
            ]
        }
    },
    methods: {
        reload() {
            this.sd = false;
            this.$nextTick(() => {
                this.sd = true
            })
        }
    },
    components: {
        Swipe1
    }
}
</script>
<style>
.item_icon {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    background: #fff
}

.item_icon a {
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: .07rem;
}

.item_icon a b {
    display: inline-block;
    width: .35rem;
    height: .35rem;
    font-size: .25rem;
    color: #FFF;
    text-align: center;
    line-height: .35rem;
    border-radius: 50%
}

.item_icon a span {
    font-size: .12rem!important;
    line-height: .3rem;
}
</style>
