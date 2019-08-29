<template>
  <div id="app">
    <transition name="slide-right">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
    <Loading />
    <footerBox />
  </div>
</template>

<script>
import _ from "underscore";
import "./vendor/underscore.mixin";
import footerBox from "./components/common/footer";
import Loading from "./components/common/Loading";

export default {
  components: { footerBox, Loading },
};
</script>

<style>
</style>
