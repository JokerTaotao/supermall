<template>
  <div id="app">
    <router-link to="/category"></router-link>
    <router-view></router-view>
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from "./components/content/mainTabbar/MainTabBar";
  export default {
    name: 'App',
    components: {
      MainTabBar
    }
}
</script>

<style>
  @import "assets/css/base.css";
</style>
