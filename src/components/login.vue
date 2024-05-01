<template>
  <v-container >
           
      <v-layout justify-center align-center>
          <v-flex lg12 xs9 class="d-flex justify-center mt-16 ">
        <v-card   outlined height="310" width="350" class="mt-16 mx-auto text-center" elevation='3'>
          <v-form ref="form">
            <img src="../assets/download.jpeg" height="50px" width="50px" class="mt-3" style="border-radius: 50%;">
          <div class="mt-n8 mb-6 d-flex align-center justify-center">
            <h3 class="text-center primary--text mt-8 ">H&W Med</h3>
          </div>
          <v-text-field color="green" :rules="[rules.required]" autofocus label="User Name" v-model="name" dense outlined class="mx-8"></v-text-field>

          <v-text-field dense :rules="[rules.required]" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" @click:append="show1 = !show1" @keypress.enter="logk"
            :type="show1 ? 'text' : 'password'" color="green" label="Password" v-model="u_pass" outlined
            class="mx-8"></v-text-field>
          
          <div class="text-center mt-2   "><v-btn color="primary" class='text-capitalize' @click="logk">Log IN</v-btn></div>

        </v-form>
        </v-card>


        <div class="text-center">
          <v-snackbar v-model="snackbar" :color="clr" top>
            {{ text }}

            <template v-slot:action="{ attrs }">
              <v-btn small fab color="white" text v-bind="attrs" @click="snackbar = false">
                <v-icon small>mdi-close</v-icon>
              </v-btn>
            </template>
          </v-snackbar>
        </div>
          </v-flex>
      </v-layout>

  </v-container>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      show1: false,
      name: '',
      u_pass: '',
      rol:'',
      index:10000,

       rules: {
          required: value => !!value || 'Required.',
       },

      use:{},
      log: {},
      dates: new Date().toJSON().slice(0, 10),

      snackbar: false,
      text: '',
      //  timeout: 2000, 
      clr: '',
    }
  },
  methods: {
    logk() {

        if (this.name == '' || this.u_pass == '') {
        this.text = 'Please fill the details!!!'
        this.clr = '#FF6E40'
        this.snackbar = true
      }else{
      for (let index = 0; index < this.$store.state.login.length; index++) {
        if (this.$store.state.login[index].pass == this.u_pass ) {
         
          this.index=index

      //       this.log = {
      //         u_name: this.name,
      //         type: 'Login',
      //         date: this.dates
      //       }

      //        var rol = this.$store.state.login[index].role;
      //      this.use={
      //         u_name:this.name,
      //         role:rol
      //       }

      //        this.$store.commit("set_log", this.log)
      //       this.$store.state.User=this.use

      //        this.$store.commit("set_log", this.log)
      //       this.$store.state.User=this.use
      //         // alert('welcome')
      // // this.$router.push('/dashboard')

      //       this.log = {}

      //     if (rol == 'Biller') {
      //       this.$emit('setbill')
      //     }
      //     if (rol == 'Manager') {
      //       this.$emit('setmana')
      //     }
      //     if (rol == 'SystemAdmin') {
              
      //       this.$emit('setsys')
      //     }
      //     if (rol == 'Inventry') {
      //       this.$emit('setinv')
      //     }
      //     this.$emit('flagshow')

        // }else {
        //     alert("jkfh")
        //     this.text = 'Please check your Details !!!'
        //     this.clr = '#FF6E40'
        //     this.snackbar = true
        //     break;
        //   }
      }
      }
       if (this.index!=10000) {
        // alert(this.index)
         this.log = {
              u_name: this.name,
              type: 'Login',
              date: this.dates
            }

             var rol = this.$store.state.login[this.index].role;
           this.use={
              u_name:this.name,
              role:rol
            }

             this.$store.commit("set_log", this.log)
            this.$store.state.User=this.use

             this.$store.commit("set_log", this.log)
            this.$store.state.User=this.use
              // alert('welcome')
      // this.$router.push('/dashboard')
      // this.$router.replace('/dashboard')

            this.log = {}

          if (rol == 'Biller') {
            this.$emit('setbill')
          }
          if (rol == 'Manager') {
            this.$emit('setmana')
          }
          if (rol == 'SystemAdmin') {    
            // alert("helo") 
            this.$emit('setsys')
          }
          if (rol == 'Inventry') {
            this.$emit('setinv')
          }
          this.$emit('flagshow')

      }else {
            // alert("jkfh")
            this.text = 'Please check your Details !!!'
            this.clr = '#FF6E40'
            this.snackbar = true
          }

      }


     
    
//        else {
//         for (let index = 0; index < this.$store.state.login.length; index++) {
//           if (this.$store.state.login[index].u_name==this.name && this.$store.state.login[index].pass == this.u_pass) {
//           // if (this.$store.state.login[index].pass == this.u_pass && this.$store.state.login[index].u_name == this.name) {
//             alert("kjdfhfk")
            
//             this.log = {
//               u_name: this.name,
//               type: 'Login',
//               date: this.dates
//             }
//               //  for (let index = 0; index < this.$store.state.login.length; index++) {
//               //       if (this.name==this.$store.state.login[index].u_name) {
//                          this.rol=this.$store.state.login[index].role
//                         //  break
//                     // }
//               //  }
//             this.use={
//               u_name:this.name,
//               role:rol
//             }



// // console.log(this.use,"role");
//             // this.text = 'Welcome to MEDapp !!!'
//             // this.clr = '#64DD17'
//             // this.snackbar = true
//             this.$store.commit("set_log", this.log)
//             this.$store.state.User=this.use
//               // alert('welcome')
//       // this.$router.push('/dashboard')

//             this.log = {}

//             break;
//           }else {
          //   alert("jkfh")
          //   this.text = 'Please check your Details !!!'
          //   this.clr = '#FF6E40'
          //   this.snackbar = true
          //   break;
          // }
          // } else {
          //   // alert("jkfh")
          //   this.text = 'Please check your Details !!!'
          //   this.clr = '#FF6E40'
          //   this.snackbar = true
          //   // setTimeout(() => {
          //   //   this.$refs.form.resetValidation()
          //   // }, 2000);
          //   break;
          // }
          //  if (this.name==this.$store.state.login[index].u_name) {

          //  }
          this.name = '',
        this.u_pass = ''

        }

      }
      


      // this.name = '',
      //   this.u_pass = ''

          
    // },
    // stc() {
    //   this.$router.push('/')
    // }
  // }
}

</script>