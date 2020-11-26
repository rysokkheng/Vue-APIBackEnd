<template>
    <div class="table-responsive">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-1"><b-button variant="success" v-on:click="btn_add_user()" style="color:white">Create Users</b-button></div>
                    <div class="col-sm-11">
                        <div class="search-box">
                            <i class="material-icons">&#xE8B6;</i>
                            <input type="text" class="form-control" v-model="search" placeholder="Search&hellip;">
                        </div>
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
                    <tr v-for="item in items" v-bind:key="item.id">
                        <td>{{ item.id }}</td>
                        <td>{{ item.fullname }}</td>
                        <td>{{ item.username }}</td>
                        <td>{{ item.email }}</td>
                        <td>{{ item.phone }}</td>
                        <td>{{ item.roles }}</td>
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
            <div class="clearfix">
                <div class="hint-text">Showing <b>{{count_page.count}}</b> out of <b>{{total_page.total}}</b> entries</div>
                <ul class="pagination">
                    <li class="page-item disabled"><a href="#"><i class="fa fa-angle-double-left"></i></a></li>
                    <li class="page-item active"><a href="#" class="page-link">1</a></li>
                    <li class="page-item"><a href="#" class="page-link">2</a></li>
                    <li class="page-item "><a href="#" class="page-link">3</a></li>
                    <li class="page-item"><a href="#" class="page-link">4</a></li>
                    <li class="page-item"><a href="#" class="page-link">5</a></li>
                    <li class="page-item"><a href="#" class="page-link"><i class="fa fa-angle-double-right"></i></a></li>
                </ul>
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
      selected: [],
      headers: [
        { text: 'No', value: 'id' },
        { text: 'Fullname', value: 'fullname' },
        { text: 'Username', value: 'username' },
        { text: 'Email', value: 'email' },
        { text: 'Phone', value: 'phone' },
        { text: 'Roles', value: 'roles' },
        { text: 'Status', value: 'status' },
        {text:  'Create Date', value: 'created_at'},
        { text: 'Action', value: 'action', sortable: false }
      ],
      items: [],
      count_page : 0,
      total_page : 0,
      current_page : 0,
      per_page :0,
      next_page : [],
      first_page : [],

    
    }
  },
  created: function(){
      this.getData()
  },
  methods : {
      getData(){
          const Token = getAuthToken()
          const GetUser = http.get('user').then(response => {
            this.items = response.data.data.data;  
            this.count_page = response.data.data.meta.pagination; 
            this.total_page = response.data.data.meta.pagination;
            this.current_page = response.data.data.meta.pagination
          }).catch((error)=>{
            console.log(error)
        })                            
      },
     btn_add_user : function () {
         this.$router.push("/users/create");
     }
  },
  computed : {
    test(){
      if(this.search){
        console.log('sdsss')
      return this.headers.filter((item)=>{
       return item.text.startsWith(this.search);
      })
      }else{
        return this.headers;
      }
    }
  }
  
}
</script>