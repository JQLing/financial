<template>
  <div id="app">
    <transition>
      <keep-alive>
        <router-view></router-view>
        <!-- router-view(v-cloak) -->
      </keep-alive>
    </transition>
  </div>
</template>
<style src="@/assets/css/reset.styl" lang="stylus"></style>
<style src="@/assets/css/common.styl" lang="stylus"></style>
<style src="@/assets/css/icon.styl" lang="stylus"></style>
<style src="@/assets/css/font.styl" lang="stylus"></style>

<script>
export default {
  name: 'App'
  // computed: {
  //     hasHistory: () => document.referrer
  //   },
  //   created () {
  //     console.info(this.hasHistory)
  //   }
}
</script>
