#vue2.0仿手机版美图官网
  看着各位大神的vue项目泉涌而出,本阶段正在学习Vue的小小白也打算亲自操起键盘来感受一把Vue世界的美好~~
##在线预览
  在线demo  https://zsqio.github.io/vuex-meitu-demo/index.html#/
  github    https://github.com/zsqio/vue-meitu
##项目概括
  ###技术栈
   - vue2.0
   - vuex     专为 Vue.js 应用程序开发的状态管理模式,集中式存储管理应用的所有组件的状态
   - Swiper   第三方插件Swiper 使用详情可见 (http://www.swiper.com.cn/)
   - mint-ui  基于vue.js的移动端组件库 帮助快速搭建页面
   - html5 css3
  ###主要实现功能
   ####商品信息展示
   - 轮播图
   - mint-ui  navbar切换 商品信息 产品参数,Toast 用户提醒信息
   - 列表展示手机配件商品信息
    ![image](https://raw.githubusercontent.com/zsqio/zsqio.github.io/master/vuex-meitu-demo/demo-images/1.gif)
   ####购物车
   - 加入购物车
    ![image](https://raw.githubusercontent.com/zsqio/zsqio.github.io/master/vuex-meitu-demo/demo-images/2.gif)
      加入购物车存在两种情况：
       1. 该商品已经存在购物车中,此时商品数量+1即可
       - 商品不在购物车,将新加入的商品信息push进cartList
   - 删除购物车商品
      根据选中即将删除商品的id在cartList中遍历出该商品并给予删除,因为我在项目里是一个数组暂存购物车中的商品，所以可以使用数组的splice方法将指定下标的某个商品删除,即 cartList.splice(index, 1)
     ![image](https://raw.githubusercontent.com/zsqio/zsqio.github.io/master/vuex-meitu-demo/demo-images/3.gif)
   - 商品支付
     根据用户选中前往支付的商品动态的显示需要支付的总金额,此时购物车中的商品如同一个个复选按钮，可选可不选，可单选可多选,使用户的购物体验更好,这些共享状态之间相互切换，来及时驱动界面的渲染
   - 用户登录状态判断
      在提交订单和立即购买时,需要对用户的登录状态进行判断
      if (this.$store.state.login) {
          用户属于登录状态,可以进行购买和付款操作
        }else {
          提醒用户登录并跳转至登录页
          登录后在进行相关操作
        }
   - 用户收货地址生成 借助v-model双向数据绑定
   ![image](https://raw.githubusercontent.com/zsqio/zsqio.github.io/master/vuex-meitu-demo/demo-images/6.gif)
   - 生成订单
   - 查看订单
   - 购物车更新
      已经支付生成订单的商品从购物车中“消失”,已经加入购物车但还未支付的商品继续保留其原有的状态
   ####用户体验
   - 登录登出

  ##总结
   1. v-if 和 v-show 的使用,两者都是动态的显示DOM元素,但两者存在区别,性能消耗也不同，若是频繁的切换状态建议使用v-show
   - vuex使用：
     - Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，
     那么相应的组件也会相应地得到高效更新。
     - 我们不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交(commit) mutations。



     ## Build Setup

     ``` bash
     # install dependencies
     npm install

     # serve with hot reload at localhost:8080
     npm run dev

     # build for production with minification
     npm run build

     # build for production and view the bundle analyzer report
     npm run build --report
     ```
