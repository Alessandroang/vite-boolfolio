<script>
export default {
  props: {
    project: Object,
    isDetail: Boolean,
  },

  computed: {
    abstract() {
      let strend = this.project.length > 100 ? "..." : "";
      return this.project.content.substr(0, 150) + strend;
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
      <div class="card-body clearfix">
        <h5 class="card-title">{{ project.title }}</h5>
        <div v-if="project && project.image">
          <img
            :src="project.image"
            class="img-fluid mb-1 rounded w-50"
            :class="{
              'float-end': isDetail,
              'w-50': isDetail,
              'ms-1': isDetail,
            }"
            alt="Project Image"
          />
        </div>

        <p class="card-text">
          {{ isDetail ? project.content : abstract }}
        </p>

        <span
          class="badge mx-1"
          v-for="technology in project.technologies"
          :key="technology.id"
          :style="'background-color: ' + technology.color"
          >{{ technology.label }}</span
        >
      </div>

      <div class="card-footer">
        <router-link
          v-if="!isDetail"
          :to="{
            name: 'project-detail',
            params: {
              id: project.id,
            },
          }"
        >
          <button class="btn btn-primary">Vedi Dettaglio</button>
        </router-link>
      </div>
    </div>
  </div>
</template>
