<template>
    <div class="allmain">
      <div class="title-main">&nbsp;&nbsp; Permissions Creation Info</div>
        <div class="twomain">
          <b-form  class="bform" @submit="onSubmitPermission">
            <b-row>
                <b-col >
                     <label class="label">Name</label>
                    <b-form-input type="text" placeholder="Name" v-model="name" name="name"  require autocomplete="off"></b-form-input>
                </b-col>
                <b-col> 
                    <label class="label">Display NameEn</label>
                   <b-form-input type="text" placeholder="Display NameEn" v-model="display_name_en"  name="display_name_en" require autocomplete="off"></b-form-input>
                </b-col>
            </b-row>
             <b-row>
                <b-col >
                     <label class="label">Display NameKh</label>
                    <b-form-input type="text" placeholder="Display NameKh" v-model="display_name_kh" name="display_name_kh"  require autocomplete="off"></b-form-input>
                </b-col>
                <b-col> 
                    <label class="label">Permission Group</label>
                    <select v-model="group_permission_id" name="group_permission_id" class="form-control">
                         <option disabled value="">Please select one</option>
                        <option v-for="pergroup in permissionsgroup"  v-bind:value="pergroup.id" v-bind:key="pergroup.id" >
                            {{ pergroup.name_en }}
                        </option>
                    </select>
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
          display_name_en: '',
          display_name_kh: '',
          group_permission_id:'',
          permission: [],
          permissionsgroup: [ ],
      }
    },
     created: function(){
      this.getPermissionGroup();
  },
methods : {
    getPermissionGroup(){
        const getPermissGroup = http.get('permission-group/all').then(response => {
            this.permissionsgroup = response.data.data;  
          }).catch((error)=>{
            console.log(error)
        })                       
    },
    onSubmitPermission (){
       if (this.name !='' && this.display_name_en !='' && display_name_kh !='') {
             http.post('permission', {
                    name: this.name,
                    display_name_en: this.display_name_en,
                    display_name_kh: this.display_name_kh,
                    group_permission_id:this.group_permission_id,
            }).then(function (response) {
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
         this.$router.push("/permissions");
        }
    }
   
  }
</script>