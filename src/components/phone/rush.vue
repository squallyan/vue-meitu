<template lang="html">
  <div class="rush-page">
    <mt-header>
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <router-link to='/' slot="right">
        <span class="gohome"></span>
      </router-link>
    </mt-header>
    <div class="swiper-container4">
      <div class="swiper-wrapper">
        <div class="swiper-slide slide1">
          <img src="http://mshopimg2.meitudata.com/59101221d784529157.jpg" alt="">
        </div>
        <div class="swiper-slide slide2">
          <img src="http://mshopimg1.meitudata.com/5910126d54d1369100.jpg" alt="">
        </div>
        <div class="swiper-slide slide3">
          <img src="http://mshopimg4.meitudata.com/5910128945af663574.jpg" alt="">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="phone-info">
      <p class="phone-text">美图M8</p>
    </div>
    <div class="selection-fittings">
      <p class="title">规格</p>
      <ul class="version">
        <li @click="chooseVer" class="item selected">
          <p class="ver">标准版(AMOLED屏)</p>
          <p class="size">64G</p>
          <span class="price">￥2799</span>
        </li>
        <li @click="chooseVer" class="item">
          <p class="ver">标准版(TFT屏</p>
          <p class="size">64G</p>
          <span class="price">￥2599</span>
        </li>
        <li @click="chooseVer" class="item">
          <p class="ver">hellokitty特别版</p>
          <p class="size">64G</p>
          <span class="price">￥2599</span>
        </li>
      </ul>
      <p class="title">颜色</p>
      <ul class="color">
        <li @click="chooseCol" class="item">
          <i class="icon charm-red"></i>
          <span class="text">魅影红</span>
        </li>
        <li @click="chooseCol" class="item">
          <i class="icon shine-purple"></i>
          <span class="text">闪耀紫</span>
          <span class="tip"></span>
        </li>
      </ul>
    </div>
    <div class="good-promise">
      <ul class="promises">
        <li class="item">
          <i class="icon zp"></i>
          正品保障
        </li>
        <li class="item">
          <i class="icon lb"></i>
          全国联保
        </li>
        <li class="item">
          <i class="icon th"></i>
          无忧退换货
        </li>
        <li class="item">
          <i class="icon by"></i>
          99包邮
        </li>
      </ul>
    </div>
    <div class="basebar">
      <div class="time">
        抢购时间： 06月16日 12:00
      </div>
      <div @click="order" class="orderBtn">
        立即预约
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      phoneSwiper: null
    }
  },
  mounted () {
    this.phoneSwiper = new Swiper('.swiper-container4', {
      direction: 'horizontal',
      resistance: '100%',
      mousewheelControl: true,
      grabCursor: true,
      paginationClickable: true,
      pagination: '.swiper-pagination'
    })
  },
  methods: {
    chooseVer: function (e) {
      document.querySelector('.selected').classList.remove('selected')
      if(!e.target.classList.contains('selected')) {
        e.target.classList.add('selected')
      }
    },
    order: function(){
      this.$toast({
        message: '预约成功'
      })
    }
  }
}
</script>

<style lang="css" scoped>
.swiper-container4{
  background-color: #fff;
  overflow: hidden;
  position: relative;
}
.swiper-container4 .swiper-slide img {
  width: 18rem;
  height: 18rem;
  display: block;
  margin: 0 auto;
  margin-bottom: 1rem;
}
.swiper-container4 .swiper-pagination{
  position: absolute;
  bottom: 0;
  left: 0;
}

.phone-info {
  padding-top: 2rem;
  padding-bottom: 2rem;
  width: 100%;
  background-color: #fff;
}
.phone-info .phone-text{
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;

}
.selection-fittings {
  width: 100%;
  padding: 2rem;
  box-sizing: border-box;
}
.version .item {
    background: #fff;
    position: relative;
    border-radius: .5rem;
    padding: 1rem 1.25rem;
    margin-bottom: 1.5rem;
    box-sizing: border-box;
}
.selected {
  border: 1px solid #f55669;
}
.version .item .ver {
    color: #3c363e;
    font-size: 1.4rem;
    line-height: 2;
}
.version .item .size {
    color: #a2a0a3;
    font-size: 1.4rem;
    line-height: 2;
}
.version .item .price {
  position: absolute;
  right: 2rem;
  top: 2rem;
  color: #f55669;
  font-size: 1.6rem;
}
.color{
  display: flex;
}
.color .item{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 40%;
  height: 5rem;
  margin-right: 2rem;
}
.color .item .icon {
  width: 1.5rem;
  height: 1.6rem;
  border-radius: 50%;
}
.charm-red {
  background-color: #d72a4f;
}
.shine-purple {
  background-color: #634bbd;
}
.basebar {
  width: 100%;
  height: 5rem;
  background-color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  z-index: 12;
  justify-content: center;
  align-items: center;
}
.basebar .time {
  flex:1;
  text-align: center;
  font-size: 1.6rem;
}
.basebar .orderBtn {
  width: 10rem;
  height: 5rem;
  background-color: #f55669;
  color: #fff;
  font-size: 1.8rem;
  text-align: center;
  line-height: 5rem;
}
</style>
