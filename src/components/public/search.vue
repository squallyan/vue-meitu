<template lang="html">
  <div class="search-page">
    <div class="header">
      <router-link to='/'>
        <span class="gohome"></span>
      </router-link>
      <div class="input-box">
        <input type="text" class="keywords" placeholder="美图M8">
      </div>
        <span @click="searchhandle" class="search-btn">搜索</span>
    </div>
    <div class="result-box">
      <p class="tips">
        共有
        <span class="digit">0</span>
        件商品
      </p>
      <div class="result-list">
        <img src="http://img1.app.meitudata.com/meitushop/v4/mobile_img/pic_error_emoji@2x.png" alt="" class="notFound">
        <p class="desc">
          亲 抱歉,未找到与关键词"
          <span class="keywords">{{keywords}}</span>
          "相关的产品,<br>
          请尝试切换关键词吧!
        </p>
      </div>
    </div>
    <footBar></footBar>
  </div>

</template>

<script>
import footBar from './footer'
export default{
 computed: {
   keywords() {
     return localStorage.getItem('keywords')
   }
 },
 methods: {
   searchhandle: function () {
     let keywords = document.querySelector('.keywords').value.trim()
     console.log(keywords)
     localStorage.setItem('keywords',keywords)
   }
 },
 components: {
   footBar
 }
}
</script>

<style lang="css">
.header{
  align-items: center;
}
.search-page .header .gohome{
  display: block;
  width: 1.8rem;
  height: 1.8rem;
  margin-left: 1rem;
  margin-right: 1rem;
  background: url(../../assets/images/home.png) no-repeat;
  background-size: cover;
}
.search-page .header {
  display: flex;
}
.search-page .header .input-box {
  flex:1;
  width: 20rem;
  height: 3rem;
  border: 1px solid #cdced1;
  padding: .8rem;
  box-sizing: border-box;
}
.search-page .header .search-btn {
  width: 4.4rem;
  height: 4.4rem;
  line-height: 4.4rem;
  text-align: center;
  color: #817e83;
  font-size: 1.4rem;
}
.result-box .tips {
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  padding-left: 2rem;
  box-sizing: border-box;
  font-size: 1.6rem;
  color: #acacac;
}
.tips .digit {
  color: #f55669;
}
.result-list .desc {
  text-align: center;
  font-size: 1.6rem;
  padding-bottom: 2rem;
  box-sizing: border-box;
}
.desc .keywords {
  color: #f55669;
}
.result-list {
  width: 100%;
  background-color: #fff;
}
.notFound {
  width: 10rem;
  height: 10rem;
  display: block;
  margin: 0 auto;
  padding-top: 5rem;
  margin-bottom: 2rem;
}
</style>
