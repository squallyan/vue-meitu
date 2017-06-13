<template lang="html">
    <div>
      <div class="goods-list">
        <ul class="list" v-for="good in goodlist1">
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
      goodlist1:[
        {
          imgSrc: 'http://mshopimg2.meitudata.com/5924f6148e4b810297.jpg?thumb220',
          title: '美图T8/美图M8电源适配器',
          price: 29
        },
        {
          imgSrc: 'http://mshopimg3.meitudata.com/5795a7f688e8313351.jpg?thumb220',
          title: '美图M6/美图M6s/美图T8手机数据线',
          price: 39
        }
      ]
    }
  }
}
</script>

<style lang="css">
</style>
