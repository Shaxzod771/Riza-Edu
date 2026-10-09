import AuthLayout from '@/layouts/AuthLayout.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import { useAuthStore } from '@/stores/auth/useAuthStore';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainLayout',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/HomeView.vue'),
          meta: { public: true }
        },
        {
          path: 'course',
          name: 'Course',
          component: () => import('@/views/Course.vue'),
          meta: { public: true }
        },
        {
          path: 'aboutteachers',
          name: 'AboutTeachers',
          component: () => import('@/views/AboutTeachersView.vue'),
          meta: { public: true }
        },
        {
          path: 'blog',
          name: 'Blog',
          component: () => import('@/views/Blog.vue'),
          meta: { public: true }
        },
        {
          path: 'contact',
          name: 'Contact',
          component: () => import('@/views/ContactView.vue'),
          meta: { public: true }
        },
        {
          path: 'faqs',
          name: 'Faqs',
          component: () => import('@/views/FaqsView.vue'),
          meta: { public: true }
        },
      ],
    },
    {
      path: '/auth',
      name: 'AuthLayout',
      component: AuthLayout,
      children: [
        {
          path: 'signin',
          name: 'SignIn',
          component: () => import('@/views/auth/SignInView.vue'),
          meta: { public: true }
        },
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'Error',
      component: () => import('@/views/ErrorView.vue'),
      meta: { public: true }
    }
  ],
});

router.beforeEach(async (to, from, next) => {
  const auth_store = useAuthStore();

  // If already logged in and trying to access SignIn, redirect to home
  if (to.name === 'SignIn' && auth_store.user?.name) {
    return next({ path: '/' });
  }

  // If the route is public, allow access
  if (to.meta.public) {
    // Still try to verify in background to sync state if we have data in localStorage
    await auth_store.verify();
    return next();
  }

  // If not a public route, verify authentication
  try {
    await auth_store.verify();
    if (auth_store.isAuth) {
      next();
    } else {
      next({ name: 'SignIn' });
    }
  } catch (error) {
    next({ name: 'SignIn' });
  }
})

export default router
