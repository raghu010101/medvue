<template>
   <div class="" >
    <!-- <v-sheet  > -->
      <!-- <v-img height="78vh" src="../assets/login.svg"> -->
   <div v-show="flag">
    <!-- <v-card  elevation="0 " height="100%" class="pa-6 transparent  d-flex  align-center"> -->
     <v-layout class="d-flex justify-center " >
   <v-flex lg3 >
        <v-card height="170" width="350" class="text-center mx-auto" color="purple"  elevation="0">
            <h2 class="pt-14 white--text font-italic">Welcome {{ $store.state.User.u_name }}</h2>
        </v-card>

    </v-flex>
   </v-layout>
     <!-- </v-card> -->
     </div>
    <!-- ------------------------ Biller -------------------------------->
<div v-show="bill_flag">
     <!-- <v-card  class="pa-6 d-flex align-center transparent" > -->
          <v-layout justify-center align-center >
   <v-flex lg3 >
    <v-card height="200" width="300" class="text-center pa-10 mx-auto" color="#E6EE9C">
        <h2 class="text-center font-italic">HI <span class="success--text">{{ $store.state.User.u_name }}</span></h2>
                      <div ><h3>Your Today's Sales</h3>{{ total }}
                    <v-icon :color="clr" v-show="down">mdi-arrow-down</v-icon>
                    <v-icon :color="clr" v-show="up">mdi-arrow-up</v-icon>{{ '('+per.toFixed(2) +'%)' }}

                </div>  
                </v-card>
                 </v-flex>
   </v-layout>
                  <!-- </v-card> -->
  </div>
 <!-- ---------------------------Manager -->
        <v-layout >
            <v-flex >
            <v-card  class="pb-5 transparent" v-show="man_flag" outlined elevation="">
                        <v-flex class='d-flex justify-center justify-sm-start'>
                            <!-- <p>{{ $store.state.User.u_name }}</p> -->

                             <v-card  elevation="6" outlined class="text-center mx-8 rounded-circle pa-5 ma-4" color='#ECEFF1' width="350" >
                            <h2 >Welcome <P class="success--text text--accent-3">{{ $store.state.User.u_name }}</P></h2>
                              <h3>Today's Sales</h3>
                              <h4 class="green--text text--accent-3">{{ max_tot }}</h4>

                              <h3>Current Inventry value</h3>
                              <h4 class="green--text text--accent-3">{{ inv_tot }}</h4>
                         </v-card>
                        </v-flex> 

                         <dsales ></dsales>
                         <msales></msales>
                        <todaysal/>
                          <curmonth/>
             </v-card>
            </v-flex>
        </v-layout> 

    <!-- </v-sheet> -->
      <!-- </v-img> -->
   </div>
</template>

<script>
      import dsales from "../components/daily_sales.vue";
      import msales from '../components/monthly_sales.vue';
      import todaysal from "../components/todaysal.vue";
      import curmonth from "../components/Currmonthsale.vue";
        export default{
            data(){
                return{
                    flag:false,
                    bill_flag :false,
                    man_flag:false,

                    inv_tot:0,
                     total:0,
                     max_tot:0,
                     prev_tot:0,
                     name:this.$store.state.User.u_name,
                     down:false,
                     up:false,
                     clr:'',
                     per:0
                }
            },
            components:{
                dsales,
                msales,
                todaysal,
                curmonth
            },
             mounted(){
              //  alert("mounted")
                //    var name=this.$store.state.Login_history[this.$store.state.Login_history.length-1].u_name
                //    for (let i = 0; i <this.$store.state.login.length; i++) {
                //          if (name==this.$store.state.login[i].u_name) {
                //             var role=this.$store.state.login[i].role
                //          }
                       
                //    }
                //    console. // console.log('hello')log(role)
                           var rol=this.$store.state.User.role
                            
                            var  dates=new Date().toJSON().slice(0, 10)
                //  console.log(dates)
                           var pre_date=new Date()
                           pre_date.setDate(pre_date.getDate()-1)
                           var p_date=pre_date.toJSON().slice(0, 10)
                // console.log(p_date) 

                            //  var day1=new Date().getDay()
                // console.log(day1)

                 if (rol=='SystemAdmin'|| rol=='Inventry'){
                    this.flag=true;
                    this.bill_flag=false;
                    this.man_flag=false;
                    // console.log(this.$store.state.User.role)
                 }


                 ////////////////////////////////////BILLER//////////////////////////


       if (this.$store.state.User.role=='Biller') {
              alert(this.$store.state.User.role)
       for (let i = 0; i < this.$store.state.Bill_Master.length; i++) {
        // console.log(this.$store.state.Bill_Master[i].user_id+"=="+this.name)
        // console.log(dates+'=='+this.$store.state.Bill_Master[i].bill_date)

            if(this.$store.state.Bill_Master[i].user_id==this.name && dates==this.$store.state.Bill_Master[i].bill_date){
            // console.log('hdsfg')
                              this.total+=this.$store.state.Bill_Master[i].net_price;
                              break
                         }
                        
                    }


         for (let i = 0; i < this.$store.state.Bill_Master.length; i++) {
        // console.log(this.$store.state.Bill_Master[i].user_id+"=="+this.name)
        // console.log(dates+'=='+this.$store.state.Bill_Master[i].bill_date)

            if(this.$store.state.Bill_Master[i].user_id==this.name && p_date==this.$store.state.Bill_Master[i].bill_date){
            // console.log('hdsfg')
                              this.prev_tot+=this.$store.state.Bill_Master[i].net_price;
                              break
                         }

                        
                    }
                        // if (this.total>this.prev_tot) {
                        //     this.per=(-(this.prev_tot-this.total)/this.prev_tot)*100;
                        // }else
                           

                      if (this.prev_tot>this.total) {
                        this.per=((this.prev_tot-this.total)/this.prev_tot)*100;
                           this.down=true;
                           this.clr='#D50000'
                      }else{
                        this.per=(-(this.prev_tot-this.total)/this.prev_tot)*100;
                           this.up=true;
                           this.clr='#00C853'
                      }
                     this.bill_flag=true;
                     this.flag=false;
                     this.man_flag=false
                  }

                  /////////////////////////////////////////////MANAGER///////////////////////////

                  if (this.$store.state.User.role=='Manager'){
                    //  alert("`dsales`")
                       this.bill_flag=false
                       this.man_flag=true
                       this.flag=false;
                       console.log(this.bill_flag,this.flag,this.man_flag);
                 for (let i = 0; i < this.$store.state.Bill_Master.length; i++) {
                    if(dates==this.$store.state.Bill_Master[i].bill_date){
                              this.max_tot+=this.$store.state.Bill_Master[i].net_price;
                              break
                         }
                    
                    
                 }
                 for (let i = 0; i < this.$store.state.Stock.length; i++) {
                    this.inv_tot+=this.$store.state.Stock[i].qty * this.$store.state.Stock[i].unit_price
                 }
                    

                  }

             }
           }
</script>