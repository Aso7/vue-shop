<template>
    <div class="address">
        <div class="addHead">
            <a @click="goMyself"><</a>
            <a>收货地址</a>
            <a></a>
        </div>
        <div class="addPro">
            <div class="everyPro">
                <h6>大北呀 151****1470</h6>
                <p>北京市海淀区八维研修学院</p>
                <p>
                    <span><b class="iconfont icon-duoxuan"></b>默认地址</span>
                    <span>
                        <button>编辑</button>
                        <button>删除</button>
                    </span>
                </p>
            </div>
            <button class="addBtn" @click="goNewAdd">新增地址</button>
        </div>
    </div>
</template>
<script>
    export default{
        name:"address",
        methods:{
            goNewAdd(){
                this.$router.push({
                    name:'newAdd'
                })
            },
            goMyself(){
                this.$router.push({
                    name:'myself'
                })
            }
        }
    }
</script>
<style>
.address{
    width: 100%;
    height: 100%;
    background:#fff
}
.addHead{
    width: 90%;
    line-height: .4rem;
    margin-left: 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background:#fff
}
.addHead a{
    font-size: .15rem
}
.addPro{
    width: 100%;
    height: 100%;
    border-top: .01rem solid #eee;
    background:#eee;
    position: relative;
}
.everyPro{
    width: 100%;
    margin-bottom: .05rem;
    padding: .05rem .15rem .05rem .15rem;
    border-bottom: .01rem solid #eee;
    background:#fff
}
.everyPro h6{
    line-height: .4rem;
    font-weight: normal;
    font-size: .15rem
}
.everyPro p{
    font-size: .12rem;
    line-height: .25rem;
}
.everyPro p:nth-child(3){
    border-top: .01rem solid #eee;
    line-height: .4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.everyPro p:nth-child(3) button{
    background:0;
    border: 0;
    outline: 0;
    margin-right: .1rem;
}
.everyPro p:nth-child(3) span:nth-child(1){
    font-size: .15rem;
}
.addBtn{
    position: absolute;
    bottom:.2rem;
    left:15%;
    width: 70%;
    line-height: .4rem;
    background:red;
    color: #FFF;
    border-radius: .2rem;
    outline: 0;
    border: 0
}
</style>
