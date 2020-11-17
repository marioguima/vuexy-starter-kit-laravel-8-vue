import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      // =============================================================================
      // MAIN LAYOUT ROUTES
      // =============================================================================
      path: '',
      component: () => import('./views/event/event.vue'),
      children: [
        // =========================================================================
        // Theme Routes
        // =========================================================================
        ...,
        {
          path: '/test-page',
          name: 'testPage',
          component: () => import('./views/TestPage.vue'),
        },
      ],
    },
  ]
})
