<template>
    <v-layout justify-center class='ma-sm-5' >
          <v-flex sm12 xs11 >
            <v-card>
                <mapexchart type="line" height='400' :options="chartOptions" :series="series"></mapexchart>
            </v-card>
    </v-flex>
    </v-layout>
</template>

<script>
import mapexchart from 'vue-apexcharts'

export default {
  name:"monthlySales",
   data(){
    return{
              //  month:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
            //    days:[],


            series: [{
              name: "sales",
              data: []
          }],
          chartOptions: {
            chart: {
              height:300,
              type: 'line',
              zoom: {
                enabled: false
              },
        
            
            },
            dataLabels: {
              enabled: true
            },
            stroke: {
              curve: 'straight'
            },
            title: {
              text: 'Monthly Sales Trend',
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
               mapexchart
                      },

        beforeMount(){
            //    this.chartOptions.xaxis.categories=this.days
            // var date=new Date()
            // date.setDate(date.getDate()-2 )
            // date=date.getDay()
            // console.log(date)

          // console.log('eetfqehwrj')
           
            for (let i = 0; i < 12; i++) {
                var total=0
                var d=new Date()
                d.setMonth(d.getMonth()-i)
               var fullmonth= d.toDateString()

                var monthname=fullmonth.substr(4,4)
                // console.log(monthname)
                // console.log(fullmonth,'fullMonthS')
                // console.log(d.getMonth(),'mmonths')
                var date=d.toJSON().slice(0, 10)
                
                var month=d.getMonth()
                //    console.log(date,'date')
                  //  console.log(month,'month')
               
                   for (let j = 0; j < this.$store.state.Bill_Master.length; j++) {
                          var bdate= this.$store.state.Bill_Master[j].bill_date
                              var dateform= new Date(bdate)
                              // console.log(dateform.getMonth())
                              // console.log(d.getMonth(),"--------")
                         if (dateform.getMonth()==d.getMonth()) {
                               total+=this.$store.state.Bill_Master[j].net_price
                               console.log(total,'total')
                         }
                   }
                   this.series[0].data.unshift(total)
                //    var w_day=this.week[day]
                d.getMonth()
                // console.log(d,'Monthname')
                   this.chartOptions.xaxis.categories.unshift(monthname)
                //    console.log(w_day)


            }
            // console.log(this.chartOptions.xaxis.categories)
                
   }
}
</script>
