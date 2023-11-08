<script>
import ProjectCard from "./ProjectCard.vue";
import axios from "axios";
import { store } from "../../data/store";

export default {
  data() {
    return {
      projects: [],
      pagination: {
        links: [],
      },
    };
  },

  components: {
    ProjectCard,
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
          this.pagination.links = response.data.links;
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
      <nav aria-label="..." class="my-3">
        <ul class="pagination">
          <li
            class="page-item"
            :class="{
              disabled: !link.url,
            }"
            v-for="link in pagination.links"
            @click="fetchProjects(link.url)"
          >
            <a
              class="page-link"
              :class="{
                active: link.active,
              }"
              href="#"
              v-html="link.label"
            ></a>
          </li>
        </ul>
      </nav>
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
        class="col-md-3 mb-4"
      />
    </div>
  </div>
</template>
