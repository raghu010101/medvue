<template>
    <div class='cuspad'>
     
         <!-- <v-app id="inspire" > -->
             <!-- <v-card > -->
               <v-app-bar fixed elevate-on-scroll height="150" width="100%" color="#B2EBF2" class="">
         <v-alert class="d-flex flex-column mb-n2" width="100%" color="cyan" dense>
           <v-flex 
         dark
         flat
          class="d-flex cyan pa-1"
         elevation="0"
         
       >
         
   
       <div v-show="false">
        <v-toolbar-title class="ml-9 mt-3" absolute> <v-card color="#E0F7FA" width="50" height="40" class="text-center" ><h6>{{ "System Admin" }}</h6></v-card> </v-toolbar-title>
   
       </div> 

       <div class="mt-4 mr-3">
        <!-- <v-avatar color="indigo" size="40">
        <v-icon dark dense>
          mdi-account-circle
        </v-icon>
      </v-avatar> -->
     <v-btn dense fab color="#1A237E" x-small @click="draw"> <v-icon color="white" >mdi-menu</v-icon></v-btn>
       </div>

       <v-dialog
      transition="slide-x-transition"
      v-model="drawer"
      absolute
      temporary
      width="230"
      height="400"
      class="mt-16 setposition"
    >
    <v-card>
      <v-list-item>
        <v-list-item-avatar color="purple">
          
              <v-icon  color="white">
          mdi-account-circle
        </v-icon>
          
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class=mx-1>{{ $store.state.User.role  }}</v-list-item-title>
        </v-list-item-content>

      <v-btn fab small color="red" outlined>
          <v-icon color="red" dense @click="closedraw">mdi-sword-cross</v-icon>
      </v-btn>
      </v-list-item>

      

      <v-divider color="purple"></v-divider>

      <v-list-item-content class=" " >
            <v-col>
            <!-- <v-btn flat to="/dash" class="mx-3 primary rounded-r-xl" v-show="DASH_flag">Dashboard</v-btn> -->
            <!-- <v-btn flat to="/dash" class="mx-3 primary rounded-r-xl" v-show="DASH_flag">Dashboard</v-btn> -->
            <TransitionGroup name="slide-fade">

                <v-card v-show="alert" elevation="0"  class="mb-2" key="dashboard">
                  <!-- <h6>hello</h6>{{ DASH_flag }} -->
                    <v-btn key="dashboard" to="/" class="mx-2 purple white--text rounded-r-xl" v-show="DASH_flag">Dashboard</v-btn>
                </v-card>
                <v-card v-show="alert1" elevation="0" class="mb-2" key="stock view">
                  <!-- <h6>helo</h6> -->
                    <v-btn key="stock view" to="/s_view" class="mx-3 purple white--text rounded-r-xl" v-show="SV_flag">Stock View</v-btn>
                </v-card>
                <v-card v-show="alert2" elevation="0" class="mb-2" key="stock entry">
                    <v-btn key="stock entry" to="/stent" class="mx-3 purple white--text rounded-r-xl" v-show="SE_flag">Stock Entry</v-btn>
                </v-card>
                <v-card  v-show="alert3" elevation="0" class="mb-2" key="bill entry">
                    <v-btn key="bill entry" to="/bill" class="mx-3 purple white--text rounded-r-xl" v-show="BILL_flag">Bill Entry</v-btn>
                </v-card>
                <v-card v-show="alert4" elevation="0" class="mb-2" key="sales report">
                    <v-btn key="sales report" to="/sales" class="mx-3 purple white--text rounded-r-xl" v-show="SALREP_flag">Sales Report</v-btn>
                </v-card>
                <v-card v-show="alert5" elevation="0" class="mb-2" key="adduser">
                    <v-btn key="adduser" to="/add" class="mx-3 purple white--text rounded-r-xl" v-show="ADUSER_flag">Add User</v-btn>
                </v-card>
                <v-card v-show="alert6" elevation="0" class="mb-2" key="login history">
                    <v-btn key="login history" to="/loghis" class="mx-3 purple white--text rounded-r-xl" v-show="LOG_flag">Login History</v-btn>
                </v-card>
                </TransitionGroup>
          
            </v-col>
       </v-list-item-content>
       </v-card>
    </v-dialog>

          <div class="d-flex mt-3 ml-16">
            <img  class="mt-1 ml-n9" src="../assets/download.jpeg" height="30px" width="30px" style="border-radius: 50%;">
         <h3 class="font-italic white--text mt-2 text-body-1">H&W Medicals</h3>
          </div>
 
         <v-spacer></v-spacer>
   
        <span class=" my-3">
         <v-btn @click="logout" x-small elevation="2" fab class="text-caption float-right  mt-2 d-flex flex-wrap">
           <v-icon color="red" size="20" class="d-flex flex-wrap font-weight-black" dense>mdi-logout</v-icon>  <h5 class="font-weight-black"></h5>
         </v-btn> 
        </span>
         
        
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
   
    </div>
 
 
    
    
 
 </template>
 
 <script>
    export default {
      name:"mbar",
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
             drawer:false,

             alert:false,
             alert1:false,
             alert2:false,
             alert3:false,
             alert4:false,
             alert5:false,
             alert6:true


             
         }
        },
        props:{
              SV_flag:Boolean,
              BILL_flag:Boolean,
              DASH_flag:Boolean,
              SE_flag:Boolean,
              SALREP_flag:Boolean,
              ADUSER_flag:Boolean,
              LOG_flag:Boolean,
              Role:String
        },
        methods:{
             logout(){
                    this.dialog=true
                  
             },
             yes(){
               console.log("Welcome")
                this.$emit('logout')
               this.dialog=false
             
             },
             draw(){
               this.drawer =true
                              setTimeout(()=>{
                                console.log(
                                  "Drawing...", 
                                )
                                 this.alert=true
                               },4000 ),

                               setTimeout(()=>{
                                console.log("Drawing 2...");
                          this.alert1=true
                               },3500),

                               setTimeout(()=>{
                          this.alert2=true
                               },3000),

                               setTimeout(()=>{
                          this.alert3=true
                               },2500),

                               setTimeout(()=>{
                          this.alert4=true
                               },2000),
                               
                               setTimeout(()=>{
                          this.alert5=true
                               },1500),
                               
                               setTimeout(()=>{
                          this.alert6=true
                               },1000)
             },
             closedraw(){
                this.alert=false
                this.alert1=false
                this.alert2=false
                this.alert3=false
                this.alert4=false
                this.alert5=false
                this.alert6=false

                this.drawer =false
             }
 
        },
        
 
    }
  
 </script>

 <style >

.slide-fade-enter-active
 {
  transition: all 1s;
}

.slide-fade-enter{
  opacity: 0;
  transform: translate(100px);
  
}
.cuspad{
  margin-bottom: 30%;
}



</style>