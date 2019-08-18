<template>
  <trans name="up-and-in">
    <slot></slot>
  </trans>
</template>

<script>
import Trans from "VUE_COMPONENT/trans/Index.vue";

export default {
  components: {
    Trans
  }
};
</script>

<style lang="sass">

.up-and-in-enter-active, .up-and-in-leave-active
  transition: transform 0.5s linear

.up-and-in-enter
  transform: translateY(500%)

.up-and-in-leave-active
  transform: translateY(500%)

</style>

