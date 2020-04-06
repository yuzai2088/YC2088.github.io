<template>
    <div class="swiper-container" :id="id">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
export default {
    props:['id','swiperOptions'],
    mounted(){
        // 初始化载入 异步数据没有请求到位 
        // 实例化 同步数据
        let mySwiper = new Swiper(`#${this.id}`,this.swiperOptions);
    },
    updated(){
        // 实例化 异步数据
        let mySwiper = new Swiper(`#${this.id}`,this.swiperOptions);
    }
}
</script>

