<template>
    <div class="order">
        <div class="orderHead">
            <a><</a>
            <a>我的订单</a>
            <a class="iconfont icon-xiaoxi"></a>
        </div>
        <div class="orderList">

        </div>
    </div>
</template>
<script>
    export default{
        name:"order"
    }
</script>
<style>
.order{
    width: 100%;
    height: 100%;
}
.orderHead{
    width: 100%;
    height: .4rem;
    line-height: .4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: .01px solid #ccc;
}
.orderHead a:nth-child(1){
    padding-left: .1rem;
    font-size: .2rem!important
}
.orderHead a:nth-child(3){
    padding-right: .1rem;
    font-size: .2rem!important
}
.orderList{
    width: 100%;
    height: 100%;
    background:#fff
}
</style>
