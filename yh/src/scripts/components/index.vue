<template>
  <div>
    <router-view></router-view>
  <footer id="footer">
      <ul>
          <li
            v-bind:class="cur == $index ? 'active' : ''"
            v-on:click="changPage($index)"
            v-for="tab in tablist"
            v-link="{path: tab.path}">
              <i class="iconfont">{{{tab.icon}}}</i>
              <b>{{tab.name}}</b>
          </li>
      </ul>
  </footer>
</div>
</template>
<script>
export default {
  data() {
    return {
      cur: 0,
      tablist: [
        {path: '/index', icon: '&#xe637;', name: '首页'},
        {path: '/index/search', icon: '&#xe603;', name: '分类'},
        {path: '/index/photo', icon: '&#xe602;', name: '逛'},
        {path: '/my', icon: '&#xe856;', name: '购物车'},
        {path: '/exit', icon: '&#xe64b;', name: '我的'}
      ]
    }
  },

  methods: {
    changPage(i) {
      this.cur = i;
    }
  }
}
</script>
