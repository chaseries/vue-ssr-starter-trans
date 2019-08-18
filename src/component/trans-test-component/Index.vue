<template>
  <div>
    <up-and-in>
      <div>Hi, I am in Index. I should come up and in on page load, and down and out on page leave.</div>
    </up-and-in>
  </div>
</template>


<script>
import UpAndIn from "VUE_COMPONENT/trans-wrappers/UpAndIn.vue";


export default {
  components: {
    UpAndIn
  }
};
</script>
