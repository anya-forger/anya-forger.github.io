import { createWebHistory, createRouter } from "vue-router";

const history = createWebHistory();

const routes = [
    { path: "/", name: "home", component: () => import("./views/Home.vue") },
    { path: "/about", name: "about", component: () => import("./views/About.vue") },
    { path: "/projects", name: "projects", component: () => import("./views/Projects.vue") },
    { path: "/:catchAll(.*)*", redirect: "/" },
];

export const router = createRouter({
    history,
    routes,
    scrollBehavior() {
        // always scroll to top
        return { top: 0 };
    },
});
