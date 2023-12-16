<template>
    <div class=" mt-sm-0">
       <v-layout justify-center>
        <v-flex sm11 xs11>
              <v-card class="pa-4 ma-4">
                <v-layout>
                      <div class=" text-sm-h6 primary--text">REFILL STOCK</div>
                </v-layout>
                <v-layout justify-end >
                 <v-btn color="warning" class="ma-5 pa-4" @click="dialoge"> ADD New Stock</v-btn>
                </v-layout>
                <v-layout flex-wrap justify-center>
                 <v-flex sm6 xs10>
                  <v-select
                    @change="seb"
                        v-model="select"
                       :items="items"
                        label="Medicine Name"
                        outlined
                        class="mx-4 "        
                ></v-select>
                 </v-flex>
                 <v-flex sm6 xs10>
                   <v-text-field
                   readonly
                   v-model="brand"
                     label="Brand"
                      outlined
                      class="mx-4 py-0 my-0 black--text"
                      dense
                  ></v-text-field>
                 </v-flex>

                 <v-flex sm6 xs10>
                  <v-text-field
                  v-model.number="qty"
                  type="number"
                     label="Qty"
                      outlined
                      dense
                      class="mx-4"
                      
                  ></v-text-field>
                 </v-flex>

                 <v-flex sm6 xs10> 
                      <v-text-field
                  v-model.number="price"
                  type="number"
                     label="Unit Price"
                      outlined
                      dense
                      class="mx-4"
                      
                  ></v-text-field>
                   </v-flex>
              </v-layout>

              <v-layout justify-center>
              <v-flex lg10 class="">
                    <v-btn block class=" my-4" color="primary" @click="up">UPDATE</v-btn>
              </v-flex></v-layout>
            </v-card>
            </v-flex>
           

            <!-- _______________________ -->
            <!-- <v-btn @click="log">Log</v-btn>
            <v-btn @click="his">Loghis</v-btn>
            <v-btn @click="s_v">s_view</v-btn> -->

            <!-- {{ $store.state.Stock }} -->

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
                
        <dial :dialo="sho" @Passing="passing" @med="med"></dial>
      
       </v-layout>
            
       
    </div>
</template>







<script>
import dial from "../components/dialog.vue";
  export default {
    data: () => ({
      items: [],
      sho:false,
    //   dialo:true,
    //   dialog:true,
    snackbar: false,
    text: '',
    timeout: 2000, 
    clr:'',

    select:'',
    brand:'',
    qty:0,
    price:0,
    stock:{},
     count:0

    
    }),
    components:{
        dial
    },
    methods:{
        dialoge(){
            this.sho=true;
        },
        passing(){
            this.sho=false;
        },
        med(new_med){
             this.items.push(new_med.m_name)
        },
        up(){
                if(this.select==''||this.qty==0||this.price==0){
                     this.text="Please fill all the details!!!!"
                     this.clr='#FF6E40'
                     this.snackbar=true;
                }else{
                    for (let index = 0; index < this.$store.state.Stock.length; index++) {
                      this.count=0
                         if (this.select==this.$store.state.Stock[index].m_name) {
                            if (this.select==this.$store.state.Stock[index].m_name){
                                     this.$store.state.Stock[index].qty+=this.qty;
                                     this.$store.state.Stock[index].unit_price=this.price;
                                    //  this.$store.commit('set_stock',this.stock)

                                    this.select='',
                                     this.brand='',
                                      this.qty=0,
                                           this.price=0,
                                       this.text="Details updated Successfully (:"
                                       this.clr='#64DD17'
                                        this.snackbar=true;
                                           this.count++
                                     break;
                    
                        }
                        
                    }
                  }
                    // for (let index = 0; index < this.$store.state.Stock.length; index++) {

                    // }
                    if(this.count==0){
                            this.stock={
                             m_name:this.select,
                             qty:this.qty,
                             unit_price:this.price,
                             
                             }
                            

                              this.$store.commit('set_stock',this.stock)
                              this.stock={}
                             this.text="Medicine Details added Successfully (:"
                             this.clr='#64DD17'
                            this.snackbar=true;
                            // break;
                        }
                         
                       
                    //  this.stock={
                    //        m_name:this.select,
                    //        qty:this.qty,
                    //        unit_price:this.price,
                    //  }
                    //    this.$store.commit('set_stock',this.stock)
                    // this.text="Details updated Successfully (:"
                    //  this.clr='#64DD17'
                    //  this.snackbar=true;
                }
        },
        seb(){

            for (let index = 0; index < this.$store.state.m_master.length; index++) {
                  if (this.select==this.$store.state.m_master[index].m_name) {
                        this.brand=this.$store.state.m_master[index].brand;
                  }
                }
        },
        log(){
            this.$router.push('/log')
        },
        his(){
            this.$router.push('/loghis')
        },
        s_v(){
          this.$router.push('/s_view')
        }

    },
    beforeMount(){
               for (let index = 0; index < this.$store.state.m_master.length; index++) {
                         this.items[index]=this.$store.state.m_master[index].m_name
               }
    }
  }
</script>