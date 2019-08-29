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
      ></video>-->
    </div>
    <!-- 关于我们 -->
    <div class="about">ABOUT US</div>
    <div class="eng">ENJOY YOUR MUSIC LIFE</div>
    <div class="content">
      <p>Audio must come back soon, come back to the meeting, come back to the meeting, come back, come back to Kazakhstan, well, then you go</p>
      <p>home and blossom and bear fruit.come back to Kazakhstan, well, then you go home and blossom and bear fruit.</p>
      <p>well, then you go home and blossom and bear fruit.</p>
    </div>

    <router-link class="more" to="/about">View more</router-link>
    <!-- 图片 -->
    <div class="imgbox"></div>
    <div class="desc">
      <div class="desc_left">
        <!-- 左 -->
        <div class="row1">
          <span class="spot"></span>
          <span class="title">Software and Technology</span>
        </div>
        <div
          class="row2"
        >Differences between Audio Frequency Correction Software and Current Audio Technology.</div>
      </div>
      <div class="desc_right">
        <!-- 右 -->
        <div class="row1">
          <span class="spot"></span>
          <span class="title">Software and Technology</span>
        </div>
        <div
          class="row2"
        >Differences between Audio Frequency Correction Software and Current Audio Technology.</div>
      </div>
    </div>
    <!-- 说明 -->
    <div class="introduce">
      <div class="intro_left"></div>
      <div class="intro_right">
        <div class="r_title">Technical Description of Audio frequency correction ...</div>
        <div
          class="r_content"
        >1.Status of audio. 2.Technical problems with audio. 3.Bottlenecks that audio technology can't break through. 4.Breakthrough points of this audio technology. 5.Features of this audio technology. 6.The ...</div>
        <router-link class="tomore" to="/shuoming">View more</router-link>
      </div>
    </div>
    <!-- 新闻资讯 -->
    <div class="about">NEWS AND INFORMATION</div>
    <div class="eng">COME BACK TO THE MEETING</div>
    <div class="news_box">
      <router-link to="/" class="news_item" v-for="(item,index) in 3" :key="index">
        <div class="img">
          <img src alt />
        </div>
        <div class="news_para">
          <div class="p_row1">
            <span class="spot"></span>
            <span class="des">Software and Technology</span>
          </div>
          <div
            class="p_row2"
          >Differences between Audio Frequency Correction Software and Current Audio Technology.</div>
        </div>
      </router-link>
    </div>
    <!-- 地图 -->
    <div class="map_box">
      <div class="map">
        <div id="map"></div>
        <div class="map_right">
          <div class="shopname">Shanghai Shenghao Electronic Technology Co., Ltd.</div>
          <div class="shopaddress">Address：1204room no1 tianshan building 789 tianshan road shanghai</div>
          <div class="shoptelephone">Contact: 15336905666</div>
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
  },
  methods: {}
};
</script>
