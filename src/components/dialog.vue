<template>
    <div>
        <div>
    <v-dialog
      width="500"
      v-model="dialo"
      persistent
    >
      <!-- <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Click Me
        </v-btn>
      </template> -->

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
         <v-btn icon @click="clc">
            <v-icon>mdi-close-circle</v-icon>
         </v-btn>
         <h5 class="mx-5">ADD STOCK</h5>
        </v-card-title>

           <v-alert width="70%" class="mx-16">
            <v-text-field
            v-model="med_nam"
            label="Medicine Name"
            outlined
            dense
          ></v-text-field>

          <v-text-field
          v-model="med_brand"
            label="Brand"
            outlined
            dense
          ></v-text-field>

          <v-btn block class="primary" @click="ad">ADD</v-btn>

           </v-alert>
       
      </v-card>
    </v-dialog>
  </div>
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
  <!-- {{ $store.state.m_master }} -->
    </div>
</template>

<script>
  export default {
    data () {
      return {
        // dialog:false,
        med_nam:'',
        med_brand:'',     
        snackbar: false,
         text: '',
         timeout: 2000, 
         clr:'',
         ad_med:{},
      }
    },
    props:{
        dialo:Boolean
    },
    methods:{
        clc(){
          // this.dialo=false
              // this.dialog=this.dialo
            
            // this.dialog=this.dialo
            this.$emit("Passing")
            // this.dialo=false

        },
        ad(){
              if (this.med_nam==''||this.med_brand=='') {
                  this.text='Field should not be empty';
                  this.clr='#FF6E40'
                  this.snackbar=true;
              }
              for (let index = 0; index < this.$store.state.m_master.length; index++) {
                   if (this.med_nam==this.$store.state.m_master[index].m_name) {
                        //  this.med_brand=this.$store.state.m_master[index].brand;
                        this.text='Medicine is already exist and cannot be added';
                         this.clr='#FF6E40'
                           this.snackbar=true;
                           break;
                   }else{
                         this.ad_med={
                                m_name:this.med_nam,
                                brand:this.med_brand,
                         }
                         this.$emit('med',this.ad_med)
                         this.$store.commit('set',this.ad_med);
                         this.text='Medicine added Successfully :)';
                         this.clr='#64DD17'
                         this.snackbar=true;
                         break;

                         
                   }
                 }

          // for (let index = 0; index < this.$store.state.m_master.length; index++) {
          //         if (this.med_name==this.$store.state.m_master[index].m_name) {
          //               this.med_brand=this.$store.state.m_master[index].brand;
          //         }
          //       }
        }
    }
  }
</script>