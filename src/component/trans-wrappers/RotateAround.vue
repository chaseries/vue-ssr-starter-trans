<template>
  <div>
  <trans name="rotate-around">
    <slot></slot>
  </trans>
  </div>
</template>


<script>
import Trans from "VUE_COMPONENT/trans/Index.vue";


export default {
  name: "rotate-around",
  components: {
    Trans
  }
};
</script>


<style lang="sass" scoped>

.rotate-around-enter-active, .rotate-around-leave-active
  position: absolute
  transition: transform 0.5s linear

.rotate-around-enter
  position: absolute
  transform: rotate(90deg)

.rotate-around-leave-active
  position: absolute
  transform: rotate(90deg)

</style>
