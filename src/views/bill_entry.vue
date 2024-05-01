<template>
   <div>
    <v-layout align-center justify-center>
      <v-flex lg12 xs12 class="mx-1">
        <v-alert class="transparent">
        <!-- <v-flex lg11> -->
          <div class=" " >
                <v-flex class="">
                    <h3 class="font-weight-black my-4 primary--text"><span>Bill Entry</span></h3>
                </v-flex> </div>
        <!-- </v-flex> -->

       <v-flex lg12 xs12>
         <v-card class="">
            <v-expansion-panels>
            <v-expansion-panel >
             <v-expansion-panel-header
             class="primary white--text">
               Item
               </v-expansion-panel-header>
             <v-expansion-panel-content >

                  <v-layout wrap
                   class="d-flex justify-space-around my-4 ">
                 
                    <v-flex sm4 xs11>
                     <v-autocomplete 
                        :items="items"
                         label="Medicine Name"
                          outlined
                          dense
                          class="mx-4 my-sm-6"
                          v-model="med_name"
                     ></v-autocomplete>
                   </v-flex>

                     <v-flex sm4 xs11>
                       <v-text-field
                      label="Quantity"
                     color="primary"
                     type="number"
                     dense counter
                      v-model.number="bill_qty"
                       outlined
                       class="mx-4 my-sm-6"
                     ></v-text-field>
                     </v-flex>

                
                    <v-flex sm3 xs11  class="d-flex">
                       <v-btn 
                    class="mx-4 my-sm-6 error " 
                    @click="adds" 
                    width="100"    
                    dense
                     >ADD</v-btn>

                     <v-btn
                            outlined
                            @click="refresh"
                          
                            color="primary"
                            class="text-caption  blue--text  mx-4 my-sm-6 ">
                      <v-icon>mdi-refresh</v-icon>
                     <h4 class="text-capitalize"> Refresh</h4>
                     </v-btn>
                    </v-flex>
                  </v-layout>
            </v-expansion-panel-content>
           </v-expansion-panel>
            </v-expansion-panels>
        </v-card>
       </v-flex>

                  <v-card  class=" py-2" >
                       <v-layout class=" my-2  mr-5 " justify-end wrap sm-nowrap>
                              <!-- <v-flex class=""> -->
                                 <v-flex md1 xs4 class="mr-sm-8">
                                <v-btn class=" mt-4 ma-3  text-caption"
                               width="100"
                               color="primary"
                               outlined
                               dense
                               @click="preview"
                               >
                                PREVIEW
                               </v-btn>
                               </v-flex>

                               <v-flex md1 xs4 class='mr-sm-3'>
                                <v-btn class=" mt-4 ma-3 text-caption"
                                color="primary"
                                outlined
                               width="100"
                               @click="save"
                               dense>
                                SAVE
                               </v-btn>
                               </v-flex>
                               </v-layout>
                              <v-layout>
                               <v-flex lg6 xs12 class="d-flex  justify-space-around px-5 mt-5 mb-2 align-center">
                                <div class="d-sm-flex">
                                  <h5 class='font-weight-medium d-flex mx-sm-4 text-caption '>BILL_NO:<p class="text-caption">{{ bill }}</p> </h5>
                                <h5 class='font-weight-medium d-flex text-caption'>DATE: <p class="text-caption mx-1">{{ date }}</p> </h5>
                                </div>
                               <div  class="d-sm-flex">
                                 <h5 class='font-weight-medium d-flex  mx-sm-8 text-caption'>TOTAL:<p class="text-caption mx-1">{{ total }}</p> </h5>
                                <h5 class='font-weight-medium d-flex text-caption'>GST:<p class="text-caption mx-1">{{ gst.toFixed(2) }}</p> </h5>
                                <h5 class='font-weight-medium d-flex text-caption mx-sm-8'>Net_Payable:<p class="text-caption mx-1">{{ n_p }}</p> </h5>
                               </div>
                               </v-flex>
                              <!-- </v-flex> -->
                       </v-layout>
                      <div class="d-flex justify-end my-4">
                         <v-btn
                            outlined
                            color="success"
                            class="text-caption  green--text mr-4">
                          <span> DOWNLOAD
                            <v-icon>mdi-briefcase-download</v-icon></span>
                                                 </v-btn>
                      </div>

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
                     <!-- <v-flex lg12 xs11> -->
                       <bill_dail :dialo="d_box" @prevue="prevue" @prints="prints"
                        :med_det="details" :total="total" :gst="gst" :net_p="n_p"></bill_dail>
                     <!-- </v-flex> -->
                  <!-- <v-flex lg12 sm11> -->
                    <tab :value="b_table"></tab>
                  <!-- </v-flex> -->
                  <!-- {{ $store.state.Bill_Details }} -->
                  <!-- {{ $store.state.Bill_Master }} -->
                  <!-- {{ $store.state.Stock }} -->
                
    </v-alert>
      </v-flex>
    </v-layout>
   </div>
