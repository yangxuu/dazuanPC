<template>
  <div>
    <div class="ban"></div>
    <div class="content_copy">
      <!-- 固定定位 -->
      <div class="content_left" v-show="flag">
        <div class="left_title">EXPLAIN</div>
        <ul>
          <li v-for="(item,index) in arr" :key="index" @click="scroll(index)">
            <div class="floor_t" :class="showpot==index?'pot':'default'"></div>
            <div class="floor_d" :class="showpot==index?'bolder':'default'">{{item}}</div>
          </li>
          <div class="totop" @click="scrollTop">返回顶部</div>
        </ul>
      </div>
      <!-- 主题内容 -->
      <div class="content_right">
        <div class="part_1">
          <div class="title_1">Status of audio</div>
          <div class="img_box">
            <img src alt />
          </div>
        </div>
        <div class="part_1 m-t-30">
          <div class="title_1">Technical problems with audio</div>
          <div class="img_box">
            <img src alt />
          </div>
        </div>
        <div class="part_1 m-t-30">
          <div class="title_1">Bottlenecks that audio technology can't break through</div>
          <div class="img_box">
            <img src alt />
          </div>
        </div>
        <div class="part_1 m-t-30">
          <div class="title_1">Breakthrough points of this audio technology</div>
          <div class="img_box">
            <img src alt />
          </div>
        </div>
        <div class="part_1 m-t-30">
          <div class="title_1">Features of this audio technology</div>
          <div class="img_box">
            <img src alt />
          </div>
        </div>
        <div class="part_1 m-t-30">
          <div class="title_1">The most advanced technology in the world at present</div>
          <div class="img_box">
            <img src alt />
          </div>
        </div>
        <div class="part_1 m-t-30">
          <div class="title_1">Value of the audio technology</div>
          <div class="img_box">
            <img src alt />
          </div>
        </div>
        <div class="part_1 m-t-30">
          <div class="title_1">Patent principle</div>
          <div class="img_box">
            <img src alt />
          </div>
        </div>
        <div class="part_1 m-t-30">
          <div class="title_1">Specific performances on audio</div>
          <div class="img_box">
            <img src alt />
          </div>
        </div>
        <div class="part_1 m-t-30">
          <div class="title_1">Differences from existing audio technologies</div>
          <div class="img_box">
            <img src alt />
          </div>
        </div>
        <div class="part_1 m-t-30">
          <div class="title_1">Devices with this audio technology</div>
          <div class="img_box">
            <img src alt />
          </div>
        </div>
        <div class="part_1 m-t-30">
          <div class="title_1">About the developer</div>
          <div class="img_box">
            <img src alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: false,
      showpot: 0,
      arr: [
        "Status of audio",
        "Technical problems with audio",
        "Bottlenecks that audio technology can't break through",
        "Breakthrough points of this audio technology",
        "Features of this audio technology",
        "The most advanced technology in the world at present",
        "Value of the audio technology",
        "Patent principle",
        "Specific performances on audio",
        "Differences from existing audio technologies",
        "Devices with this audio technology",
        "About the developer"
      ]
    };
  },
  created() {},
  mounted() {
    window.addEventListener("scroll", () => {
      var st = document.body.scrollTop || document.documentElement.scrollTop;
      this.flag = st > 280;
    });
  },
  methods: {
    scroll(index) {
      this.showpot = index;
      let number = 285 + 725 * index;
      window.scrollTo(0, number);
    },
    scrollTop() {
      window.scroll(0, 0);
      this.showpot = 0;
    }
  }
};
</script>
