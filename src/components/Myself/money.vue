<template>
    <div class="money">
        <div class="moneyHead">
            <p>
                <a @click ="goMyself"><</a>
                <a>账户余额</a>
                <a></a>
            </p>
            <p>
                <span>账户余额</span>
                <b>100.00</b>
            </p>
        </div>
        <ul class="moneyPro">
            <li>
                <span><b class="iconfont icon-money2"></b>充值</span>
                <span>></span>
            </li>
            <li>
                <span><b class="iconfont icon-fukuan" style="color:#6170ff"></b>提现</span>
                <span>></span>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        name:"money",
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
.money{
    width: 100%;
    height: 100%;
}
.moneyHead{
    width: 100%;
    height: 35%;
    background: linear-gradient(to bottom, #83d0f8, #65c5f8, #429afc);
}
.moneyHead p:nth-child(1){
    line-height: .4rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.moneyHead p:nth-child(1) a{
    color:#fff;
    font-size: .15rem;
    text-align: center;
}
.moneyHead p:nth-child(1) a:nth-child(1){
    padding-left: .1rem;
    font-size: .2rem
}
.moneyHead p:nth-child(2){
    line-height: .3rem;
    width: 90%;
    margin-top: .15rem;
    margin-left: 5%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    color: #FFF;
}
.moneyHead p:nth-child(2) b{
    font-weight: bolder;
    font-size: .5rem;
    margin-top: .15rem;
}
.moneyPro{
    width: 100%;
    background:#fff;
}
.moneyPro li{
    width: 100%;
    padding:0 5%;
    line-height: .4rem;
    border-bottom: .01px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.moneyPro li span b{
    padding-right: .1rem;
    font-size: .2rem!important
}
</style>
