<template>
  <header>
    <ul>
      <li><trans-link to="/">Home</trans-link></li>
      <li><trans-link to="/about">About</trans-link></li>
    </ul>
  </header>
</template>


<script>
import TransLink from "VUE_COMPONENT/trans-link/Index.vue";


export default {
  name: "layout-header",
  components: {
    TransLink
  }
};
</script>
