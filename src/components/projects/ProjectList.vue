<script>
import ProjectCard from "./ProjectCard.vue";
import axios from "axios";

export default {
  data() {
    return {
      projects: [],
    };
  },

  components: {
    ProjectCard,
  },

  methods: {
    fetchProjects() {
      axios
        .get("http://localhost:8000/api/projects")
        .then((response) => {
          this.projects = response.data.data;
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
  <div>
    <div class="row">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
        class="col-md-3 mb-4"
      />
    </div>
  </div>
</template>
