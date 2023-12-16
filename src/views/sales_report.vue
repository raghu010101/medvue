<template>
    <div>
       <v-layout justify-center>
        <v-flex sm11  xs12 >
             <v-alert class="transparent" >
                    <h3 class="font-weight-regular text-capitalized my-3 mx-5">Sales Report</h3>
          <v-card  class="transparent elevation-0">
            <!-- <v-card class="d-flex  align-center " elevation="0"> -->
                <!-- <v-flex class="ml-2 "> -->
                <!-- </v-flex>  -->
                <!-- </v-card> -->

            <v-card class="pa-4 " elevation="0" >
                <v-row  class="mt-3 mb-sm-n10">
                    <v-col sm="6" cols="12">
                        <v-menu v-model="menu1" :close-on-content-click="false" :nudge-right="40"
                            transition="scale-transition" offset-y min-width="auto">
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field dense outlined v-model="date" label="From"
                                    prepend-inner-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                            </template>
                            <v-date-picker v-model="date" @input="menu1 = false"></v-date-picker>
                        </v-menu>
                    </v-col>
                <!-- </v-layout>
                <v-layout class="d-flex justify-center ml-n9"> -->
                    <v-col sm="6" cols="12" class="mt-n5 mt-sm-0">
                        <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40"
                            transition="scale-transition" offset-y min-width="auto">
                            <template v-slot:activator="{ on, attrs }">

                                <v-text-field  dense outlined v-model="date1" label="To"
                                    prepend-inner-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>

                            </template>
                            <v-date-picker v-model="date1" @input="menu2 = false"></v-date-picker>
                        </v-menu>
                    </v-col>
                </v-row>
                <v-row class="" justify="end">
                    <v-col class="mx-5 " sm="1" cols="11">
                        <v-btn block class="text-caption " color="primary" @click="clc">
                        SEARCH
                    </v-btn>
                    </v-col>

                    <v-col  class="mx-3" sm="2" cols="5">
                <v-btn outlined color="success" class="text-caption float-right green--text ">
                    DOWNLOAD
                    <v-icon>mdi-briefcase-download</v-icon>
                </v-btn>
            </v-col>
                </v-row>

                <!-- <v-card height="60" width="60" rounded-circle color="yellow"></v-card> -->
<!-- ---------------------------------------------------- -->
            </v-card>
            
            
            <v-divider></v-divider>
            <!-- ----------------------------------------------------------- -->
            <v-card class="mt-8">
                <v-row>
                    <v-col sm="12" cols="12">
                        <v-card-title>
                    <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line
                        hide-details></v-text-field>
                </v-card-title>
                <v-data-table :items-per-page="5" :headers="headers" :items="sales" :search="search"></v-data-table>
                    </v-col>
                </v-row>
            </v-card>
          </v-card>
            <!-- {{ b_date }}  {{ date }}   {{ date1 }} -->
        </v-alert>
        </v-flex>
       </v-layout>
    </div>      
</template>

<script>
export default {
    data: () => ({
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        date1: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        menu1: false,
        menu2: false,
 
        b_date:'',
        b_no:0,
        m_name:'',
        qty:0,
        amt:0,    

        search: '',
        headers: [
          {
            text: 'Bill No',
            align: 'center',
            filterable: true,
            value: 'billno',
          },
          { text: 'Bill Date', value: 'billdate' },
          { text: 'Medicine Name', value: 'm_name' },
          { text: 'Qty', value: 'qty' },
          { text: 'Amount', value: 'amount' },
        //   { text: 'Iron (%)', value: 'iron' },
        ],
        sales: [],
        sale:{},
    }),
          methods:{
            clc(){
                        //  console.log(222)
                         this.sales=[]
                   for (let i = 0; i < this.$store.state.Bill_Master.length; i++){
                    // console.log(123)
                           this.b_date=this.$store.state.Bill_Master[i].bill_date
                        //    console.log(this.b_date>=this.date && this.b_date<=this.date1)
                          if (this.b_date>=this.date && this.b_date<=this.date1) {
                            // console.log(66666666)
                            this.b_no=this.$store.state.Bill_Master[i].bill_no;
                            // this.qty=this.$store.state.Bill_Master[i].bill_no;
                                
                            // looop for bill detais
                            for (let j = 0; j < this.$store.state.Bill_Details.length; j++) {
                                 if (this.b_no==this.$store.state.Bill_Details[j].bill_no) {
                                     
                                    this.m_name=this.$store.state.Bill_Details[j].m_name;
                                     this.qty=this.$store.state.Bill_Details[j].qty;
                                     this.amt=this.$store.state.Bill_Details[j].amount;
                                 }
                            }
                                  //Sending details to array----->to table
                                        this.sale={
                                            billno:this.b_no,
                                            billdate:this.b_date,
                                            m_name:this.m_name,
                                            qty:this.qty,
                                            amount:this.amt
                                        }
                                        this.sales.push(this.sale)

                          }
                                 
                   }
                                        // this.sales=[]
            }
          }

}
</script>