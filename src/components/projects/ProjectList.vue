<script>
import ProjectCard from "./ProjectCard.vue";
import PaginationUi from "../ui/PaginationUi.vue";
import axios from "axios";
import { store } from "../../data/store";

export default {
  data() {
    return {
      projects: [],
      pagination: [],
    };
  },

  components: {
    ProjectCard,
    PaginationUi,
  },

  methods: {
    fetchProjects(apiUrl = null) {
      if (!apiUrl) {
        apiUrl = store.api.baseUrl + "projects";
      }

      axios
        .get(apiUrl)
        .then((response) => {
          this.projects = response.data.data;
          this.pagination = response.data.links;
        })
        .catch((error) => {
          console.error("Errore nella chiamata API", error);
        });
    },
  },

  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <div class="container mt-4 mb-4">
    <h1>Lista dei Progetti</h1>
    <PaginationUi :pagination="pagination" @change-page="fetchProjects" />
    <div class="row row-cols-3 g-4">
      <ProjectCard
        v-for="project in projects"
        :isDetail="false"
        :key="project.id"
        :project="project"
      />
    </div>
  </div>
</template>
