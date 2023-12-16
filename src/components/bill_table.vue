<template>
    <div class="mt-5">
      <v-layout>
         <v-flex >
         <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
       :items-per-page="5"
      :headers="headers"
      :items="value"
      :search="search"
    ></v-data-table>
  </v-card>
       </v-flex>
      </v-layout>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Medicine Name',
            align: 'start',
            filterable: false,
            value: 'm_name',
          },
          { text: 'Brand', value: 'brand' },
          { text: 'Quantity', value: 'qty' },
          { text: 'Amount', value: 'amt' },
        ],
      }
    },
    props:{
              value:Array   
    }
  }
</script>