<script>
export default {
  props: {
    pagination: Array,
  },

  emits: ["change-page"],
};
</script>

<template>
  <nav aria-label="..." class="my-3">
    <ul class="pagination">
      <li
        class="page-item"
        :class="{
          disabled: !link.url,
        }"
        v-for="link in pagination"
        @click="$emit('change-page', link.url)"
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
</template>
