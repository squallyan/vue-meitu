<template lang="html">
  <div class="detail-page">
    <mt-header>
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <router-link to='/' slot="right">
        <span class="gohome"></span>
      </router-link>
    </mt-header>
    <div class="swiper-container3">
      <div class="swiper-wrapper">
        <div v-for="img in imgInfo" class="swiper-slide" :class="img.className">
          <img :src="img.imgSrc" alt="">
          <p v-show="false" class="good-price">{{img.price}}</p>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="good-info">
      <p class="good-text">限量版美图公仔</p>
      <p class="good-price">¥59-199</p>
    </div>
    <div class="selection-fittings">
      <dl class="dl">
        <dt class="dt">规格:</dt>
        <dd @click="selectFit" id="0" class="dd selected">全套</dd>
        <dd @click="selectFit" id="1" class="dd">开心喵</dd>
        <dd @click="selectFit" id="2" class="dd">招财喵</dd>
        <dd @click="selectFit" id="3" class="dd">桃花喵</dd>
        <dd @click="selectFit" id="4" class="dd">许愿喵</dd>
      </dl>
      <dl class="dl">
        <dt class="dt">数量:</dt>
        <span @click="subNum" class="btn sub">-</span>
        <span class="selectedNum">{{buyNum}}</span>
        <span @click="addNum" class="btn add">+</span>
      </dl>
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
    <div class="detail-info">
      <mt-navbar>
        <mt-tab-item  id="1" class="is-selected">商品详情</mt-tab-item>
        <mt-tab-item  id="2">规格参数</mt-tab-item>
      </mt-navbar>
      <mt-tab-container>
        <mt-tab-container-item id="1">
          <mt-cell>
            <img src="http://mshopimg3.meitudata.com/52bd57de4572e44137.jpg" alt="">
            <img src="http://mshopimg2.meitudata.com/52bd57e12051a12027.jpg" alt="">
            <img src="http://mshopimg1.meitudata.com/52bd57e46f70789906.jpg" alt="">
            <img src="http://mshopimg1.meitudata.com/52bd57e7c84f692890.jpg" alt="">
          </mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-cell>
            <span class="color-type">颜色</span>
           <span class="color">黄/白/红绿/</span>
          </mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <div class="detail-basebar">
      <span class="toCart">
        <router-link to='/cart'>
          <i class="icon buycart"></i>
        </router-link>
        <em class="buynumber">{{count}}</em>
      </span>
      <span @click="add_cart" class="cart-btn">
        加入购物车
      </span>
      <span @click="buyNow" class="buy-btn">
        立即购买
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      buyNum: 1,
      imgInfo: [
        {
          imgSrc:'http://mshopimg2.meitudata.com/56405d961f73421827.jpg?thumb350',
          className:'slide1',
          price: 199
        },
        {
          imgSrc: 'http://mshopimg2.meitudata.com/56405d9cf192470002.jpg?thumb350',
          className: 'slide2',
          price: 59
        },
        {
          imgSrc:'http://mshopimg1.meitudata.com/56405da6b07b196859.jpg?thumb350',
          className: 'slide3',
          price: 59
        },
        {
          imgSrc: 'http://mshopimg3.meitudata.com/56405dcc95b4870846.jpg?thumb350',
          className: 'slide4',
          price: 59
        },
        {
          imgSrc: 'http://mshopimg1.meitudata.com/56405da3713e642547.jpg?thumb350',
          className: 'slide5',
          price: 59
        }

      ],
      detailSwiper: null
    }
  },
  computed : {
    count () {
      return this.$store.state.cart.cartInfos.total_nums
    }
  },
  mounted () {
    this.detailSwiper = new Swiper('.swiper-container3', {
      direction: 'horizontal',
      resistance: '100%',
      mousewheelControl: true,
      grabCursor: true,
      paginationClickable: true,
      pagination: '.swiper-pagination'
    })
  },
  methods: {
    selectFit: function (e) {
      console.log(e)
      document.querySelector('.selected').classList.remove('selected')
      if(!e.target.classList.contains('selected')) {
        e.target.classList.add('selected')
      }
    },
    subNum: function () {
      if(this.buyNum > 1) {
        this.buyNum --
      } else {
        return
      }
    },
    addNum: function () {
      this.buyNum ++
    },
    add_cart: function() {
      this.$toast({
        message: '已添加到购物车',
        position: 'top',
        duration: 1000,
        className: 'toast'
      })
      let goodId = document.querySelector('.selected').id
      this.$store.dispatch('check_cart', goodId)
      const goodTitle = document.querySelector('.good-text').innerHTML
      const productType = document .querySelector('.selected').innerHTML
      const imgSrc = this.imgInfo[goodId].imgSrc
      const goodPrice = this.imgInfo[goodId].price
      const productInfo ={
        id: goodId,
        imgSrc: imgSrc,
        title: goodTitle,
        price: goodPrice,
        perNum: this.buyNum,
        type: productType,
        selected: false
      }
      if(this.$store.state.cart.curIndex != -1) {
        // console.log(this.$store.state.cart.curIndex )
        this.$store.commit('ADD_CART')
      }else {
        // console.log(this.$store.state.cart.curIndex)
        this.$store.commit('CREATE_CART',productInfo)
      }
    },
    buyNow: function () {
      this.add_cart()
    }
  }
}
window.onscroll = function() {
	var scrollTop =  document.documentElement.scrollTop || document.body.scrollTop
  var  mtNavbar= document.querySelector('.mint-navbar')
	if (scrollTop >520) {
    mtNavbar.style.position = 'fixed'
    mtNavbar.style.top = 0
    mtNavbar.style.left = 0
	} else {
    mtNavbar.style.position = 'relative'
	}
	}
