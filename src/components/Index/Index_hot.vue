<template lang="html">
  <div class="hot-container">
    <div class="hot-header">
      <h3 class="title">热门推荐</h3>
    </div>
    <div class="swiper-container1">
      <div class="swiper-wrapper">
        <div class="swiper-slide slide1">
          <img src="http://mshopimg1.meitudata.com/577b6c126884c98714.jpg" alt="">
        </div>
        <div class="swiper-slide slide2">
          <img src="http://mshopimg2.meitudata.com/584545674579f47971.jpg" alt="">
        </div>
        <div class="swiper-slide slide3">
          <img src="http://mshopimg4.meitudata.com/57ba9c0ec94f532807.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      hotSwiper: null
    }
  },
  mounted () {
    this.hotSwiper = new Swiper('.swiper-container1', {
      direction: 'horizontal',
      freeMode: true,
      spaceBetween: 20
    })
  }
}
</script>

<style lang="css">
.hot-container {
  width: 100%;
}
.hot-header .title{
  font-size: 1.6rem;
  height: 4.6rem;
  line-height: 4.6rem;
  color: #666;
  font-weight: 500;
  margin-left: 2rem;
}
.swiper-container1{
  width: 100%;
  overflow-x: hidden;
}
.swiper-container1 .swiper-wrapper{
  width:100%;
}
.swiper-container1 .swiper-wrapper .swiper-slide{
  float: left;
  height: 12rem;
  width: 80% !important;
  /*margin-right: 1rem;*/
  float: left;
}
.swiper-container1 .swiper-slide img{
  width: 100%;
  display: block;
  height: 100%
}
</style>
