<template>
  <div id="app">
    <headerBox></headerBox>
    <router-view/>
    <footBox></footBox>
    <Loading/>
  </div>
</template>

<script>
import _ from 'underscore'
import './vendor/underscore.mixin'
import headerBox from "@/components/common/header-box"
import footBox from "@/components/common/foot-box";
import Loading from "./components/common/Loading";
export default {
  name: "App",
  components:{headerBox,footBox,Loading},
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

