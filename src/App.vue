<template>
  <div id="app">
    <layout-header></layout-header>
    <transition
      mode="out-in"
      :duration="transCurrent.duration"
      @beforeLeave="beforeLeave"
      @beforeEnter="beforeEnter">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import LayoutHeader from "VUE_COMPONENT/layout/header/Index.vue";
import { mapState, mapActions } from "vuex";
import { transDefault } from "SRC/transitions";

export default {
  name: "app",
  components: {
    LayoutHeader
  },
  computed: {
    ...mapState({
      transState: state => state.trans.state,
      transCurrent: state => state.trans.transCurrent
    })
  },
  methods: {
    ...mapActions({
      transHide: "trans/hide",
      transShow: "trans/show",
      transInitialize: "trans/initialize"
    }),
    beforeLeave (el) {
      this.transHide();
    },
    beforeEnter (el) {
      this.transShow();
    },
    mountedHook () {
      const settingsTrans = {
        transDefault: { ...transDefault },
        transCurrent: { ...transDefault }
      };
      this.transInitialize(settingsTrans);
    }
  },
  mounted () {
    this.mountedHook();
    setTimeout(() => {
      console.log(this.$store.state.trans);
    });
  }
};
</script>

<style lang="sass">
@import "~SASS/main";
</style>
