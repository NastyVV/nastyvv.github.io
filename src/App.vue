<template>
  <div id="app">
    <Menu></Menu>
    <router-view/>
  </div>
</template>

<script>
import "@/assets/style.less"
import Menu from "@/components/Menu";
export default {
  components: {Menu}
}

</script>
