<template>
  <div id="fenlei">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="人像" name="first">
        <card >
        </card>
      </el-tab-pane>
      <el-tab-pane label="写真" name="second">
      </el-tab-pane>
      <el-tab-pane label="bady" name="third">

      </el-tab-pane>
      <el-tab-pane label="旅拍" name="fourth">

      </el-tab-pane>
      <el-tab-pane label="宠物" name="five">

      </el-tab-pane>
      <el-tab-pane label="更多" name="more">

      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script type='text/ecmascript-6'>
  import Card from '@/components/card/card'
  export default {
    name: 'fenlei',
    data () {
      return {
        activeName: 'first'
      }
    },
    methods: {
      handleClick (tab, event) {
        console.log(tab.name)
        if (tab.name === 'more') {
          this.$nextTick(function () {
            this.$router.push('/more')
          })
        }
      }
    },
    components: {
      card: Card
    }
  }
</script>

<style lang='stylus' rel='stylus'>
  #fenlei
    background: #fff
    .el-tabs__header
      background: #fff
</style>
