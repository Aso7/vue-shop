<template>
    <footer>
        <router-link v-for="(item,index) in item" :key="index" :to="{name:item.name}">
            <b class="iconfont" :class="item.icon"></b>
            <span>{{item.tit}}</span>
        </router-link>
    </footer>
</template>
<script>
export default {
    name: "index",
    data() {
        return {
            item: [
                { "icon":"icon-shouye","name": "home", 'tit': "首页" },
                { "icon":"icon-every","name": "item", 'tit': "分类" },
                { "icon":"icon-gouwuche","name": "cart", 'tit': "购物车" },
                { "icon":"icon-wode","name": "myself", 'tit': "我的" }
            ]
        }
    },
    methods: {

    }
}  
</script>
<style>
@import "./style.css"
</style>
