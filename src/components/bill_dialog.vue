<template>
    <div>
      <v-flex sm7 xs10>
          <v-dialog width="700" v-model="dialo" persistent>
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
                <v-card-title class="text-body-1 blue lighten-1">
                    <v-btn icon @click="clc">
                        <v-icon>mdi-close-circle</v-icon>
                    </v-btn>
                    <h5 class="mx-5">PREVIEW</h5>
                </v-card-title>
                <h2 class="text-center my-4 font-weight-regular font-italic d-flex d-inline-block justify-center"><v-card width="40%"
                        color="error">H&W Medicals</v-card></h2>
                        <v-btn
                            @click="print"
                            width="50"
                            height="30"
                            class="text-caption success float-right  my-4  mt-n16 mr-10">
                                PRINT
                            </v-btn>

              <v-card-text>
                <v-simple-table fixed-header height="400px">
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="text-center">
                                    Medicine name
                                </th>
                                <th class="text-center">
                                    Qty
                                </th>
                                <th class="text-center">
                                    Amount
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item,idx in med_det" :key="idx">
                                <td class="text-center" >{{ item.name }}</td>
                                <td class="text-center">{{ item.qty }}</td>
                                <td class="text-center">{{ item.amt}}</td>
                            </tr>
                            <tr >
                                <td></td>
                                <td colspan class="font-weight-bold text-center">Total</td>
                                <td class="text-center">{{ total }}</td>
                            </tr>
                            <tr >
                                <td></td>
                                <td colspan class="font-weight-bold text-center">GST</td>
                                <td class="text-center">{{ gst.toFixed(2) }}</td>
                            </tr>
                            <tr >
                                <td></td>
                                <td colspan class="font-weight-bold text-center">Net Price</td>
                                <td class="text-center">{{ net_p }}</td>
                            </tr>

                        </tbody>
                        
                    </template>
                </v-simple-table>
              </v-card-text>
              <!-- <v-card>
                            <v-btn
                            @click="print"
                            width="50"
                            height="30"
                            class="text-caption success float-right mt-n16 mr-10">
                                PRINT
                            </v-btn>
                        </v-card> -->
            </v-card>
                      
        </v-dialog>
      </v-flex>
    </div>
</template>
<script>
export default {
    data() {
        return {
           
        //     desserts: [
        
        // ],
        }
        
    },
    methods:{
        clc(){
            this.$emit('prevue')           
        },
        print(){
            this.$emit('prints')
        }
    },
    props:{
        dialo:Boolean,
        med_det:Array,
        total:Number,
        gst:Number,
        net_p:Number
        
    }
}
</script>