<template>
  <div>
    <div class="pos-fix-box">
      <div class="page-title-box b-b-1">
        <tele/>
        <div class="text">在线咨询</div>
      </div>
    </div>
    <div class="put-word">发布您的留言。</div>
    <div class="container global-form-box">
      <form method="post" action>
        <div class="row ipt-name">您的姓名</div>
        <div class="row ipt-box">
          <input class="input-text" v-model="uname" type="text" name :placeholder="uname_placeholder">
        </div>

        <div class="row ipt-name">联系方式</div>
        <div class="row ipt-box">
          <input class="input-text" v-model="tele" type="text" name :placeholder="tele_placeholder">
        </div>
        <div class="row ipt-name">留言主题</div>
        <div class="row ipt-box">
          <input class="input-text" v-model="title" type="text" name :placeholder="title_placeholder">
        </div>
        <div class="row ipt-name">留言内容</div>
        <div class="row ipt-box">
          <textarea
            name
            v-model="info"
            :placeholder="info_placeholder"
            class="input-text pc-100 bd-bottom"
            rows="5"
          ></textarea>
        </div>
        <div class="row m-t-88 submit-height">
          <div class="col-xs-12">
            <a class="btn btn-purple btn-lg pc-100" @click="submit">提交</a>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import _ from "underscore";
import "../vendor/underscore.mixin";
import tele from "./common/tele";
import copyright from "./common/copyright";
export default {
  components: { tele, copyright },
  data() {
    return {
      uname: "",
      uname_placeholder: "请输入姓名",
       tele: "",
      tele_placeholder: "请输入联系方式",
      title: "",
      title_placeholder: "请输入留言主题",
      info: "",
      info_placeholder: "请输入留言内容",
    };
  },
  created() {
    let _this = this;
  },
  methods: {
    submit() {
      var _this = this;
      let data = {
        uname: _this.uname,
        tele:_this.tele,
        title: _this.title,
        info: _this.info,
      };
      if (_.empty(_this.uname)) {
        return alert(_this.uname_placeholder);
      }
      if (_.empty(_this.tele)) {
        return alert(_this.tele_placeholder);
      }
      if (_.empty(_this.title)) {
        return alert(_this.title_placeholder);
      }
      if (_.empty(_this.info)) {
        return alert(_this.info_placeholder);
      }
       _this.$store.commit("loading_show")
      _this.api("feedback/add", data, function(resp) {
        alert("添加成功");
        _this.uname='';
        _this.title='';
        _this.info='';
        _this.tele='';
         _this.$store.commit("loading_hide")
      })
    }
  }
}
</script>
<style scoped>
</style>
