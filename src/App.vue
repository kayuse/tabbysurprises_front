<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
const default_layout = "default";
export default {
  data() {
    return {
      token: null
    };
  },
  computed: {
    layout() {
      //console.log(this.$route.meta.layout || default_layout)
      return this.$route.meta.layout || default_layout;
    }
  },
  mounted() {
   
  },
  created() {
    // nothing defined here (when this.$route.path is other than "/")
    console.log(this.$route, this.$route.meta.layout);
  },
  updated() {
    // something defined here whatever the this.$route.path
    console.log(this.$route, this.$route.meta.layout);
  },
  methods: {
  }
};
</script>


<style lang="scss">
</style>