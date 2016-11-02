<template>
  <div class="m-guide">
    <div class="swiper-container" id="guide-swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="img in imgs" track-by="$index">
          <img v-if="$index==3" v-bind:src="img" v-link="{path:'/index'}">
          <img v-else v-bind:src="img">
        </div>
      </div>
    </div>
  </div>
</template>
</template>
<script>
import { tabChanger } from '../vuex/actions';
export default {
  vuex: {
    actions: {
      change: tabChanger
    }
  },
  data() {
    return {
      imgs: ['https://img11.static.yhbimg.com/yhb-img01/2016/10/25/16/01fd5ab27982a3301189cd2e24280edd45.jpg?imageView2/2/w/640/h/800/q/90',
       'https://img11.static.yhbimg.com/yhb-img01/2016/10/25/16/01fd5ab27982a3301189cd2e24280edd45.jpg?imageView2/2/w/640/h/800/q/90',
       'https://img11.static.yhbimg.com/yhb-img01/2016/10/25/16/01fd5ab27982a3301189cd2e24280edd45.jpg?imageView2/2/w/640/h/800/q/90',
       'https://img11.static.yhbimg.com/yhb-img01/2016/10/25/16/01fd5ab27982a3301189cd2e24280edd45.jpg?imageView2/2/w/640/h/800/q/90']
    }
  },
  ready() {
    let mySwiper = new Swiper("#guide-swiper");
    this.change(0);
  }
}
</script>
