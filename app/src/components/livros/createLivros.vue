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
                  v-model = nlivro.titulo
                  placeholder="Titulo"
                ></v-text-field>
              </v-row>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model = nlivro.descricao
                placeholder="Descrição"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
            <v-autocomplete
              v-model="nlivro._autor"
              :items="getAutores"
              filled
              chips
              color="blue-grey lighten-2"
              label="Selcionar Autor"
              item-text="nome"
              item-value="_id"
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
                  {{ data.item.nome}}
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
import ClassLivros from '../../models/livros/livros'
export default {
    data: () => ({
      dialog: false,
      autores:[],
      nlivro: new ClassLivros(),
      livro:{
        titulo:'',
        descricao:'',

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
        const index = this.nlivro._autor.indexOf(item._id)
        if (index >= 0) this.nlivro._autor.splice(index, 1)
      },
      store (){
        /*const classlivro = new ClassLivros()
        classlivro.titulo = this.livro.titulo
        classlivro.descricao = this.livro.descricao
        classlivro._autor = this.autores*/
        this.$store.dispatch('cadastrarLivro',this.nlivro)
        this.nlivro = new ClassLivros()
        this.dialog = false
        
      }
    },
   
}
</script>