</script>

<style lang="css">
.swiper-container3{
  background-color: #fff;
  /*border: 1px solid #000;*/
  overflow: hidden;
  position: relative;
}
.swiper-container3 .swiper-slide img {
  width: 21rem;
  height: 21rem;
  display: block;
  margin: 0 auto;
  margin-bottom: 1rem;
}
.swiper-container3 .swiper-pagination{
  position: absolute;
  bottom: 0;
  left: 0;
}
.swiper-container3 .swiper-pagination-bullet{
  background-color: #ff8282;
}
.good-info {
  padding-top: 2rem;
  width: 100%;
  background-color: #fff;
}
.good-info .good-text{
  text-align: center;
  font-size: 1.8rem;
  font-weight: 500;
}
.good-info .good-price{
  text-align: center;
  font-size: 1.6rem;
  color: #f55669;
}
.selection-fittings{
  width: 100%;
  padding-top: 1rem;
}
.selection-fittings .dl {
  padding-left: 1rem;
  margin-bottom: 1rem;
  margin-right: 2rem;
}
.selection-fittings .dl .dt {
  display: inline-block;
  font-size: 1.6rem;
  margin-right: 2rem;
  color: #a2a0a3;
}
.selection-fittings .dl .dd {
  font-size: 1.6rem;
  color: #3c363e;
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
  padding: .5rem;
  margin-right:  2rem;
  margin-bottom: 1rem;
  display: inline-block;
}
.selection-fittings .dl .dd.selected {
  border-color: #f55669;
}
.selection-fittings .btn {
  width: 3rem;
  height: 3rem;
  background-color: #fff;
  display: inline-block;
  text-align: center;
  line-height: 3rem;
  font-size: 1.8rem;
}
.selection-fittings .selectedNum {
  width: 5rem;
  height: 3rem;
  display: inline-block;
  background-color: #fff;
  margin-left: 1rem;
  margin-right: 1rem;
  text-align: center;
  line-height: 3rem;
}
.good-promise {
  width: 100%;
  height: 4.4rem;
  line-height: 4.4rem;
  background-color: #fff;
}
.good-promise .promises{
  width: 100%;
  margin: 0 auto;
}
.good-promise .item {
  width: 24%;
  height: 4.4rem;
  /*margin-left: 1rem;*/
  display: inline-block;
  font-size: 1.2rem;
  color: #c3c3c3;
  text-align: center;
}
.good-promise .icon {
  width: 1.5rem;
  height: 1.5rem;
  display: inline-block;
  background-size: cover;
  background-repeat: no-repeat;
}
.zp {
  background: url(../../assets/images/正品.png);
}
.lb{
  background: url(../../assets/images/保.png);
}
.th{
  background: url(../../assets/images/定位 .png);
}
.by{
  background: url(../../assets/images/顺丰.png);
}
.detail-basebar {
  width: 100%;
  height: 5rem;
  background-color: #fff;
  z-index: 10;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
}
.detail-basebar span {
  width: 33.33333%;
  height: 100%;
  display: block;
  text-align: center;
  line-height: 5rem;
  margin-left: 0;
  font-size: 1.8rem;
  font-weight: 600;
  color: #fff;
}
.detail-basebar .toCart .buycart{
  position: relative;
  display: block;
  width: 1.8rem;
  height: 1.8rem;
  margin-top: 1.6rem;
  margin-left: 2rem;
  background: url(../../assets/images/iconCar.png) center center no-repeat;
  background-size: cover;
}
.detail-basebar .toCart .buynumber {
  position: absolute;
  background: #f74554;
  min-width: 1rem;
  height: 1.4rem;
  line-height: 1.4rem;
  font-size: 12px;
  color: #fff;
  top: .3rem;
  left: 1.4rem;
  text-align: center;
  padding: 0 .3rem;
  border-radius: 1rem;
  box-sizing: border-box;
  font-style: normal;
}
.detail-basebar .cart-btn {
  background: #ff8c4d;
}
.detail-basebar .buy-btn {
  background: #f55669;
}
.detail-info {
  width: 100%;
  margin-top: 1rem;
}
.mint-tab-container {
  width: 100%;
}
.mint-tab-container-item {
  display: block !important;
}
.mint-cell-value {
  width: 100%;
  display: block!important;
}
.mint-cell-value img {
  width: 100%;
  display: block;
}
.mint-navbar{
  width: 100%;
  border-bottom:1px solid #ececec;
  font-size: 1.6rem;
  z-index: 10;
}

.mint-navbar .mint-tab-item.is-selected {
    border-bottom: 3px solid #f55669;
    color: #f55669;
    font-size: 1.6rem;
  }
  .toast {
    font-size: 1.6rem ;
    width: 80%;
    margin: 0 auto;
  }
</style>
