<script>
import NavbarUi from "./components/ui/NavbarUi.vue";

export default {
  data() {
    return {
      projects: [],
    };
  },

  components: {
    NavbarUi,
  },
};
</script>

<template>
  <NavbarUi />

  <router-view></router-view>
</template>
