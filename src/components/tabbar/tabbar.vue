<template>
    <div id="tabbar">

        <div class="tab-item">
          <router-link to="/">
            <i class="fa fa-home"></i>首页
          </router-link>
          <router-link to="/fenlei">
            <i class="fa fa-th-large "></i>发现
          </router-link>
          <router-link to="/mes">
            <i class="fa fa-bell "></i>消息
          </router-link>
          <router-link to="/personal">
            <i class="fa fa-user "></i>我的
          </router-link>
        </div>

    </div>
</template>

<script type='text/ecmascript-6'>
    export default {
      name: 'tabbar'
    }
</script>

<style lang='stylus' rel='stylus'>
@import "../../com/base.styl"
 #tabbar
    background: #fff
    position: fixed
    width: 100%
    right: 0
    bottom: 0
    text-align: center
    box-shadow: 1px 10px 10px 10px rgba(39, 177, 255, 0.4)
    .tab-item
      display: flex
      list-style: none
      width: 100%
      & > a
        text-decoration: none
        color: $gray
        display: block
        font-size: 13px
        flex: 1
        padding: 7px
        display: block
        &.router-link-exact-active
          color: $blue
          & > i
            color: $blue
        & > i
          font-size: 24px
          color: $gray
          display: block


</style>
