import { createRouter, createWebHistory } from 'vue-router'
import AppLanding from '@/pages/AppLanding'
import AppBlog from '@/pages/AppBlog'

const routes = [
    {
        path: '/',
        name: 'AppLanding',
        component: AppLanding,
    },
    {
        path: '/blog',
        name: 'AppBlog',
        component: AppBlog,
    },
]

const router = createRouter(
    {
        history: createWebHistory(),
        routes,
        // Move to top of the page after route change.
        scrollBehavior(to, from, savedPosition) {
            if (savedPosition) {
                return savedPosition
            }
            return { top: 0 }
        },
    }
)

router.beforeEach((to, from, next) => {
    next()
})

export default router
