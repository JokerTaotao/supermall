<template>
  <div>
    <nav-bar>
      <template #center>购物街</template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import {getHomeMultidata} from "../../network/home";

export default {
  name: "Home",
  components: {
    NavBar,
  },
  data() {
    return {
      result: null,
    }
  },
  created() {
    getHomeMultidata().then(res => {
      console.log(res);
      this.result = res;
    })
  }
}
</script>

<style scoped>

</style>
