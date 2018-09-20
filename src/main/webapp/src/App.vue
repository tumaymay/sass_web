<template>
  <div id="app">
    
        <home-logo></home-logo>
        <home-header></home-header>
      <keep-alive>
        <router-view/>
      </keep-alive>
  </div>
</template>

<script>
import HomeLogo from './common/Logo'
import HomeHeader from './common/Header'
export default {
    name: 'App',
    components:{
      HomeLogo,
      HomeHeader,
    },
    
}
</script>

<style>
body{
  background-color: #f6f6f6;
  font-family: 微软雅黑, 黑体, Calibri, Calibri, Verdana;
  color:#1a1a1a;
}
</style>
