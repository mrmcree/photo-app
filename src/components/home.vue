<template>
  <div id="home">
    <el-carousel :interval="1000" arrow="never" height="250px" :autoplay=true>
      <el-carousel-item v-for="item in 4" :key="item">
      </el-carousel-item>
    </el-carousel>
    <div class="title">
      <div class="line"></div>
      <div class="text">
        约拍
      </div>
      <div class="line"></div>
    </div>
    <div class="select-wrapper">
      <ul class="select-ul">
        <li class="select-li" v-for="item in ['人像','写真','baby','旅拍','婚礼','孕妇','宠物','商务']">
          <i class="fa fa-camera-retro"></i>{{item}}
        </li>
      </ul>
    </div>
    <div class="more-wrapper">
      <div class="more">精选</div>
      <router-link to="/more">
        <div class="more-right">更多<i class="fa fa-angle-right"></i></div>
      </router-link>
    </div>
    <div class="photodisplay">
      <div class="item" style="flex:25%"></div>
      <div class="item" style="flex:25%"></div>
      <div class="item" style="flex:40%"></div>
      <div class="item2" style="flex:25%"></div>
      <div class="item2" style="flex:40%"></div>
      <div class="itemlist">
        <div class="item3" style="flex:25%"></div>
        <div class="item3" style="flex:25%"></div>
      </div>
    </div>
    <div class="title">
      <div class="line"></div>
      <div class="text">
        明星摄影师
      </div>
      <div class="line"></div>
    </div>
    <router-link to="/cameraman">
      <div class="avatarlist" >
        <div class="item" v-for="i in 3">
          <img src="" alt="">
          <p>jack</p>
          <i class="fa fa-star" v-for="i in 5"></i>
        </div>
      </div>
    </router-link>

  </div>

</template>

<script type='text/ecmascript-6'>
  export default {
    name: 'home',
    data () {
      return {
        value5: 5
      }
    },
    components: {
    }
  }
</script>

<style lang='stylus' rel="stylesheet/stylus">
  @import "../com/base.styl"
  #home
    .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      height: 200px;
      margin: 0;
    }

    .el-carousel__item {
      background-color: #99a9bf;
    }

  .title
    display: flex
    width: 100%
    padding: 20px 50px
    background: #fff
    .line
      flex: 1
      position: relative
      top: -8px
      border-bottom: 1px solid color-select(0.3)
    .text
      padding: 0 12px
      font-weight: 500
      font-size: 14px
      color: color-select(0.7)

  .select-ul
    display: flex
    flex-wrap: wrap
    .select-li
      flex: 0 0 25%
      text-align: center
      padding: 5px 0px
      background: #fff
      font-size: 14px
      color: color-select(0.7)
      &:first-child, &:nth-of-type(2), &:nth-of-type(3), &:nth-of-type(4)
        border-right: .5px solid color-select(0.3)
        border-bottom: .5px solid color-select(0.3)
      &:nth-of-type(4)
        border-right: 0
      &:nth-of-type(5), &:nth-of-type(6), &:nth-of-type(7)
        border-right: .5px solid color-select(0.3)
      & > i
        display: block

  .more-wrapper
    margin-top: 10px
    background: #fff
    height: 40px
    line-height: 40px
    display: flex
    position: relative
    & > a
      color: #000
    .more
      flex: 1
      text-align: center
    .more-right
      position: absolute;
      right: 10px;

  .photodisplay
    display: flex
    flex-wrap: wrap
    .item
      height: 100px
      flex: 0 0 25%
      background: #ccc
      border-radius: 5px
      margin: 3px
    .item2, .item3
      background: #ccc
      border-radius: 5px
      margin: 3px
      height: 200px
    .itemlist
      flex: 20%
      .item3
        height: 100px

  .avatarlist
    display: flex
    text-align: center
    & > .item
      flex: 1
      height: 100px
      & > i
        color: rgb(247, 186, 42)
      & > img
        height: 50px
        width: 50px
        border-radius: 50%
        background: #ccc


</style>
