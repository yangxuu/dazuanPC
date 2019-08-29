<template>
  <div id="app">
    <!-- header -->
    <headerBox></headerBox>
    <!-- body -->
    <router-view/>
    <!-- footer -->
    <footBox></footBox>
  </div>
</template>

<script>
import _ from 'underscore'
import './vendor/underscore.mixin'
import headerBox from "@/components/header-box"
import footBox from "@/components/foot-box"
export default {
  name: "App",
  components:{headerBox,footBox},
    created() {
        let _this = this
        let settings = _this.settings()
        if (settings && _.time() - settings.update_time < 3600 && false) {
            return;
        }
        _this.api('public/settings', {}, (resp) => {
            resp.data.update_time = _.time()
            _this.settings(resp.data)
        })
    }
};
</script>

<style>

</style>
