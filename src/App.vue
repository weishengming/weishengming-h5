<template>
  <div>
    <transition :name="transitionName">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="less">
  @import "assets/less/main.less";
</style>

<script>

    export default {
        name: 'app',
        data () {
            return {
                transitionName: ''
            }
        },
        created () {

        },
        watch: {
            $route (to, from) {
                if (to.meta.index > from.meta.index) {
                    this.transitionName = 'slide-left'
                } else if (to.meta.index < from.meta.index) {
                    this.transitionName = 'slide-right'
                } else {
                    this.transitionName = 'fade'
                }
            }
        }
    }
</script>
