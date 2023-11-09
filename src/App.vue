<script>
import ContactForm from "./components/ContactForm.vue";
import ProjectList from "./components/projects/Projectlist.vue";

export default {
  data() {
    return {
      projects: [],
    };
  },

  components: {
    ProjectList,
    ContactForm,
  },
};
</script>

<template>
  <div class="container mt-4 mb-4">
    <hr />
    <ContactForm />
    <hr />
    <ProjectList :projects="projects" />
  </div>
</template>
