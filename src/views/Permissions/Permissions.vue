<template>
<div class="allmain">
  <div class="title-main">&nbsp;&nbsp; Permissions List</div>
  <div class="twomain">
    <div class="table-responsive">
        <div class="table-wrapper">
           <!-- <div class="loader" v-if="loading">
              <span class="helper"></span>
              <img class="loaderImg" src="@/assets/ajax-loader.gif">
            </div> -->
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-2"><b-button variant="success"  style="color: white;padding: 6px;font-size: 14px;margin-bottom: 19px;" v-on:click="AddPermission()" >Create Permissions</b-button></div>
                      <div class="col-sm-7">
                      </div>
                    <div class="col-sm-3">
                     <input type="text" v-model="search" class="form-control" id="telefoon" style="font-size: 15px;" placeholder="Search...">
                    </div>
                </div>
            </div>
            <table class="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                      <th sty v-for="colum in headers" v-bind:key="colum.id">
                        {{colum.text}}
                      </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in filteredItems " v-bind:key="item.id">
                        <td>{{ item.id }}</td>
                        <td>{{ item.name }}</td>
                        <td><a v-if="item.status=='1'">
                          <b-icon variant="success " icon="check-circle-fill" aria-hidden="true"></b-icon></a>
                          <a v-else><b-icon variant="danger " icon="check-circle" aria-hidden="true"></b-icon></a>
                        </td>
                        <td>{{ item.created_at }}</td>
                        <td>
                          <b-link href="#foo"><b-icon variant="success " icon="eye-fill" aria-hidden="true"></b-icon></b-link>
                          <b-link href="#foo"><b-icon variant="primary" icon="pencil-fill" aria-hidden="true"></b-icon></b-link>
                          <b-link href="#foo"><b-icon variant="danger" icon="trash-fill" aria-hidden="true"></b-icon></b-link>
                        </td>
                    </tr>
                     
                </tbody>
            </table>
        
        </div>
    </div>  
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
   data () {
    return {
      search: '',
      loading: false,
      selected: [],
      headers: [
        { text: 'No', value: 'id' },
        { text: 'name', value: 'name' },
        { text: 'Status', value: 'status' },
        { text: 'Create Date', value: 'created_at'},
        { text: 'Action', value: 'action', sortable: false }
      ],
      items: [],
    }
  },
  created: function(){
      this.getData()
  },
  methods : {
      getData(){
          this.loading = true;
          const Token = getAuthToken()
          const GetUser = http.get('permission').then(response => {
            this.items = response.data.data;  
           
          }).catch((error)=>{
            console.log(error)
        })                       
      },
     AddPermission : function () {
         this.$router.push("/permissions/create");
      },
    
  },
   computed: {
    filteredItems() {
      var self = this;
      return this.items.filter(item => {
         return item.name.toLowerCase().indexOf(self.search.toLowerCase()) >= 0 
             || item.roles.toLowerCase().indexOf(self.search.toLowerCase()) >= 0 
             || item.description.toLowerCase().indexOf(self.search.toLowerCase()) >= 0;
              
      }) 
    }
  }
   
}
</script>