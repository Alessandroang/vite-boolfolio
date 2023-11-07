<script>
export default {
  props: {
    project: Object,
  },
};
</script>
<template>
  <div class="container">
    <div class="card h-100">
      <div class="card-header">
        <span
          class="badge"
          v-if="project && project.type"
          :style="'background-color: ' + project.type.color"
          >{{ project.type.label }}</span
        >
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ project.title }}</h5>
        <p class="card-text">{{ project.content }}</p>
        <span
          class="badge"
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
