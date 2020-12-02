<template>
    <div class="allmain">
      <div class="title-main">&nbsp;&nbsp; User Viewer Info</div>
        <div class="twomain">
            <b-form  class="bform" @submit="onSubmit">
            <b-row>
                <b-col >
                     <label class="label">Fullname</label>
                    <b-form-input type="text" placeholder="Fullname" v-model="fullname"  require autocomplete="off"></b-form-input>
                </b-col>
                <b-col> 
                    <label class="label">Username</label>
                   <b-form-input type="text" placeholder="Username" v-model="username" require autocomplete="off"></b-form-input>
                </b-col>
            </b-row>
            <b-row>
               <b-col>
                     <label for="input-with-list" class="label">Email</label>
                    <b-form-input type="text" placeholder="Email" v-model="email" require autocomplete="off"></b-form-input>
                </b-col>
               <b-col> 
                    <label class="label">Phone</label>
                   <b-form-input type="text" placeholder="Phone" v-model="phone" require autocomplete="off"></b-form-input>
                </b-col>
            </b-row>
            <b-row>
               <b-col>
                     <label class="label">Password</label>
                    <b-form-input type="password" placeholder="Password" v-model="password" require autocomplete="off"></b-form-input>
                </b-col>
               <b-col> 
                    <label class="label">Confirm-Password</label>
                   <b-form-input type="password" placeholder="Confirm-Password" v-model="password_confirmation" require autocomplete="off"></b-form-input>
                </b-col>
            </b-row>
            <b-row>
               <b-col>
                     <label class="label">Organization</label>
                    <b-form-input type="text" placeholder="Organization" v-model="organization" require autocomplete="off"></b-form-input>
               </b-col>
               <b-col> 
                    <label class="label">Home Page</label>
                    <b-form-select
                    class="form-control"
                    v-model="selected"
                    :options="options"
                    value-field="item"
                    text-field="name"
                    disabled-field="notEnabled"
                    ></b-form-select>
               </b-col>
            </b-row>
           <b-row>
               <b-col> 
                   <h5 style=" float: left !important;margin-top: 10px;font-size: 18px;">Assign Roles</h5>
               </b-col>
           </b-row>
            <b-row>
               <b-col class="formcheck" style="margin-top: -15px;"> 
                <b-form-checkbox-group id="checkbox-group-5" v-model="selected" v-for="rol in Dataroles" v-bind:key="rol.id" >
                    <b-form-checkbox  v-model="roles" plain :value="rol.id">{{rol.username}}</b-form-checkbox>
                </b-form-checkbox-group>
                
            </b-col>
           </b-row>
             <b-row>
               <b-col> 
                <b-button variant="danger" v-on:click="bntBack()" style="color:white">Back</b-button>
               </b-col>
           </b-row>
        </b-form>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import Vue from 'vue';
import http from '@/http';
import Vuex from 'vuex';
import {getAuthToken} from '@/utils/auth.js';
export default {
   data() {
      return {
            roles: "",
            fullname: "",
            username: "",
            email: "",
            phone: "",
            password: "",
            password_confirmation : "",
            organization: "",
            selected: [], // Must be an array reference!
            Dataroles: [],

        options: [
          { item: 'A', name: 'Option A' },
          { item: 'B', name: 'Option B' },
          { item: 'D', name: 'Option C', notEnabled: true },
          { item: { d: 1 }, name: 'Option D' }
        ]
      };
      
    },
     created: function(){
      this.getRoles()
  }, 
  methods : {
       getRoles(){
          const Token = getAuthToken()
          const Getroles = http.get('role').then(response => {
           this.Dataroles = response.data.data.data;  
         
          }).catch((error)=>{
            console.log(error)
        })                            
      },
    onSubmit() {
             if (this.fullname !='' && this.username !='' && this.email !='' && this.roles !='' && this.phone !=''
                && this.password !='' && this.password_confirmation !='' && this.organization !='' && this.homepage !='') {
                http.post('users', {
                roles: this.roles,
                fullname: this.fullname,
                username:this.username,
                email:this.email,
                phone:this.phone,
                password:this.password,
                password_confirmation:this.password_confirmation,
                organization:this.organization,
                homepage:this.homepage,
            })
            .then(function (response) {
                console.log(response);
                if(response.data[0].status==1){
                
                    alert('Data saved successfully');
                } 
                    
            })
             } else{
                alert('Please enter all fileds');
             }
                                   
        },
        bntBack : function () {
         this.$router.push("/users");
        }
    }
}
</script>
