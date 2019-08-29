<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: hidden;
}
li{
  list-style: none;
}
a{
  text-decoration: none;
}
body{
  margin: 0;
}
ul{
  margin: 0;
  padding: 0;
}
body,html,h1,h2,h3,h4,h5,h6,b,strong,p,header,nav,footer,section,figure,ul,dl,dt,dd,input,fieldset{margin:0;padding:0;
font-family:'Arial', Helvetica, Arial, "Microsoft Yahei", sans-serif;	/* 12 / 16 = 0.75;  21 / 12 = 1.75 */}
</style>
