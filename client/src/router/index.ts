import Portfolio from "@/views/Portfolio.vue";
import Resume from "@/views/Resume.vue";
import Timeline from "@/views/Timeline.vue";
import Contacts from "@/views/Contacts.vue";
import Login from "@/views/Login.vue";
import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {path: "/", component: Portfolio},
    {path: "/resume", component: Resume},
    {path: "/contacts", component: Contacts},
    {path: "/timeline", component: Timeline},
    {path: "/login", component: Login}
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
