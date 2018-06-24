<template>
    <div class="text_banner">
        <h3>商城动态</h3>
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- 这部分放你要渲染的那些内容 -->
            <swiper-slide v-for="(item,index) in items" :key="index">
                <p style="font-size:.12rem">{{item.tit}}</p>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default{
    name:'swipe1',
    components: {
        swiper,
        swiperSlide
    },
    data(){
        return{
            items:[
                {"tit":"我们应该更坚强的存在我们应该更坚强的存在我们应该更坚强的存在"},
                {"tit":"我们应该阻止世界变坏我们应该阻止世界变坏我们应该阻止世界变坏"},
                {"tit":"不只是哲学不只是自己无害不只是哲学不只是自己无害"}
            ],
            swiperOption: {
                notNextTick: true,//第一时间获取swiper对象
                slidesPerView: 'auto',
                loop:true,//无缝轮播
                autoplayDisableOnteraction:true,//和loop联合形成无缝轮播
                autoplay:2500,//轮播时间
                direction:"vertical", //水平  horizontal 垂直 vertical
                centeredSlides: true,
                paginationClickable: true,
                spaceBetween: 30,
                onSlideChangeEnd: swiper => {
                    //这个位置放swiper的回调方法  
                    this.page = swiper.realIndex + 1;
                    this.index = swiper.realIndex;
                }
                //paginationType:"bullets" 分页器样式
            }
        }
    }
}    
</script>
<style>
.text_banner{
    width: 100%;
    height: .5rem;
    padding: .05rem .15rem;
}
.text_banner h3{
    width: 15%;
    font-size: .16rem;
    float: left;
    color: #ff6d00;
    border-right:.01rem solid #ccc;
}
.text_banner .swiper-container{
    margin-left: 5%;
    width: 80%;
    height: 100%;
    float: left;
    line-height: .2rem;
}

</style>
