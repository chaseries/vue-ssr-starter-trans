<template>
  <transition
    :appear="appear"
    :name="_name"
    @beforeLeave="beforeLeave"
    @beforeEnter="beforeEnter">
    <div v-show="state">
      <slot></slot>
    </div>
  </transition>
</template>


<script>
import { mapState } from "vuex";


export default {
  name: "component-trans",
  props: {
    initOnly: {
      required: false,
      type: Boolean,
      default: false
    },
    delay: {
      required: false,
      type: [Number, Object],
      default: 0 
    },
    name: {
      required: false,
      type: String
    }
  },
  computed: {
    ...mapState({
      transition: state => state.trans.transition,
      transName: state => state.trans.transition.name,
      transShow: state => state.trans.state,
      transShowOnce: state => state.trans.initFlag
    }),
    state () {
      return this.initOnly === true ? this.transShowOnce : this.transShow;
    },
    _name () {
      return this.name === undefined ? this.transName : this.name;
    },
    appear () {
      return !this.initOnly;
    }
  },
  methods: {
    addDelay (el, delay) {
      el.style.transitionDelay = `${delay}ms`;
    },
    beforeLeave (el) {
      const delay = typeof this.delay === "number" ? this.delay : this.delay.leave;
      this.addDelay(el, delay);
    },
    beforeEnter (el) {
      const delay = typeof this.delay === "number" ? this.delay : this.delay.enter;
      this.addDelay(el, delay);
    }
  }
};
</script>
