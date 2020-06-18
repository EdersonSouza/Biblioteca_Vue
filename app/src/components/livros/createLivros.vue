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
          Cadastrar Livro
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
                  v-model = livro.titulo
                  placeholder="Titulo"
                ></v-text-field>
              </v-row>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model = livro.descricao
                placeholder="Descrição"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
            <v-autocomplete
              v-model="autores"
              :items="getAutores"
              filled
              chips
              color="blue-grey lighten-2"
              label="Selcionar Autor"
              item-text="nome"
              item-value="nome"
              multiple
            >
              <template v-slot:selection="data">
                <v-chip
                  v-bind="data.attrs"
                  :input-value="data.selected"
                  close
                  @click="data.select"
                  @click:close="remove(data.item)"
                >
                  {{ data.item.nome }}
                </v-chip>
              </template>
              <template v-slot:item="data">
                <template v-if="typeof data.item !== 'object'">
                  <v-list-item-content v-text="data.item"></v-list-item-content>
                </template>
                <template v-else>
                  <v-list-item-content>
                    <v-list-item-title v-html="data.item.nome"></v-list-item-title>
                  </v-list-item-content>
                </template>
              </template>
            </v-autocomplete>
            <v-card-actions>
              <v-btn
                text
                color='#009688'
                @click="save()"
              >Add</v-btn>
            </v-card-actions>
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
      autores:[],
      livro:{
        titulo:'',
        descricao:''

      }
      
    }),
    computed: {
      
      getAutores () {
        return this.$store.getters.autores
      },
    },

    mounted () {
        this.$store.dispatch('listarAutores')

    },
    methods:{
       remove (item) {
        const index = this.autores.indexOf(item.nome)
        if (index >= 0) this.autores.splice(index, 1)
      },
      save(){
        console.log(this.autores)
      },
      store (){
        this.$store.dispatch('cadastrarLivro',this.livro)
       
            this.dialog = false
      }
    },
   
}
</script>
