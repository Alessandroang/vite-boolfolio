import { createWebHistory, createRouter } from "vue-router";
import Homepage from "../pages/HomePage.vue";
import BlogPage from "../pages/BlogPage.vue";
import ContactPage from "../pages/ContactPage.vue";
import ProjectPage from "../pages/ProjectPage.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      name: "homepage",
      path: "/",
      component: Homepage,
    },
    {
      name: "blog",
      path: "/blog",
      component: BlogPage,
    },
    {
      name: "contacts",
      path: "/contacts",
      component: ContactPage,
    },
    {
      name: "project-detail",
      path: "/blog:id",
      component: ProjectPage,
    },
  ],
});

export { router };
