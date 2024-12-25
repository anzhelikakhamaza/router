import { createRouter, createWebHistory } from "vue-router";
import AboutInfo from "@/components/AboutInfo.vue";
import Article from "@/components/Article.vue";
import Login from "@/components/Login.vue";

import MyCabinet from "@/components/MyCabinet.vue";
import auth from "@/middleware/auth.js";

const routes = [
    { path: '/about', component: AboutInfo },
    { path: '/article/:articleId', component: Article },
    { path: '/my-cabinet', component: MyCabinet, meta: {
            middleware: auth,
        }},
    { path: '/login', component: Login }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.middleware) {
        return to.meta.middleware({ to, from, next });
    }
    return next();
})

export default router;