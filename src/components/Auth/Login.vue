<template>
  <div class="login" id="login">
    <form class="form">
      <h2>API Back End</h2>
      <div class="form-field">
        <label for="login-username"><i class="fa fa-user"></i></label>
        <input type="text" id="username" v-model="username" name="username" placeholder="Username" required autocomplete="off">
      </div>
      <div class="form-field">
        <label for="login-password"><i class="fa fa-lock"></i></label>
        <input id="password" v-model="password" type="password" name="password" placeholder="Password" required>
      </div>
      <button class="button" v-on:click="login()" > Login </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import Vue from 'vue';
import {loginUser} from '@/utils/auth.js';


export default {
   name: 'login',
  data() {
    return {
        username: '',
        password: ''
    }
},    
  methods: {
    login: function() {   
          try {
            if (this.username != "" || this.password != "") {
              loginUser(this.username, this.password)
               this.$router.push({ name: 'dashboard' })

            }
          } catch (err) {
              alert(`Error:` , err)       
          }
      }
  }
}
</script>

