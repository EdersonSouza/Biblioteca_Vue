<template>
   <div>
        <v-btn
      bottom
      color="#009688"
      dark
      fab
      fixed
      right
      @click="dialog = !dialog"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-dialog
      v-model="dialog"
      width="800px"
    >
      <v-card>
        <v-card-title class="teal " >
          Cadastrar Aluno
        </v-card-title>
        <v-container>
          <v-row class="mx-2">
            <v-col
              class="align-center justify-space-between"
              cols="8"
            >
              <v-row
                align="center"
                class="mr-0"
              >
                <v-text-field
                  v-model = Aluno.nome
                  placeholder="Nome"
                ></v-text-field>
              </v-row>
            </v-col>
            <v-col cols="4">
              <v-text-field
                v-model = Aluno.codigoSgde
                placeholder="Código SGDE"
              ></v-text-field>
            </v-col>
          
          </v-row>
        </v-container>
        <v-card-actions>
          <v-btn
            text
            color="primary"
            @click="dialog = false"
          >Cancel</v-btn>
           <v-spacer></v-spacer>
          <v-btn
            text
            color='#009688'
            @click="store()"
          >Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </div> 
</template>
<script>

export default {
    data: () => ({
      dialog: false,
      Aluno:{
        nome:'',
        codigoSgde:''

      }
      
    }),
    methods:{
      store (){
        this.$store.dispatch('cadastrarAluno',this.Aluno)
            this.dialog = false
      }
    }
}
</script>
