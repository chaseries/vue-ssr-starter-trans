<template>
  <a @click="handleClick" :href="to"><slot></slot></a>
</template>


<script>
import { mapActions } from "vuex";
import Vue from "vue";


export default {
  props: {
    to: {
      required: true,
      type: String
    },
    trans: {
      required: false,
      type: Object
    }
  },
  methods: {
    ...mapActions({
      transHide: "trans/hide",
      setTransition: "trans/setTransition"
    }),
    handleClick(e) {
      e.preventDefault();
      if (this.trans) { this.setTransition(this.trans); }
      if (e.target.pathname !== this.$route.path) {
        Vue.nextTick(() => {
          this.transHide();
          this.$router.push(this.to);
        });
      } 
    }
  }
};
</script>

