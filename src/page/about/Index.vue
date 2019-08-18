<template>
  <div>
  <up-and-in>
    <div>
      Hi, I am in About. I should come up and in on page load, and down and out on page leave.
      <rotate-around>
        <div>Subcomponent woo!</div>
      </rotate-around>
    </div>
  </up-and-in>
  </div>
</template>

<script>
import RotateAround from "VUE_COMPONENT/trans-wrappers/RotateAround.vue";
import UpAndIn from "VUE_COMPONENT/trans-wrappers/UpAndIn.vue";


export default {
  name: "page-about",
  components: {
    UpAndIn,
    RotateAround
  }
};
</script>
