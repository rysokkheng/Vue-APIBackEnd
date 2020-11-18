<template>
    <div id="navbar">
   <div class="topmenu">
      <div class="sidemane">
            <br>
           <router-link class="nav-link pr-3" to="/dashboard">Dashboard</router-link>
        </div>
       <div class="menu">
          <router-link class="nav-link pr-3" to="/users">Manage Users</router-link>
          <router-link class="nav-link pr-3" to="/roles">Manage Roles</router-link>
          <router-link class="nav-link pr-3" to="/permissions">Manage Permissions</router-link>
          <router-link class="nav-link pr-3" to="/product">Manage Products</router-link>
          <router-link class="nav-link pr-3" to="/login">Login</router-link>
          <router-link class="nav-link pr-3"  v-on:click.native="logout()" to="/login">Logout</router-link>
       </div>
     </div>
 </div>
</template>

<script>
import {logoutUser} from '@/utils/auth.js';
  export default {
   methods: {
      logout: function() {
        logoutUser()
      }
   }
  }
</script>
