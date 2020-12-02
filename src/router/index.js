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
    ///////////////////// Route Users All /////////////////////////////
    {
      path: "/users/create",
      name: "usercreate",
      component: () => import('../views/Users/UserCreate.vue')
    },
    {
      path: "/users/viewer",
      name: "UserViewer",
      component: () => import('../views/Users/UserViewer.vue')
    },
    {
      path: "/users",
      name: "users",
      component: () => import('../views/Users/Users.vue')
    },
    //////////////////// End Route User ///////////////////////////
    
    {
      path: "/roles",
      name: "roles",
      component: () => import('../views/Roles/Roles.vue')
    },
    {
      path: "/roles/create",
      name: "RoleCreate",
      component: () => import('../views/Roles/RoleCreate.vue')
    },
    {
      path: "*",
      name: "pagenotfound ",
      component: () => import('../views/PageNotFound.vue')
    }
  
]
})

