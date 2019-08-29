<template>
  <div>
    <div class="ban"></div>
    <div class="content_copy">
      <!-- 固定定位 -->
      <div class="content_left" v-show="flag">
        <div class="left_title">说明</div>
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
          <div class="title_1">音频现状</div>
          <div class="img_box">
            <img src alt />
          </div>
        </div>
        <div class="part_1 m-t-30">
          <div class="title_1">音频存在的技术问题</div>
          <div class="img_box">
            <img src alt />
          </div>
        </div>
        <div class="part_1 m-t-30">
          <div class="title_1">音频技术无法突破的瓶颈</div>
          <div class="img_box">
            <img src alt />
          </div>
        </div>
        <div class="part_1 m-t-30">
          <div class="title_1">此音频技术的突破点</div>
          <div class="img_box">
            <img src alt />
          </div>
        </div>
        <div class="part_1 m-t-30">
          <div class="title_1">此音频技术特色</div>
          <div class="img_box">
            <img src alt />
          </div>
        </div>
        <div class="part_1 m-t-30">
          <div class="title_1">目前为全球最先进技术</div>
          <div class="img_box">
            <img src alt />
          </div>
        </div>
        <div class="part_1 m-t-30">
          <div class="title_1">此音频技术价值</div>
          <div class="img_box">
            <img src alt />
          </div>
        </div>
        <div class="part_1 m-t-30">
          <div class="title_1">专利原理说明</div>
          <div class="img_box">
            <img src alt />
          </div>
        </div>
        <div class="part_1 m-t-30">
          <div class="title_1">音频上的具体表现</div>
          <div class="img_box">
            <img src alt />
          </div>
        </div>
        <div class="part_1 m-t-30">
          <div class="title_1">与现有音频技术的差异</div>
          <div class="img_box">
            <img src alt />
          </div>
        </div>
        <div class="part_1 m-t-30">
          <div class="title_1">已实现的设备</div>
          <div class="img_box">
            <img src alt />
          </div>
        </div>
        <div class="part_1 m-t-30">
          <div class="title_1">研发人</div>
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
        "音频现状",
        "音频存在的技术问题",
        "音频技术无法突破的瓶颈",
        "此音频技术的突破点",
        "此音频技术特色",
        "目前为全球最先进技术",
        "此音频技术价值",
        "专利原理说明",
        "音频上的具体表现",
        "与现有音频技术的差异",
        "已实现的设备",
        "研发人"
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


