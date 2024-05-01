<template>
  <v-app>
    <v-card class="transparent img" elevation="0" >

      <div>
        
        <menub  v-if="flag"  class="d-sm-block d-none" :SV_flag="sv_flag" :BILL_flag="bill_flag" :DASH_flag="dash_flag" :SE_flag="se_flag" :SALREP_flag="salrep_flag" :ADUSER_flag="aduser_flag" :LOG_flag="log_flag" @logout="logout"></menub>

          <mobilemenu class="d-sm-none d-block" v-if="flag" :SV_flag="sv_flag" :BILL_flag="bill_flag" :DASH_flag="dash_flag" :SE_flag="se_flag" :SALREP_flag="salrep_flag" :ADUSER_flag="aduser_flag" :LOG_flag="log_flag" @logout="logout" />

        <!-- <v-img height=70vh  src="./assets/login.svg"> -->
       
       <v-card   v-if="!flag"> 
         <v-img height="100vh" src="./assets/login.svg">
            <log  @setbill="setbill" @setmana="setmana" @setsys="setsys" @setinv="setinv" @flagshow="flagshow"></log> 
            </v-img>   
        </v-card> 

                  <!-- <h1>{{ date }}</h1> -->
    <div class=" customclass "  v-if="flag "  >
      <!-- <v-img class="img" src="./assets/login.svg"> -->
      <router-view />
      <!-- </v-img> -->
    </div>

      </div>
          </v-card>
    <!-- </v-img> -->
  </v-app>
</template>


<script>
import menub from "./components/menubar.vue";
import log from "./components/login.vue";
import mobilemenu from "./components/menubarMobile.vue"   
export default {
  name: "App",
     data(){
      return{
             flag:false,
             sv_flag:false,
             bill_flag:false,
             dash_flag:false,
             se_flag:false,
             salrep_flag:false,
             aduser_flag:false,
             log_flag:false,

            date: new Date().toJSON().slice(0,10)
      }
     },
     components:{
      menub,
      log,
      mobilemenu
     },
     methods:{
             setbill(){
                      this.sv_flag=true;
                      this.bill_flag=true;
                      this.dash_flag=true;
             },

             setmana(){
              this.se_flag=true;
              this.sv_flag=true;
              this.salrep_flag=true;
              this.dash_flag=true;
            

             },
             setsys(){
              // console.log('hi')
              // alert("SystemAdmin")
              this.aduser_flag=true;
              this.log_flag=true;
              this.dash_flag=true;
             },
             setinv(){
              // alert("inventory")
              
              this.se_flag=true;
              this.sv_flag=true;
              this.dash_flag=true;
              // this.$router.push('/dashboard')
             },
             flagshow(){
              this.flag=true
              localStorage.setItem('flag','true')
             },
             logout(){
              // alert("logout");
              console.log(this.$route.path,")))))))))))))))");
              if (this.$route.path!="/"){
                      this.$router.replace("/")
              }
              localStorage.setItem('flag','false')
             this.flag=false,
            this.sv_flag=false,
            this.bill_flag=false,
             this.dash_flag=false,
             this.se_flag=false,
            this.salrep_flag=false,
            this.aduser_flag=false,
            this.log_flag=false  
            
                  var uname=this.$store.state.Login_history[this.$store.state.Login_history.length-1].u_name;
                  var type='Logout';
                  var str={
                    u_name:uname,
                    type:type,
                    date:this.date
                  }
                  this.$store.commit("set_logout",str)
                     str={}
                  // this.$router.push('/')
             }
     },
     mounted(){
      if( localStorage.getItem('flag')=='true'){
              this.flag=true
      }else{
        this.flag=false
      }
     }
  
};
</script>
<style scoped>
.customclass{
  padding-top: 15%;
  margin: auto;
}
.img{
  background-image: url('./assets/login.svg');
  background-size: cover;

  /* background-size: contain; */
}

</style>

// </style>