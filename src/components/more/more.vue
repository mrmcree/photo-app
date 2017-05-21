<template>
    <div id="more">
      <div class="header-list">
        <h1>人气</h1>
        <div class="itemwrapper">
          <div class="item" v-for="i in 4">
            <img  alt="">
            <span>jack</span>
          </div>
        </div>
        <div class="like">
          <button>全部关注</button>
        </div>
      </div>
      <div class="fenlei-list">
        <h1>分类</h1>
        <ul class="fenlei-ul">
          <li class="fenlei-li" v-for="i in 8">
            <img  alt="">
            <span class="title">人像{{i}}</span>
          </li>
        </ul>
      </div>
    </div>
</template>

<script type='text/ecmascript-6'>
    export default {
      name: 'more'
    }
</script>

<style lang='stylus' rel='stylus'>
  @import '../../com/base.styl'
  .header-list,.fenlei-list
    width :90%
    margin:20px auto
    box-shadow :0px 1px 10px 2px rgba(39, 177, 255, 0.2)
    &>h1
      text-align:center
      padding :20px
    .itemwrapper
      display :flex
      .item
        flex:1
        text-align :center
        &>img
          width :50px
          height :50px
          background :#ccc
          border-radius :50%
    .like
      display :flex
      text-align :center
      &>button
        border:0
        background :$blue
        color:#fff
        width :80px
        display :block
        padding :3px 0
        margin:10px auto
  .fenlei-list
    .fenlei-ul
      display :flex
      flex-wrap: wrap
      .fenlei-li
        flex: 1
        text-align :center
        &>img
          width :90%
          background :#ccc
          height :100px
</style>
