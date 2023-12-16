<template>

<div>
        <v-layout justify-center>
          <v-flex sm7 xs11>
          <v-card >         
            <div id="chart" class="mt-8" v-show=show>
        <tapexchart type="donut" width="300" :options="chartOptions" :series="series"></tapexchart>
      </div>
      <div class="text-center" v-show=!show>
            <!-- <h2 class="red--text">Today </h2><br> -->
            <h2 class="red--text">Today Sale Trend</h2><br>

            <h3 class="d-flex justify-center "><span>There is no sale for today</span></h3> <br> 
            <img  class="mb-5" src="../assets/cats-558077_640.jpg" >
          </div>
         </v-card>
        </v-flex>
        </v-layout>
         <!-- {{ Today }} -->

</div>

</template>

<script>
    import tapexchart from "vue-apexcharts";
    export default {
      name:"todaySales",
        data(){
            return{
                series: [],
            //     legend: { 
            // position : 'bottom'
            //  },
                
          chartOptions: {
            labels:[],
            chart: {
              width: 250,
              type: 'donut',
            },
          
            plotOptions: {
              pie: {
                startAngle: -90,
                endAngle: 270
              }
            },
            dataLabels: {
              enabled: true
            },
            fill: {
              type: 'gradient',
            },
            legend: {
              formatter: function(val, opts) {
                return val + " - " + opts.w.globals.series[opts.seriesIndex]
              }
            },
            title: {
              text: 'Today Sales Performance',
              style: {
                fontSize: '20px',
                fontWeight: 'bold',
                color: 'red'
              }
            },
           
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 130
                },
                // legend: {
                //   position: 'center'
                // }
              }
            }]
          },
          show:false
            }
        },

        props:{
             Today:{},

        },

        watch:{
            Today(){
              if (this.Today!=undefined) {
                  this.show=true
                // } else{
                  this.series=this.Today.total.reverse();
                this.chartOptions={
                    labels:this.Today.biller.reverse()
                }
                }
          console.log(this.Today.total," ****hfiwudfkdfgajgac WUDG")
          }
        },

        components: {
            tapexchart
        }
    }

</script>

<style scoped>
img{
  /* background-size: contain; */
  max-width: 50%;
}
</style>