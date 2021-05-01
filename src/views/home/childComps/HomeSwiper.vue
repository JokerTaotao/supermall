<template>
  <div>
    <swiper>
      <template v-for="item in banners">
        <swiper-item>
          <a :href="item.link">
            <img :src="item.image" alt="">
          </a>
        </swiper-item>
      </template>
    </swiper>
  </div>
</template>

<script>
import SwiperItem from "../../../components/common/swiper/SwiperItem";
import Swiper from "../../../components/common/swiper/Swiper";

export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default(){
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>

</style>
