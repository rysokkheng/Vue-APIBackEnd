<template>
      <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom" id="navbar_expand_lg">
       <span class="datimes">{{  new Date() | moment("dddd , Do MMMM  YYYY, h:mm:ss A") }}</span>
       <!-- <span class="authuser">Administrator</span> -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item active"> 
                 <router-link  @click.native="logout()" to="/login"  ><i class="fa fa-sign-out fa-2x" aria-hidden="true"></i>&nbsp; <span class="sr-only">(current)</span></router-link>
            </li>
          </ul>
        </div>
      </nav>
</template>

<script>
import {logoutUser} from '@/utils/auth.js';


  export default {
   methods: {
      logout: function() {
        logoutUser()
      }, 
    },
    created (){
    console.log('test')
    }
  }
</script>