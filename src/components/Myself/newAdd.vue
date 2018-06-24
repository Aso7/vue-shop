<template>
    <div class="newAdd">
        <div class="newAddhead">
            <a @click="goAddress"><</a>
            <a>收货人</a>
            <a></a>
        </div>   
        <div class="message">
            <input type="text" placeholder="收货人姓名">
            <input type="text" placeholder="手机号">
            <select class="one">
                <option>北京市</option>
                <option>上海市</option>
                <option>山西省</option>
            </select>
            <select class="two">
                <option>北京</option>
                <option>上海</option>
                <option>太原市</option>
            </select>
            <select class="three">
                <option>海淀区</option>
                <option>浦东区</option>
                <option>迎泽区</option>
            </select>
            <input type="text" placeholder="详细地址">
            <span><i class="iconfont icon-duoxuan"></i>设为默认地址</span>
            <button>保存</button>
        </div>
    </div>
</template>
<script>
    export default{
        name:'newAdd',
        methods:{
            goAddress(){
                this.$router.push({
                    name:'address'
                })
            }
        }
    }
</script>
<style>
.newAdd{
    width: 100%;
    height: 100%;
    background:#eee;
    overflow-Y:hidden;
}
.newAddhead{
    width: 100%;
    line-height: .4rem;
    padding:0 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background:#fff
}
.newAddhead a{
    font-size: .15rem
}
.message{
    width: 100%;
    height: 100%;
    position: relative;
}
.message input{
    width: 90%;
    margin-left: 5%;
    margin-top: .1rem;
    line-height: .3rem;
    padding-left: .1rem;
    outline: 0;
    border: 0;
}
.message .three{
    width: 90%;
    margin-left: 5%;
    margin-top: .1rem;
    height: .3rem;
    border:0;
    outline: 0;
    line-height: .35rem;
}
.message .one,.message .two{
    width: 40%;
    height: .3rem;
    margin-top:.1rem;
    border:0;
    outline: 0;
    line-height: .35rem;
}
.message .one{
    margin-left: 5%;
}
.message .two{
    margin-left: 9%;
}
.message span{
    margin-left: 5%;
    line-height: .4rem
}
.message button{
    width: 70%;
    line-height: .4rem;
    position: absolute;
    left:15%;
    bottom:30%;
    background:red;
    border-radius: .2rem;
    color: #FFF;
    outline: 0;
    border: 0
}
</style>
