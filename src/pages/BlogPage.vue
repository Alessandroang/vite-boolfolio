<script>
import ProjectList from "../components/projects/ProjectList.vue";

export default {
  data() {
    return {
      title: "Hello word",
    };
  },

  components: { ProjectList },
};
</script>

<template>
  <div class="container">
    <ProjectList />
  </div>
</template>
