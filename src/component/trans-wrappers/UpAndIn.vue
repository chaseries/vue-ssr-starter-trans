<template>
  <trans name="up-and-in" :initOnly="initOnly" :delay="delay">
    <slot></slot>
  </trans>
</template>


<script>
import Trans from "VUE_COMPONENT/trans/Index.vue";


export default {
  props: {
    initOnly: {
      type: Boolean,
      required: false,
      default: false
    },
    delay: {
      type: Number,
      required: false,
      default: 0
    }
  },
  components: {
    Trans
  }
};
</script>


<style lang="sass" scoped>

.up-and-in-enter-active, .up-and-in-leave-active
  transition: transform 0.5s linear

.up-and-in-enter
  transform: translateY(500%)

.up-and-in-leave-active
  transform: translateY(500%)

</style>
