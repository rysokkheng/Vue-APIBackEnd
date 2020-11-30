<template>
   <!-- Sidebar -->
   <div id="main">
    <div class="bg-light border-right" id="sidebar-wrapper">
      <div class="sidebar-heading"><img src="@/assets/logo.png" width="60" height="60"></div>
      <div class="list-group list-group-flush " v-on:click.prevent>
          <router-link to="/dashboard" @click.native="makeActive('dashboard')" class=" actives list-group-item list-group-item-action bg-light"><i class="fa fa-home fa-fw" aria-hidden="true"></i>&nbsp;Dashboard</router-link>
          <router-link to="/products" @click.native="makeActive('products')" class="list-group-item list-group-item-action bg-light"><i class="fa fa-product-hunt fa-fw" aria-hidden="true"></i>&nbsp;Products</router-link>
          <router-link to="/users" @click.native="makeActive('users')" class="list-group-item list-group-item-action bg-light"><i class="fa fa-user fa-fw" aria-hidden="true"></i>&nbsp;Users</router-link>
          <router-link to="/roles" @click.native="makeActive('roles')" class="list-group-item list-group-item-action bg-light"><i class="fa fa-lock fa-fw" aria-hidden="true"></i>&nbsp;Roles</router-link>
          <router-link to="/permissions" @click.native="makeActive('permissions')" class="list-group-item list-group-item-action bg-light"><i class="fa fa-product-hunt fa-fw" aria-hidden="true"></i>&nbsp;Permissions</router-link>
          <router-link to="/setting" @click.native="makeActive('setting')" class="list-group-item list-group-item-action bg-light"><i class="fa fa-cog fa-fw" aria-hidden="true"></i>&nbsp;Setting</router-link>
      </div>
    </div>
   </div>
    <!-- /#sidebar-wrapper -->
</template>
<script>
export default {
  data (){
    return {
      active : ''
    }
  },
  methods: {
  	makeActive: function(item){
    	this.active = item;
    }
  }
}
</script>