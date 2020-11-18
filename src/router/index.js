import Vue from 'vue'
import Router from 'vue-router'
import '@/assets/css/main.css'


Vue.use(Router);



export default new Router({
  mode: 'history',
  routes: [
    {
        path: "/login",
        name: "login",
        component: () => import('../components/Auth/Login.vue')
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import('../components/Dashboard.vue')
  }
  
]
})

