<template>
    <div class="banner">
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- 这部分放你要渲染的那些内容 -->
            <swiper-slide v-for="(item,index) in items" :key="index">
                <img :src="item.imgs" alt="">
            </swiper-slide>
            <!-- 这是轮播的小圆点 -->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>  
<script>  
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name:"swipe",
    components: {
        swiper,
        swiperSlide
    },
    data() {
        return {
            items:[
                {"imgs":"../../static/images/banner/ban1.png"},
                {"imgs":"../../static/images/banner/ban2.png"},
                {"imgs":"../../static/images/banner/ban3.png"},
                {"imgs":"../../static/images/banner/ban4.png"},
                {"imgs":"../../static/images/banner/ban5.png"},
                {"imgs":"../../static/images/banner/ban6.png"},
                {"imgs":"../../static/images/banner/ban7.png"},
                {"imgs":"../../static/images/banner/ban8.png"},
                {"imgs":"../../static/images/banner/ban9.png"}
            ],
            swiperOption: {
                //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true  
                notNextTick: true,
                pagination: '.swiper-pagination',
                slidesPerView: 'auto',
                autoplay:2500,
                centeredSlides: true,
                paginationClickable: true,
                spaceBetween: 30,
                onSlideChangeEnd: swiper => {
                    //这个位置放swiper的回调方法  
                    this.page = swiper.realIndex + 1;
                    this.index = swiper.realIndex;
                }
            }
        }
    }
}  
</script>  
<style>
  .banner{
      width: 100%;
  }
  .banner img{
      width: 100%;
  }

</style>  
