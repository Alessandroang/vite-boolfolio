<script>
import ProjectCard from "../components/projects/ProjectCard.vue";
import axios from "axios";
import { store } from "../data/store";

export default {
  data() {
    return {
      project: null,
      error: {
        hasError: false,
        message: "",
      },
    };
  },
  components: { ProjectCard },

  created() {
    console.log(store.api.baseUrl + "projects/" + this.$route.params.id);
    axios
      .get(store.api.baseUrl + "projects/" + this.$route.params.id)
      .then((response) => {
        this.project = response.data;
      })
      .catch((error) => {
        console.error("Errore nella chiamata API", error);
      });
  },
};
</script>

<template>
  <div class="container">
    <h1 class="my-5">Dettaglio Progetto</h1>

    <ProjectCard :project="project" :isDetail="true" v-if="project" />
  </div>
</template>
