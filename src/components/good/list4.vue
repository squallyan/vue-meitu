<template lang="html">
  <div>
    <div class="goods-list">
      <ul class="list" v-for="good in goodlist3">
        <li class="item">
          <router-link to='./detail'>
            <div class="item-image">
              <img :src=good.imgSrc alt="">
            </div>
            <div class="item-info">
              <h4 class="goodtitle">{{good.title}}</h4>
              <span class="price">¥ {{good.price}}</span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      goodlist3: [
        {
          imgSrc: 'http://mshopimg3.meitudata.com/561e03a60e3cb47662.jpg?thumb220',
          title: '美图手机专属耳机',
          price: 79
        }
      ]
    }
  }
}
</script>

<style lang="css">
</style>
