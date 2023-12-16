<template>
  
  <div class="" 
    >
      <!-- <v-img height="78vh" src="../assets/login.svg"> -->
    <v-layout class="" justify-center>
      <v-flex lg9 xs11>
 <h3 class="my-5">User Details</h3>
    <v-card elevation="0"  class=" transparent mx-sm-0" >
    <v-expansion-panels inset>
      <v-expansion-panel >
        <v-expansion-panel-header
        color="#29B6F6" class=" white--text">Item</v-expansion-panel-header>
        <v-expansion-panel-content>
         <v-layout justify-center  wrap class="pt-10"> 
                    <v-flex sm3 xs11 >
                      <v-text-field   
                    dense counter="15"
                      color="success" type="text"
                        label="User Name"
                       v-model="name"
                        outlined
                        class="mx-sm-4 my-sm-6"
                      ></v-text-field>
                    </v-flex>

                      <v-flex sm3 xs11>
                        <v-text-field
                     color="success" 
                     :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                     :rules="[ rules.min]"
                     @click:append="show1 = !show1"
                     :type="show1 ? 'text' : 'password'"
                     dense counter
                       label="Password"
                       hint="Password should should be unique"
                      v-model="u_pass"
                       outlined
                       class="mx-sm-4 my-sm-6"
                     ></v-text-field>
                      </v-flex>

                    <v-flex sm3 xs11>
                       <v-select
                     dense
                     color="success"
                     class="mx-sm-4 my-sm-6"
                     v-model="u_role"
                        :items="items"
                       label="Role"
                          outlined
                    ></v-select>
                    </v-flex>

                    <v-flex sm2 xs10>
                      <v-btn 
                      block
                    class="mx-sm-4 my-sm-6 primary" 
                    @click="adds"     
                     >ADD</v-btn>
                    </v-flex>

                    
         </v-layout>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
  <div class="text-center">
     <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      :color="clr"
      top
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
  
      </v-flex>
    </v-layout>
    
      <!-- </v-img> -->
    <!-- {{ $store.state.login }} -->
  </div>
 

</template>

<script>
 export default{
    data(){
        return{
            items: ['Biller', 'Manager', 'System Admin', 'Inventory'],
            add:{},
            name:'',
            u_pass:'',
            u_role:'',
            snackbar: false,
            text: '',
            timeout: 2000, 
            clr:'',
            show1:false,
            flag:false,
            flag1:false,
            
            rules: {
        //   required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
        //   emailMatch: () => (`The email and password you entered don't match`),
        },

        }
        
    },

    methods:{
         adds(){

            if (this.name==""||this.u_pass=="") {
                        this.text='No Field should be empty ';
                          this.clr='#FFA726' 
                        //   console.log('he')  
                        this.snackbar=true;
                         return
                         
                    }

            // for (let index = 0; index < this.$store.state.login.length; index++) {
                
                for (let index = 0; index < this.$store.state.login.length; index++) {
                    // this.flag=this.$store.state.login[index].pass==this.u_pass
                    this.flag1=this.$store.state.login[index].u_name==this.name
                          //  console.log('jfdksdg')
                          break;
                  }

                  if (this.flag1) {

                        this.snackbar=true;
                         this.text='User already exists';
                         this.clr='#EF5350'
                          // break;
  
                         }

                    // if (this.name==null||this.u_pass==null) {
                    //     this.text='No Field should be empty ';
                    //       this.clr='#FFA726'   
                    //       break 
                    // }

                
                //     if (this.flag||this.flag1) {

                   
                //  }
                 if(!this.flag1) {
                  console.log("done");
                        //  this.snackbar=true;
                        //   this.text='User already exists';
                        //   this.clr='#EF5350'
                        //   break;
                        //   console.log(this.$store.state.login[index].pass)
                    // console.log(this.u_pass)
                    this.add={
                          Name:this.name,
                          Pass:this.u_pass,
                          Role:this.u_role
                    }
                    this.$store.commit('store_arr',this.add);
                          this.snackbar=true;
                          this.text='Details added successfully';
                          this.clr='#1B5E20'
                          // break;
                //  }
                
                
                
               
                 

            }
                          this.add={};
            // this.$refs.form.resetValidation()
         }

    }

 }
</script>
