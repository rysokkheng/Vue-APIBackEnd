<template>
    <div class="allmain">
      <div class="title-main">&nbsp;&nbsp; Roles Creation Info</div>
        <div class="twomain">
          <b-form  class="bform" @submit="onSubmitRoles">
            <b-row>
                <b-col >
                     <label class="label">Roles</label>
                    <b-form-input type="text" placeholder="Roles" v-model="name" name="name"  require autocomplete="off"></b-form-input>
                </b-col>
                <b-col> 
                    <label class="label">Roles Name</label>
                   <b-form-input type="text" placeholder="Roles Name" v-model="display_name"  name="display_name" require autocomplete="off"></b-form-input>
                </b-col>
            </b-row>
             <b-row>
               <b-col> 
                   <h5 style=" float: left !important;margin-top: 10px;font-size: 18px;">Permission</h5>
               </b-col>
           </b-row>
            <b-row>
                <b-col>
                     <b-form-group id="input-group-4">
                        <b-form-checkbox-group v-model="permission" name="permission" v-for="(permiss, index) in permissions" v-bind:key="index">
                            <b-form-checkbox :value="permiss.id">{{permiss.name}}</b-form-checkbox>
                      </b-form-checkbox-group>
                    </b-form-group>
                </b-col>
            </b-row>
             <b-row>
               <b-col> 
                <b-button variant="danger" v-on:click="bntBack()" style="color:white">Back</b-button>
                <b-button variant="warning" style="color:white">Clear</b-button>
                <b-button variant="success" type="submit" style="color:white">Save</b-button> </b-col>
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
  export default {
    data() {
      return {
          name: '',
          display_name: '',
          permissions: [],
          permission: [],
      }
    },
     created: function(){
      this.getPermission()
  },
methods : {
    getPermission (){
            const getPermiss = http.get('permission').then(response => {
            this.permissions = response.data.data.data;  
          }).catch((error)=>{
            console.log(error)
        })                       
        },
    onSubmitRoles (){
            if (this.name !='' && this.display_name !='') {
                  http.post('role', {
                    name: this.name,
                    display_name: this.display_name,
                    permission:this.permission,
                }).then(function (response) {
                console.log(response);
                    if(response.data[0].status==1){
                        alert('Data saved successfully');
                    }   
                })
            } else{
                alert('Please enter all fileds');
             }
        }
    }
   
  }
</script>