</template>

<script>
     import bill_dail from "../components/bill_dialog.vue";
     import tab from "../components/bill_table.vue";
    export default{
        data(){
            return{
                str_add:{},
                str_sav:{},

                b_table:[],
                bill_tab:{},

                details:[],
                str:{},

                   timeout:1000,
                   clr:'',
                   text:'',
                   snackbar:false,
                d_box:false,
                items:[],

                unit_p:0,
                med_name:'',
                bill_qty:0,
                total:0,
                amount:0,
                gst:0,
                n_p:0,
                u_name:'',
                brand:'',

                date: new Date().toJSON().slice(0,10),
                bill:Math.floor(Math.random() * 1000),
            }
        },
        components:{
              tab,
              bill_dail
        },
        methods:{
                  adds(){
                            if (this.med_name==''||this.bill_qty==0) {
                                this.text='Please fill the details'   
                                this.clr='#EF5350'
                                this.snackbar=true
                            }
                           
                    for (let index = 0; index < this.$store.state.Stock.length; index++) {
                            
                      // if (this.med_name!=this.$store.state.Stock[index].m_name) {
                      //          this.text='Sorry!! Currently Medicine is not Available'   
                      //           this.clr='#EF5350'
                      //           this.snackbar=true
                      //           break;
                      // }
                       
                        //  this.items[index]=this.$store.state.Stock[index].m_name
                        if (this.med_name==this.$store.state.Stock[index].m_name) {
                                   
                           this.unit_p= this.$store.state.Stock[index].unit_price;
                           

                            if (this.$store.state.Stock[index].qty<this.bill_qty) {
                                this.text='Insufficient Quantity'   
                                this.clr='#EF5350'
                                this.snackbar=true
                                break;
                            }
                            // document.write('hekay')data for preview
                             this.amount = this.bill_qty*this.unit_p;
                             this.total +=this.amount;
                             this.gst=this.total*(18/100)  
                             this.n_p= this.total+this.gst

                             this.str={
                                name:this.med_name,
                                qty:this.bill_qty,
                                 amt:this.amount,
                                //  gst:this.gst,
                                //  tot:this.total,
                                //  net:this.n_p
                             }

                             this.details.push(this.str)

                             //data for bill table
                              this. bill_det ={
                                m_name:this.med_name,
                                brand:this.brand,
                                qty:this.bill_qty,
                                amt:this.amount
                              }
                              this.b_table.push(this.bill_det)

                              this.str_add={
                                bill_no:this.bill,
                                m_name:this.med_name,
                                qty:this.bill_qty,
                                unit_price:this.$store.state.Stock[index].unit_price,
                                amount:this.amount
                              }

                              this.$store.state.Stock[index].qty-=this.bill_qty;

                              this.$store.commit('bill_dt',this.str_add)

                             this.text='Details added Successfully'   
                                this.clr='#039BE5'
                                this.snackbar=true
                        }
               }  
                                
                                this.med_name=""
                  },
                  refresh(){
                                 this.med_name=''
                             this.bill_qty=0
                             this.total=0
                              this.amount=0
                             this.gst=0
                               this.n_p=0  
                              //  this.date=0,
                              this. bill=Math.floor(Math.random() * 1000),
                              this.details=[]
                              this.b_table=[]


                               this.text='Refreshing..................'   
                                this.clr='#039BE5'
                                this.snackbar=true
                  },

                  save(){
                             this.str_sav={
                              bill_no:this.bill,
                              bill_date:this.date,
                              billgst:this.gst,
                              net_price:this.n_p,
                              user_id:this.u_name,
                             }    

                             this.$store.commit('bill_mas',this.str_sav)

                             this.text='Details saved Successfully'   
                                this.clr='#039BE5'
                                this.snackbar=true
                  },
                  preview(){
                          this.d_box=true;
                  },
                  prevue(){
                          this.d_box=false;
                  },
                  prints(){
                       this.d_box=false;
                  }
        },
        beforeMount(){
            for (let index = 0; index < this.$store.state.Stock.length; index++) {
                         this.items[index]=this.$store.state.Stock[index].m_name
               }
               this.u_name=this.$store.state.User.u_name
               for (let index = 0; index ==this.$store.state.m_master.length; index++) {
                         if(this.med_name==this.$store.state.m_master[index].m_name){
                                 this.brand=this.$store.state.m_master[index].brand
                         }
               }
        }
    }
</script>