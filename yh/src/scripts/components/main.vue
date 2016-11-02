<template>
  <div class="contain">
  <div id="section">
  <div class="nav">
  <span class="iconfont">&#xe694;</span>
  <span></span>
  <span class="iconfont">&#xe63b;</span>
  </div>
  <!-- banner图 -->
  <div class="swiper-container">
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
  <div id="classify">
    <ul>
      <li v-for="l in data"><span><i><img v-bind:src="l.src" alt=""></i><br/><b>{{l.title}}</b></span></li>
    </ul>
    <ul>
      <li v-for="s in dataone"><span><i><img v-bind:src="s.src" alt=""></i><br/><b>{{s.title}}</b></span></li>
    </ul>
  </div>
  <!-- logo1 -->
  <div class="logo0ne">
    <img src="https://img11.static.yhbimg.com/yhb-img01/2016/10/19/16/012aac0662642672e933f51c3c19bcd44f.jpg?imageView2/2/w/640/h/200/q/90"/>
    <img src="https://img10.static.yhbimg.com/yhb-img01/2016/10/19/16/01ca7dc972f5783f24d424527f47d4b175.jpg?imageView2/2/w/640/h/200/q/90"/>
  </div>
  <div class="classword">
    <h2>热门品类</h2>
  </div>
  <div class="listmap">
    <ul>
      <li v-for="n in listmap"><span><i><img v-bind:src="n.src"></i></span></li>
    </ul>
  </div>
  <div class="bannertwo">
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="https://img10.static.yhbimg.com/yhb-img01/2016/10/10/16/01ed59132eb5c81dc8e055db46fa28bbe2.jpg?imageView2/2/w/640/h/200/q/90"/></div>
            <div class="swiper-slide"><img src="https://img10.static.yhbimg.com/yhb-img01/2016/10/19/16/010d908c438e266281df306460dd1694e7.jpg?imageView2/2/w/640/h/200/q/90"/></div>
        </div>
          <div class="swiper-pagination"></div>
    </div>
  </div>
  <div class="classword">
    <h2>热门品牌</h2>
  </div>
  <div class="listmap waimap">
    <ul>
      <li v-for="n in wai"><span><i><img v-bind:src="n.src"><br/><b>{{{n.title}}}</b></i></span></li>
    </ul>
  </div>
  <div class="bannertwo">
  <div class="swiper-container">
      <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="https://img11.static.yhbimg.com/yhb-img01/2016/09/06/20/0143eec063536a3af7a94cc8aa389053de.jpg?imageView2/2/w/640/h/200/q/90"/></div>
          <div class="swiper-slide"><img src="https://img11.static.yhbimg.com/yhb-img01/2016/09/06/20/0143eec063536a3af7a94cc8aa389053de.jpg?imageView2/2/w/640/h/200/q/90"/></div>
      </div>
        <div class="swiper-pagination"></div>
  </div>
    </div>
    <div id="moreupdata">

    </div>
    <div class="more-data" v-for="n in map">
    <h2>{{n.title}}</h2>
    <div class="more-img">
    <img v-bind:src="n.srcone"/>
    </div>
    <div class="more-listimg">
      <div class="more-listimg-left">
        <img v-bind:src="n.srctwo"/>
      </div>
      <div class="more-listimg-right">
       <ul>
        <li><img v-bind:src="n.srcthree"/></li>
        <li><img v-bind:src="n.srcfour"/></li>
        <li><img v-bind:src="n.srcfive"/></li>
        <li><img v-bind:src="n.srcsix"/></li>
       </ul>
      </div>
    </div>
    </div>
    <div class="foot">
      <img src="/images/arrow.png"/>
      <span>上拉加载更多...</span>
    </div>
  </div>
</div>
</template>
<script>
var Vue =require('../libs/vue.js');
var VueResource = require('../libs/vue-resource');
Vue.use(VueResource);
import commonUtil from "../utils/common.util.js"
export default {
  data(){
  return {
    aside:'',
    data:[],
    dataone:[],
    listmap:[],
    wai:[],
    map:[]
  }
  },
  ready:function(){
      var that = this;
      this.$http.get('/rest/data')
     .then((res)=>{
      this.data=res.data.data;
    });
    this.$http.get('/rest/wai')
   .then((res)=>{
    this.wai=res.data.data;
  });
     that.$http.get('/rest/dataone')
    .then((res)=>{
     this.dataone=res.data.data;
   });
   this.$http.get('/rest/listmap')
  .then((res)=>{
   this.listmap=res.data.data;
 });
 // 下拉加载的数据，在加载数据的时候要执行的步骤
   var mySwiper = new Swiper ('.swiper-container', {
   direction: 'horizontal',
   autoplay : 3000,
   loop: true,
   speed:300,
   pagination : '.swiper-pagination',
   paginationClickable :true,
   autoplayDisableOnInteraction : false
  });
  Vue.nextTick(function() {
      commonUtil.isAllLoaded('.contain', function() {
          var myScroll = new IScroll('.contain', {
              probeType: 3,
              mouseWheel: true,
              click: true
          });
            myScroll.scrollTo(0, 0);
            var foot = $('.foot img'),
                bottomImgHasClass = foot.hasClass('down');
                myScroll.on('scroll', function() {
                    var y = this.y,
                        maxY = this.maxScrollY - y;
                        // console.log('y:'+y);
                        // console.log('maxScrollY:'+this.maxScrollY);
                        // console.log('maxY:'+maxY);
                    if (maxY >= 0) {
                        !bottomImgHasClass && foot.addClass('down');
                        return '';
                    }
                });
                  myScroll.on('scrollEnd', function(){
                    var self = this;
                    var maxY = this.maxScrollY - this.y;
                    if (maxY > -30 && maxY < 0) {
                        myScroll.scrollTo(0, self.maxScrollY + 30);
                        foot.removeClass('down')
                    } else if (maxY >= 0) {
                        foot.attr('src', '/images/ajax-loader.gif');
                        //ajax上拉加载数据
                        setTimeout(function(){
                          that.$http.get('/rest/map')
                              .then((res) => {
                                that.map = that.map.concat(res.data.data);
                                foot.removeClass('down');
                                foot.attr('src', '/images/arrow.png');
                                Vue.nextTick(function() {
                                  myScroll.refresh();
                                  myScroll.scrollTo(0, self.maxScrollY + 30,1000);
                                });
                              });
                        },300);

                      }
                  });
        });
      });
}
}
</script>
