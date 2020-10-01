<template>
  <div id="app">
    <Menu></Menu>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import "@/assets/reset.css"
import "@/assets/style.less"
import Menu from "@/components/Menu";
export default {
  components: {Menu}
}

</script>
