<template>



<v-layout justify-center>
  <v-flex sm11 xs11 >
    <div class="mt-10 mb-5">
      
                <!-- <v-flex lg2 >
                    <v-card elevation="" class="text-center pa-4 primary--text" >Stock View</v-card>
                </v-flex>  -->
            

                   <v-card rounded-lg overflow-y-auto elevation="6">
                      <v-card-title >
                        <v-text-field
                           
                          v-model="search"
                          append-icon="mdi-magnify"
                          label="Ask me I will get your medicine"
                          
                          hide-details
                        ></v-text-field>
                      </v-card-title>
                      <v-data-table
                      :items-per-page="5"
                        :headers="headers"
                        :items="dummy"
                        :search="search"
                      >
                      </v-data-table>
                    </v-card>
                    </div>
  </v-flex>
</v-layout>

    


</template>

<script>
      export default {
    data () {
      return {
       dummy:[],
        search: '',
        headers: [
          {
            text: 'Medicine Name',
            align: 'center',
            value: 'm_name',
          },
          { text: 'Brand', value: 'brand' },
          { text: 'Quantity', value: 'qty' },
          { text: 'Unit Price', value: 'unit_price' },
        
        ],
       
      }
    },
     beforeMount(){
      // alert("mount")
        this.dummy=this.$store.state.Stock
            for (let i = 0; i <this.dummy.length; i++) {
                // const element = array[index];
                  for (let m = 0; m < this.$store.state.m_master.length; m++) {
                    if (this.dummy[i].m_name==this.$store.state.m_master[m].m_name) {
                        this.dummy[i].brand=this.$store.state.m_master[m].brand
                    }
                    
                  }
                
            }
     }


  }
</script>

<style >
.v-application--is-ltr .v-data-table > .v-data-table__wrapper > table > tbody > tr > th, .v-application--is-ltr .v-data-table > .v-data-table__wrapper > table > thead > tr > th, .v-application--is-ltr .v-data-table > .v-data-table__wrapper > table > tfoot > tr > th{
  font-size: 16px;
  color: rgb(18, 15, 214);
}
</style>