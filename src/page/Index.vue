<template>
  <div>
    <up-and-in>
      <div>I'm homepage content that should come up and in on page enter and go down and out on page leave.</div>
    </up-and-in>
  </div>
</template>

<script>
import UpAndIn from "VUE_COMPONENT/trans-wrappers/UpAndIn.vue";


export default {
  name: "page-index",
  components: {
    UpAndIn
  }
};
</script>
