import { createRouter, createWebHistory } from "vue-router";
import AboutInfo from "@/components/AboutInfo.vue";
import Article from "@/components/Article.vue";
import Login from "@/components/Login.vue";

const routes = [
    { path: '/about', component: AboutInfo },
    { path: '/article/:articleId', component: Article },
    { path: '/login', component: Login, meta: { requiresAuth: true }, }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const isAuthenticated = () => localStorage.getItem("authToken");

router.beforeEach((to, from, next) => {
    if (isAuthenticated()) {
        next('/login');
    } else {
        next();
    }
});

export default router;
