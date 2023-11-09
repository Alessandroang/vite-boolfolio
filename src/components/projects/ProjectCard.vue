<script>
export default {
  props: {
    project: Object,
  },

  computed: {
    abstract() {
      let strend = this.project.lenght > 100 ? "..." : "";
      return this.project.content.substr(0, 120) + strend;
    },
  },
};
</script>
<template>
  <div class="col">
    <div class="card h-100">
      <div class="card-header">
        <span
          class="badge rounded-pill mx-1"
          v-if="project && project.type"
          :style="'background-color: ' + project.type.color"
          >{{ project.type.label }}</span
        >
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ project.title }}</h5>
        <div v-if="project && project.image">
          <img
            :src="project.image"
            class="img-fluid w-50"
            alt="Project Image"
          />
        </div>

        <p class="card-text">{{ abstract }}</p>

        <span
          class="badge mx-1"
          v-for="technology in project.technologies"
          :key="technology.id"
          :style="'background-color: ' + technology.color"
          >{{ technology.label }}</span
        >
      </div>
      <div class="card-footer">
        <button class="btn btn-primary">Vedi i dettagli</button>
      </div>
    </div>
  </div>
</template>
