<template>
  <div>
    <div class="box">
      <div class="body">
        哎呀！页面跑掉啦~
        <div>
        赶快回到
          <router-link to="/">首页</router-link>
        </div>
      </div>
    
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.box {
  position: fixed;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  background: rgba(255, 255, 255, 1);
}
.body {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 300px;
  color: orangered;
  font-size: 30px;
  text-align: center;
}
.body a{
  color: blue;
}
</style>

