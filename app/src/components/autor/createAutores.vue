<template>
   <div>
      <v-card>
        <v-card-title class="teal " >
          Cadastrar Autor
        </v-card-title>
        <v-container>
          <v-form
          ref="form">
            <v-row class="mx-2">
              <v-col
                class="align-center justify-space-between"
                cols="12"
              >
                <v-row
                  align="center"
                  class="mr-0"
                >
                  <v-text-field
                    v-model = Autor.nome
                    placeholder="Nome"
                  ></v-text-field>
                </v-row>
              </v-col>
            
            </v-row>
          </v-form>
          
        </v-container>
        <v-card-actions>
          <v-btn
            text
            color="primary"
            @click="sdialog"
          >Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn
            text
            color='#009688'
            @click="store()"
          >Save</v-btn>
        </v-card-actions>
      </v-card>
    </div> 
</template>
<script>

export default {
    data: () => ({
      dialog: false,
      Autor:{
        nome:''

      }
      
    }),
    methods:{
      store (){
        this.$store.dispatch('cadastrarAutor',this.Autor)
        .then(()=>{this.sdialog()}).catch(err=>{err})
            

            
      },
       sdialog (){
            this.$emit('sdialog')
            this.$refs.form.reset()
        },
    }
}
</script>
