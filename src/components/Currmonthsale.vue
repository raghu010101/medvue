<template>
    <div class="mt-3">

<!-- <h3>Current month salesman performance</h3> -->
<v-layout justify-center>
      <v-flex sm7 xs11>
      <v-card >
      <div class="text-center" v-show=!show>
            <!-- <h2 class="red--text">Today </h2><br> -->
            <h2 class="red--text">Current Month Sale Trend</h2><br>

            <h3 class="d-flex justify-center "><span>There is no sale for Current Month</span></h3> <br> 
            <img  class="mb-5" src="../assets/cats-558077_640.png" >
          </div>
<!-- <v-card-title class="red--text font-weight-black" >Current month salesman performance</v-card-title> -->
        <div id="chart" v-show=show>
        <capexchart type="bar"  :options="chartOptions" :series="series"></capexchart>
      </div>
    </v-card>
    </v-flex>
    
</v-layout>

      <!-- {{ CurMonth }} -->


    </div>
</template>

<script>
    import capexchart from "vue-apexcharts";

    export default {
  name:"CurMonthSales",
        data() {
            return {

                series: [{
            name: 'Sales',
            data: []
          }],
          // legend: { 
          //   position : 'bottom'
          //    },
          chartOptions: {
            annotations: {
              points: [{
                x: 'Current month salesman performance',
                seriesIndex: 0,
                label: {
                  borderColor: '#775DD0',
                  offsetY: 5,
                  // offsetX: 5,
                  style: {
                    color: '#fff',
                    background: '#775DD0',
                   
                  },
                  text: 'Current month salesman performance',
                }
              }]
            },
            chart: {
              height: 250,
              type: 'bar',
            },
            plotOptions: {
              bar: {
                borderRadius: 5,
                columnWidth: '20%',
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              width: 5
            },
            
            grid: {
              row: {
                colors: ['#fff', '#f2f2f2']
              }
            },
            xaxis: {
              labels: {
                rotate: 120
              },
              categories: [],
              tickPlacement: 'off'
            },
            yaxis: {
              title: {
                text: ' Total Sales',
              },
            },
            title: {
              text: 'Current month salesman performance',
              align: 'left',
              style: {
                fontSize: '18px',
                fontWeight: 'bold',
                color: 'red'
              }
              
            },
            fill: {
              type: 'gradient',
              gradient: {
                shade: 'light',
                type: "vertical",
                shadeIntensity: 0.25,
                gradientToColors: undefined,
                inverseColors: true,
                opacityFrom: 0.85,
                opacityTo: 0.85,
                stops: [50, 0, 100]
              },
            }
          },
          show:false

            }
        },
        props:{
             CurMonth:{}

        },
        watch:{
            CurMonth(){

              if (this.CurMonth.totalM!=undefined) {
                  this.show=true
                // } else{
                this.series[0]={
                    data:this.CurMonth.totalM.reverse(),

                }

                this.chartOptions={
                    xaxis:{
                        categories:this.CurMonth.billM.reverse()
                    }
                }
            

          console.log("fsdd",this.chartOptions.labels,"hfiwudfkdfgajgac WUDG")
          // }
        }
        },

        components: {
               capexchart
                      },
    }
    }

</script>

<style scoped>
img{
  /* background-size: contain; */
  max-width: 50%;
}
</style>