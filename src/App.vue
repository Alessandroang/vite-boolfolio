<script>
import ProjectList from "./components/projects/Projectlist.vue";

export default {
  data() {
    return {
      projects: [],
    };
  },

  components: {
    ProjectList,
  },
};
</script>

<template>
  <div class="container mt-4">
    <h1>Lista dei Progetti</h1>
    <ProjectList :projects="projects" />
  </div>
</template>
