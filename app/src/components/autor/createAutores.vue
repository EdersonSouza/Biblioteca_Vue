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
          Cadastrar Autor
        </v-card-title>
        <v-container>
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
        </v-container>
        <v-card-actions>
          <v-btn
            text
            color="primary"
          >More</v-btn>
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="dialog = false"
          >Cancel</v-btn>
          <v-btn
            text
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
      Autor:{
        nome:''

      }
      
    }),
    methods:{
      store (){
        this.$store.dispatch('cadastrarAutor',this.Autor)
            this.dialog = false
      }
    }
}
</script>
