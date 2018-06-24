<template>
    <div class="allMsg">
        <ul>
            <li v-for="(item,index) in this.list" :key="index"  @click="goPage(item.name)">
                <span>
                    <b class="iconfont" :class="item.icons"></b>
                    {{item.title}}
                </span>
                <span>></span>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        name:'allMsg',
        data(){
            return{
                list:[
                    {name:"money",'title':'账户余额','icons':'icon-qianbao'},
                    {name:"address",'title':'地址管理','icons':'icon-dizhi'},
                    {name:"service",'title':'我的客服','icons':'icon-kefu'}
                ]
            }
        },
        methods:{
            goPage(name){
                this.$router.push({
                    path:'/'+ name,
                    name:name
                })
            }
        }
    }
</script>
<style>
.allMsg{
    margin-top: .1rem;
}
.allMsg,.allMsg ul{
    width: 100%;
    background:#fff;
}
.allMsg ul li{
    width: 90%;
    line-height: .4rem;
    margin-left: 5%;
    border-bottom: .01px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.allMsg ul li b{
    font-size: .2rem
}
</style>
