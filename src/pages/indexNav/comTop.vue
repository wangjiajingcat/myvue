<template>
    <div class="header">
      <div class="header-back">
        <span class="iconfont">&#xe600;</span>
      </div>
      <div class="icon-center">
        <span class="iconfont">&#xe611;</span>
        输入城市/景点/游玩主题
      </div>
      <div class="icon-right">
        北京<span class="iconfont">&#xe68e;</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'comTop'
}
</script>

<style lang="stylus" scoped>
  .header
    height :.88rem;
    display :flex;
    background-color :#00bcd4;
   .header-back
       height:.88rem;
       background-color :#00bcd4;
       line-height :.88rem;
       color :#ffffff;
       padding-left:.3rem;
    .icon-center
      flex :1;
      background: #ffffff
      height: .64rem
      line-height:.64rem
      color:#e4e7ea
      border-radius: .06rem
      margin-left: .6rem
      margin-top: .12rem
      padding:0 .2rem
     .icon-right
       margin-left :.6rem;
       width :1.3rem;
       line-height :.88rem;
       color :#ffffff;
</style>
