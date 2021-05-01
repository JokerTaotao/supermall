<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      scroll: null,
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      observeDOM: true,
    })

    this.scroll.on('scroll', (pos)=>{
      this.$emit('scroll',pos)
    })

    this.scroll.on('pullingUp',() => {
      this.$emit('pullingUp')
    })
  },
  methods: {
    toTop(x, y, time=300) {
      this.scroll.scrollTo(x, y, time)
    },
    finishPullUp() {
      this.scroll.finishPullUp()
    }
  }
}
</script>

<style scoped>
.wrapper {
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden
}
</style>
