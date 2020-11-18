<template>
  <div class="vue-tempalte">
    <!-- Navigation -->
    <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
       <Master></Master>
      </div>
    </nav>

    <!-- Main -->
    <div class="App">
      <div class="vertical-center">
          <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Master from "@/components/Layouts/Master.vue";
export default {
  name: 'app',
   components: {
    Master
  }
}
</script>

<style>
</style>