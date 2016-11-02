<template>
  <div class="guang-cotain">
   <div class="guang-section">
  <div class="commonheader-nav">
    <span class="iconfont" v-link="{path:'/index'}">&#xe632;</span><h2>逛</h2><span class="iconfont">&#xe600;</span>
  </div>
  <!-- 下面分页的小导航 -->
  <div class="guang-nav">
  <span>推荐</span><span>话题</span><span>搭配</span><span>潮人</span><span>潮品</span><span>专题</span>
  </div>
  <div class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide">
              <div id="gogogo" class="swiper-container">
                  <div class="swiper-wrapper">
                      <div class="swiper-slide"><img src="https://img10.static.yhbimg.com/yhb-img01/2016/10/19/16/015497af9b0c792772478c8126d05b65ac.jpg?imageView2/2/w/640/h/240/q/90"/></div>
                      <div class="swiper-slide"><img src="https://img11.static.yhbimg.com/yhb-img01/2016/10/19/16/01dcab31a94cb0a140356ea509dca3b879.jpg?imageView2/2/w/640/h/240/q/90"/></div>
                      <div class="swiper-slide"><img src="https://img11.static.yhbimg.com/yhb-img01/2016/10/19/16/0194efa38b7fb5df9a4e50e66d31a43435.jpg?imageView2/2/w/640/h/240/q/90"/></div>
                      <div class="swiper-slide"><img src="https://img10.static.yhbimg.com/yhb-img01/2016/10/19/16/01cb4ada42b5853b042fb3838e9df5b210.jpg?imageView2/2/w/640/h/240/q/90"/></div>
                      <div class="swiper-slide"><img src="https://img11.static.yhbimg.com/yhb-img01/2016/10/19/16/0167bd299dd3496b93d72f2cfa9c2696af.jpg?imageView2/2/w/640/h/240/q/90"/></div>
                      <div class="swiper-slide"><img src="https://img10.static.yhbimg.com/yhb-img01/2016/10/19/16/016ff44a736f9efeff22db1675c92a7eda.jpg?imageView2/2/w/640/h/240/q/90"/></div>
                      <div class="swiper-slide"><img src="https://img10.static.yhbimg.com/yhb-img01/2016/10/19/17/01201e0dc8dcf8ea8523159b501081dfa4.jpg?imageView2/2/w/640/h/240/q/90"/></div>
                      <div class="swiper-slide"><img src="https://img11.static.yhbimg.com/yhb-img01/2016/10/20/15/0187e5fa09809964ba327dec7975cdc14e.jpg?imageView2/2/w/640/h/240/q/90"/></div>
                  </div>
                    <div class="swiper-pagination"></div>
                 </div>
               第一页
          </div>
          <div class="swiper-slide">第二页</div>
          <div class="swiper-slide">第三页</div>
          <div class="swiper-slide">第四页</div>
          <div class="swiper-slide">第五页</div>
          <div class="swiper-slide">第六页</div>
      </div>
     </div>
   </div>
  </div>
</template>
<script>
// swipergogo
  export default {
    ready :function(){
      var mySwiper = new Swiper ('.swiper-container', {
      direction: 'horizontal',
      // autoplay : 3000,
      // loop: true,
      speed:300,
      pagination : '.swiper-pagination',
      paginationClickable :true,
      autoplayDisableOnInteraction : false
     });
  //  ***************
    var goSwiper = new Swiper ('#gogogo', {
    direction: 'horizontal',
    autoplay : 3000,
    loop: true,
    speed:300,
    pagination : '.gogogoswiper',
    paginationClickable :true,
    autoplayDisableOnInteraction : false
   });
  }
  // **********
  }
</script>
