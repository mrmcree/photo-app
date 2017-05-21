<template>
    <div id="card">
      <div class="card-header">
        <img src="" alt="">
        <div class="des">
          <div class="name">jack</div>
          <div class="point">人像 写真 艺术</div>
        </div>
        <div class="time">2min前</div>
      </div>
      <div class="card-content">
        <img src="" alt="">
        <div class="desc">#人像 写真 Baby</div>
      </div>
      <div class="card-foot">
        <div class="like">
          <i class="fa fa-heart"></i> 25</div>
        <div class="pinglun"><i class="fa fa-commenting-o"></i> 12条评论</div>
        <div class="price">600元/人</div>
      </div>
    </div>
</template>

<script type='text/ecmascript-6'>
export default {
  name: 'card'
}
</script>

<style lang='stylus' rel='stylus'>
  @import '../../com/base.styl'
  #card
    width :90%
    margin:0 auto
    box-shadow :0px 1px 10px 2px rgba(39, 177, 255, 0.2)
    background :#fff
    margin-bottom :10px
    .card-header
      &>img
        width :50px
        height :50px
        background :#f3f3f3
        border-radius :50%
      &>div
        display :inline-block
      &>.des
        padding-left :20px
        width :65%
        &>.name,.&.point
          display :block
        &>.point
          color:color-select(0.5)
      &>.time
        font-size:12px
        color:color-select(0.3)

    .card-content
      color:color-select(0.5)
      padding-top :10px
      text-align :center
      &>.desc
        padding :20px
        text-align :left
      &>img
        width :90%
        border-radius :5px
        height :200px
        background :#f3f3f3

    .card-foot
      font-size:12px
      padding-bottom :10px
      .like
        padding-left :10px
        padding-right :20px
        color:$blue
        &>i
          color:red
          font-size:14px
       &>div
        display :inline-block
      .pinglun
        padding-right :100px
        color:$blue
        &>i
          color:#000
          font-size:14px
      .price
        color:green
        font-size:14px
</style>
