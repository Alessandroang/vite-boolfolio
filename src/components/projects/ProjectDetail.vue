<script>
import ProjectCard from "../components/project/ProjectCard.vue";
import axios from "axios";

export default {
  data() {
    return {
      project: {},
    };
  },
  components: {
    ProjectCard,
  },
  created() {
    axios
      .get(`http://127.0.0.1:8000/api/projects/${this.$route.params.id}`)
      .then((response) => {
        this.project = response.data.data;
      })
      .catch((error) => {
        console.error("Errore nella chiamata API", error);
      });
  },
};
</script>

<template>
  <h1>Dettaglio Progetto</h1>
  <ProjectCard :project="project" :isDetail="true" v-if="project" />
</template>

<style lang="scss" scoped></style>
