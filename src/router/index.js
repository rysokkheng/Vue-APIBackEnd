import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: {
          name: "login"
        }
    },
    {
        path: "/login",
        name: "login",
        component: () => import('../views/Auth/Login.vue')
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import('../views/Dashboard.vue')
    },
    {
      path: "/users/create",
      name: "usercreate",
      component: () => import('../views/Users/UserCreate.vue')
    },
    {
      path: "/users",
      name: "users",
      component: () => import('../views/Users/Users.vue')
    },
    
    {
      path: "/roles",
      name: "roles",
      component: () => import('../views/Roles/Roles.vue')
    },
    {
      path: "*",
      name: "pagenotfound ",
      component: () => import('../views/PageNotFound.vue')
    }
  
]
})

