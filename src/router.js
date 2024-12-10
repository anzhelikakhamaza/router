import { createRouter, createWebHistory } from "vue-router";
import AboutInfo from "@/components/AboutInfo.vue";
import App from "@/App.vue";
import Article from "@/components/Article.vue";

const routes = [
    { path: '/', component: App },
    { path: '/about', component: AboutInfo },
    { path: '/article/:articleId', component: Article }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
