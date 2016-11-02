<template>
<div class="search-contain">
<div id="search-section">
<div class="search-nav">
<span class="iconfont" v-link="{path:'/index'}">&#xe632;</span><h2>商品分类</h2><span class="iconfont">&#xe600;</span>
</div>
<div class="search-sea">
<input type="text"  placeholder="搜索商品">
</div>
<div class="search-list">
<ul>
  <li>Boys</li>
  <li>Girls</li>
  <li>Kids</li>
  <li>Lifetyle</li>
</ul>
</div>
<div class="search-both">
  <ul>
    <li v-link="{path:'/index/search/user'}">上衣</li>
    <li v-link="{path:'/index/search/kz'}">裤装</li>
    <li v-link="{path:'/index/search/xx'}">鞋靴</li>
    <li v-link="{path:'/index/search/bl'}">包类</li>
    <li v-link="{path:'/index/search/fs'}">服饰</li>
    <li v-link="{path:'/index/search/ny'}">内衣/家居服</li>
    <li v-link="{path:'/index/search/mz'}">美妆/个护</li>
  </ul>
  <div id="searcht">
     <router-view></router-view>
  </div>
</div>
</div>
</div>
</template>
<script>
export default {
  ready:function () {
    var myScroll = new IScroll('.search-contain', {
        probeType: 3,
        mouseWheel: true,
        click: true
    });
  }
}
</script>
