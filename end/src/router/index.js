import { createMemoryHistory, createRouter } from 'vue-router'

import LoginPage from "@/views/LoginPage.vue";
import HomePage from "@/views/HomePage.vue";
import AddPage from '@/views/AddPage.vue';
import BaseLayout from '@/views/BaseLayout.vue';

const routes = [
    { path: '/login', component: LoginPage },
    {
        component: BaseLayout,
        path: '/',
        children: [
            { path: '/', component: HomePage },
            { path: '/add', component: AddPage }
        ]
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router