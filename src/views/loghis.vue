<template>
    <div >
      <v-img  src="../assets/login.svg">
        <v-alert class="d-flex transparent align-center justify-center ">
        <v-card class="d-flex transparent align-center elevation-0 mt-sm-9"  height="50">
                <v-flex class="ml-2 primary--text">
                    <h3>Login History</h3>
                </v-flex> </v-card>
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
        :items="desserts"
        :search="search"
      ></v-data-table>
    
        </v-card>
        </v-alert>
      </v-img>
    </div>
</template>

<script>
export default{
    data () {
    return {
      search: '',
      headers: [
        {
          text: 'User Name',
          align: 'center',
          filterable: true,
          value: 'u_name',
        },
        { text: 'Type', value: 'type' },
        { text: 'Date', value: 'date' },
       
      ],
      desserts: [
       
      ],
    }
  },

  beforeMount(){
             for (let index = 0; index < this.$store.state.Login_history.length; index++) {
                         this.desserts[index]=this.$store.state.Login_history[index]
               }
  }
}
</script>