
<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="#009688"
                dark
                flat
              >
                <v-toolbar-title>Login </v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Login"
                    v-model = user.nomeUser
                    prepend-icon="mdi-account"
                    type="text"
                    color="#009688"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    v-model = user.password
                    prepend-icon="mdi-lock"
                    type="password"
                    color="#009688"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn 
                  :disabled="dialog"
                  :loading="dialog"
                  color="#009688" 
                  @click="login">Login</v-btn>
              </v-card-actions>
              
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
      <template>
      <div class="text-center">
        <v-dialog
          v-model="dialog"
          hide-overlay
          persistent
          width="300"
        >
          <v-card
            color="primary"
            dark
          >
            <v-card-text>
              Buscando Dados
              <v-progress-linear
                indeterminate
                color="white"
                class="mb-0"
              ></v-progress-linear>
            </v-card-text>
          </v-card>
        </v-dialog>
      </div>
    </template>
  </v-app>
</template>

<script>
  export default {
      data:()=> ({
        dialog: false,
        user:{
          nomeUser:'',
          password:''
        },
        erro:''

      }),
      watch: {
          dialog (val) {
            if (!val) return

            setTimeout(() => (this.dialog = false), 5000)
          },
      },

      methods: {
          login (){
              this.dialog=true
              this.$store.dispatch('login',this.user)
              .then(()=>{
                this.$router.push({name:'livros'});
              }).catch(error=>{
                  this.erro = error.response.data.error
              })
              
          }
      }
    
  }
</script>
