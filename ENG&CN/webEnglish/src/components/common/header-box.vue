<template>
  <div>
    <div class="headerbox">
      <div class="header safe auto">
        <div class="left_logo"></div>
        <div class="right_nav">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/shuoming">Explain</router-link>
          <router-link to="/lianxi">Contact</router-link>
          <button class="search_btn">Search</button>
          <button
            style="margin-top:10px; width:50px;height:50px;border:1px solid red"
            @click="change_color('a')"
          >紫色</button>
          <button
            style="margin-top:10px; width:50px;height:50px;border:1px solid blue"
            @click="change_color('b')"
          >绿色</button>
          <button
            style="margin-top:10px; width:50px;height:50px;border:1px solid yellow"
            @click="change_color('c')"
          >粉色</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      info: {
        shop: {}
      }
    };
  },
  created() {
    // let _this = this;
    // _this.api("index/index", { user_id: window._global.user_id }, res => {
    //   _this.render(res.data);
    // });
  },
  methods: {
    change_color(type) {
      localStorage.setItem("color_type", type);
      document.getElementById("app").className = "theme" + type;
    }
  }
};
</script>


