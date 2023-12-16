<template>
    <v-layout justify-center class="ma-sm-5 ma-0">
        <v-flex sm12 xs11>

          <v-card id="chart" class='mt-7 mb-5'>
          <dapexchart type="line" height="400" :options="chartOptions" :series="series"></dapexchart>
         </v-card>

</v-flex>
    </v-layout>
</template>

<script>
      import dapexchart from "vue-apexcharts";
     export default{
  name:"dailySales",
        data(){
          
          return{
               week:['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
            //    days:[],


            series: [{
              name: "Sales ",
              data: []
          }],
          chartOptions: {
            chart: {
              // height: 350,
              type: 'line',
              zoom: {
                enabled: false
              } 
            },
            dataLabels: {
              enabled: true
            },
            stroke: {
              curve: 'straight'
            },
            title: {
              text: 'Daily Sales Trend',
              align: 'center',
              
            },
            grid: {
              row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
              },
            },
            xaxis: {
              categories:[],
            }
          },
          
          }
        },
        components: {
               dapexchart
                      },

        beforeMount(){
            //    this.chartOptions.xaxis.categories=this.days
            // var date=new Date()
            // date.setDate(date.getDate()-2 )
            // date=date.getDay()
            // console.log(date)

          
           
            for (let i = 0; i < this.week.length; i++) {
                var total=0
                var d=new Date()
                d.setDate(d.getDate()-i)
                console.log(d)
                var date=d.toJSON().slice(0, 10)
                var day=d.getDay()
                   console.log(date,'date')
                   console.log(day,'day')
                   for (let j = 0; j < this.$store.state.Bill_Master.length; j++) {
                         if (date==this.$store.state.Bill_Master[j].bill_date) {
                               total+=this.$store.state.Bill_Master[j].net_price
                         }
                   }
                   this.series[0].data.unshift(total)
                   var w_day=this.week[day]
                   this.chartOptions.xaxis.categories.unshift(w_day)
                  //  console.log(w_day)


            }
                
            // }
        }
     }
</script>