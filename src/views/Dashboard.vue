<template>
  <div class="maincahrt">
       <div class="card-group">
                <!-- 4 of these -->
             <div class="w-100 py-2"></div>
                <div class="card">
                  <h1>AreaChart</h1>
                    <AreaChart></AreaChart>
                </div>
                <div class="card">
                   <h1>BarChart</h1>
                    <BarChart></BarChart>
                </div>

               <div class="w-100 py-2"></div>
                <div class="card">
                   <h1>PieChart</h1>
                    <PieChart></PieChart>
                </div>
                <div class="card">
                   <h1>LineChart</h1>
                    <LineChart></LineChart>
                </div>
              <div class="w-100 py-2"></div>  
            </div>
  </div>
</template>

<script>
import AreaChart from "@/components/Chart/AreaChart.vue";
import BarChart from "@/components/Chart/BarChart.vue";
import PieChart from "@/components/Chart/PieChart.vue";
import LineChart from "@/components/Chart/LineChart.vue";
export default {
  components: {
    AreaChart,
    BarChart,
    PieChart,
    LineChart
  }
}
</script>
<style>
  .maincahrt{
    width: 100%;
    margin: 0 auto;
    padding: 0;
    text-align: center;
  }
  .card-group{
    text-align: center;
  }
  .card {
    width: 50%;
    float: left;


}
 
</style>
