import {createRouter, createWebHashHistory, createWebHistory} from "vue-router";

const routes = [
    {
        path: "/login",
        name: "login",
        component: () => import("../views/LoginView.vue"),
        meta: {
            layout: "empty"
        }
    },
    {
        path: "/",
        name: "home",
        component: () => import("../views/HomeView.vue"),
        meta: {
            layout: "main",
        }
    },
    {
        path: "/projects",
        name: "projects",
        component: () => import("../views/projects/ProjectsView.vue"),
        meta: {
            layout: "main",
        },
        redirect: "/projects/list",
        children: [
            {
                path: "list",
                name: "projects-list",
                component: () => import("../views/projects/ProjectsListView.vue"),
                meta: {
                    layout: "main",
                }
            },
            {
                path: "create",
                name: "create-project",
                component: () => import("../views/projects/CreateEditProjectView.vue"),
                meta: {
                    layout: "main",
                }
            },
            {
                path: "edit/:id",
                name: "edit-project",
                component: () => import("../views/projects/CreateEditProjectView.vue"),
                meta: {
                    layout: "main",
                }
            }
        ]
    },
    {
        path: "/projectTopics",
        name: "project-topics",
        component: () => import("../views/projects/ProjectTopicsView.vue"),
        meta: {
            layout: "main",
        }
    },
    {
        path: "/techs",
        name: "techs",
        component: () => import("../views/projects/TechsView.vue"),
        meta: {
            layout: "main",
        }
    },
    {
        path: "/timeline",
        name: "timeline",
        component: () => import("../views/timeline/TimelineView.vue"),
        meta: {
            layout: "main"
        }
    },
    {
        path: "/timelineTopics",
        name: "timelineTopics",
        component: () => import("../views/timeline/TimelineTopicsView.vue"),
        meta: {
            layout: "main"
        }
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
