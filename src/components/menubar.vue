<template>
   <div class="mb-n7">
    
        <!-- <v-app id="inspire" > -->
            <!-- <v-card > -->
              <v-app-bar app
               height="130" color="cyan" >
        <v-alert class="transparent  d-flex flex-column pt-16" width="100%" dense>
          <v-flex 
         class="d-flex justify-space-between mt-n9"
        elevation="0"
        
      >
        
  
        <v-toolbar-title class="ml-lg-9  mt-3"> <v-card color="white" width="150" height="30" class="text-center rounded-xl my-2" rounded-r-xl>{{ $store.state.User.role }}</v-card> </v-toolbar-title>
  
      
        
 <div class="d-flex justify-center">
  <img  class="mt-1 ml-n9" src="../assets/download.jpeg" height="50px" width="50px" style="border-radius: 50%;">
        <p class="text-h5 ma-2 white--text ">H&W Medicals</p>
 </div>
        
  
       <span class="">
        <v-btn  @click="logout" color="white" rounded class="text-caption float-right red--text mt-2">
          <v-icon class="mx-1">mdi-logout-variant</v-icon>LOGOUT
        </v-btn> 
       </span>
        
       
      </v-flex>
     

     <v-flex class="d-flex justify-end " >
      <v-card class="d-flex" color="yellow" elevation="0" >
 
        <v-tabs
        color="purple"
    fixed-tabs
   dark
   background-color="cyan" 
  
  >
    <v-tab to="/" class="white--text mx-2 font-weight-black" v-show="DASH_flag">
      Dashboard
    </v-tab>
    <v-tab to="/s_view" class="mx-2 font-weight-black white--text text-no-wrap"  v-show="SV_flag">
      Stock View
    </v-tab>
    <v-tab to="/stent" class="mx-2 font-weight-black  white--text text-no-wrap" v-show="SE_flag">
      Stock Entry
    </v-tab>
    <v-tab to="/bill" class="mx-2 font-weight-black white--text text-no-wrap" v-show="BILL_flag">
      Bill Entry
    </v-tab>
    <v-tab to="/sales" class="mx-2 font-weight-black white--text text-no-wrap" v-show="SALREP_flag">
     Sales Report
    </v-tab>
    <v-tab to="/add" class="mx-2 font-weight-black white--text text-no-wrap" v-show="ADUSER_flag">
      Add User
    </v-tab>
    <v-tab to="/loghis" class="mx-2 font-weight-black white--text text-no-wrap" v-show="LOG_flag">
      Login History
    </v-tab>
  </v-tabs>
             <!-- <v-btn to="/dashboard" color=black class="mx-3 white--text rounded-r-xl" v-show="DASH_flag">Dashboard</v-btn>
             <v-btn to="/s_view" color=black class="mx-3 white--text rounded-r-xl" v-show="SV_flag">Stock View</v-btn>
             <v-btn to="/stent" color=black class="mx-3 white--text rounded-r-xl" v-show="SE_flag">Stock Entry</v-btn>
             <v-btn to="/bill" color=black class="mx-3 white--text rounded-r-xl" v-show="BILL_flag">Bill Entry</v-btn>
             <v-btn to="/sales" color=black class="mx-3 white--text rounded-r-xl" v-show="SALREP_flag">Sales Report</v-btn>
             <v-btn to="/add" color=black class="mx-3 white--text rounded-r-xl" v-show="ADUSER_flag">Add User</v-btn>
             <v-btn to="/loghis" color=black class="mx-3 white--text rounded-r-xl" v-show="LOG_flag">Login History</v-btn> -->
      </v-card>
  
     </v-flex>
        </v-alert>
              </v-app-bar>
    
    <v-dialog
      v-model="dialog"
      persistent
      width="500"
    >
      <v-card>
        <v-card-title class="text-h5">
        Sure to Logout?
        </v-card-title>
        
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            No
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="yes()"
          >
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- </v-card> -->
  <!-- </v-app>
</v-card> -->
   </div>


   
   

</template>

  

<script>
   export default{
       data(){
        return{
            // flag_1:false,
            // flag_2:false,
            // flag_3:false,
            // flag_4:false,
            // flag_5:false,
            // flag_6:false,
            // flag_7:false,
            dialog:false,

            collapseOnScroll:true
            
        }
       },
       props:{
             SV_flag:Boolean,
             BILL_flag:Boolean,
             DASH_flag:Boolean,
             SE_flag:Boolean,
             SALREP_flag:Boolean,
             ADUSER_flag:Boolean,
             LOG_flag:Boolean
       },
       methods:{
            logout(){
              console.log('qu')
            // console.log(this.dialog)
                   this.dialog=true
            },
            yes(){
              this.$emit('logout')
              this.dialog=false
            }

       }

   }
 
</script>