<template>
  <div>
    <!-- 视频 -->
    <div class="banner">
      <!-- <video
        autoplay="autoplay"
        preload="auto"
        loop
        src="../assets/images/video.mp4"
        id="vid"
      ></video> -->
    </div>
    <!-- 关于我们 -->
    <div class="about">关于我们</div>
    <div class="eng">ENJOY YOUR MUSIC LIFE</div>
    <div class="content">
      <p>现有的音频技术因缺少协和频率，所以适应性差通过不同的模式效果播放各种音乐，其结果模式化特征取代了音乐本身所具有丰富的内涵，</p>
      <p>单调、耐听性差、体会度极低。现有的音频技术因缺少协和频率，所以适应性差通过不同的模式效果播放各种音乐，</p>
      <p>其结果模式化特征取代了音乐本身所具有丰富的内涵。</p>
    </div>

    <router-link class="more" to="/about">查看更多</router-link>
    <!-- 图片 -->
    <div class="imgbox"></div>
    <div class="desc">
      <div class="desc_left">
        <!-- 左 -->
        <div class="row1">
          <span class="spot"></span>
          <span class="title">软件与技术</span>
        </div>
        <div class="row2">声音频率修正软件与现有音频技术对比</div>
      </div>
      <div class="desc_right">
        <!-- 右 -->
        <div class="row1">
          <span class="spot"></span>
          <span class="title">软件与技术</span>
        </div>
        <div class="row2">恒光音频修复技术效果比对图</div>
      </div>
    </div>
    <!-- 说明 -->
    <div class="introduce">
      <div class="intro_left"></div>
      <div class="intro_right">
        <div class="r_title">声音频率修正软件技术说明</div>
        <div class="r_content">
          1.音频状态; 2.音频技术问题; 3.音频技术无法突破的瓶颈; 4.这项音频技术的突破点; 5.音频技术的特点; 6.目前世界上最先进的技术; 7.音频技术的价值。8.专利原则; 9.音频上的特定性能; 10.与现有音频技术的差异; 11.使用此音频技术的设备...
          12关于开发者
        </div>
        <router-link class="tomore" to="/shuoming">查看更多</router-link>
      </div>
    </div>
    <!-- 新闻资讯 -->
    <div class="about">新闻资讯</div>
    <div class="eng">COME BACK TO THE MEETING</div>
    <div class="news_box">
      <router-link to="/" class="news_item" v-for="(item,index) in 3" :key="index">
        <div class="img">
          <img src alt />
        </div>
        <div class="news_para">
          <div class="p_row1">
            <span class="spot"></span>
            <span class="des">传统音频技术只有平面细节没有前后空间细节</span>
          </div>
          <div class="p_row2">在我们的技术中有着还原音乐旋律所需的重要元素协合频率，当遇到复杂的旋律也能充分贴切的表达。</div>
        </div>
      </router-link>
    </div>
    <!-- 地图 -->
    <div class="map_box">
      <div class="map">
        <div id="map"></div>
        <div class="map_right">
          <div class="shopname">上海声豪电子科技有限公司</div>
          <div class="shopaddress">地址：上海天山路789号商住楼一号楼1204室</div>
          <div class="shoptelephone">电话：18916061956 / 15336905666</div>
          <div class="shopemail">Email: shenghaohengguang@163.com</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { MP } from "../map";
import _ from "underscore";
import "../vendor/underscore.mixin";
export default {
  data() {
    return {
      ak: "tOopWG2Z0GvoP2exXhOsp74HCko5UKdA"
    };
  },
  created() {},
  mounted() {
    this.$nextTick(function() {
      var _this = this;
      MP(_this.ak).then(BMap => {
        var map = new BMap.Map("map"); // 创建地图实例
        var point = new BMap.Point(116.404, 39.915); // 创建点坐标
        map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
        map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别
        var marker = new window.BMap.Marker(point); // 创建标注
        map.addOverlay(marker); // 将标注添加到地图
      });
    });
  }
};
</script>



