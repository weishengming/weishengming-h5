<template>
  <div class="home tabcontent">
    <language />
    <x-tabbar v-model="active">
      <x-tabbar-item icon="tableware" to="/">{{$t('tabBar.order')}}</x-tabbar-item>
      <x-tabbar-item icon="order" to="/tracking">{{$t('tabBar.tracking')}}</x-tabbar-item>
      <x-tabbar-item icon="discover" to="/discover">{{$t('tabBar.discover')}}</x-tabbar-item>
      <x-tabbar-item icon="me" to="/me">{{$t('tabBar.me')}}</x-tabbar-item>
    </x-tabbar>
  </div>
</template>
<script>
  import language from "components/home/language"
  export default {
    name: "index",
    data(){
      return{
        active:0,
      }
    },
    components:{
        language
    }
  }
</script>
<style scoped lang="less">
  @import "index";
</style>