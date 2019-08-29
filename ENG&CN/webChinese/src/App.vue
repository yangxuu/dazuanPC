<template>
  <div id="app">
    <headerBox></headerBox>
    <router-view />
    <footBox></footBox>
    <Loading />
  </div>
</template>

<script>
import _ from "underscore";
import "./vendor/underscore.mixin";
import headerBox from "@/components/common/header-box";
import footBox from "@/components/common/foot-box";
import Loading from "./components/common/Loading";
export default {
  name: "App",
  components: { headerBox, footBox, Loading },
  data() {
    return {
      type: ""
    };
  },
  created() {
    this.type = localStorage.getItem("color_type");
  },
  mounted() {
    document.getElementById("app").className = "theme" + this.type;
  }
};
</script>
<style lang='less'>
@import "../src/assets/color.less";
.theme();

.themea {
  .theme(@backcolor:#333);
}
.themeb {
  .theme(@backcolor:#dedede);
}
.themec {
  .theme(@backcolor:#f5f5f5);
}
</style>

