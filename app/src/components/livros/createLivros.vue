<template>
   <div>
        <v-btn
      bottom
      color="#009688"
      dark
      fab
      fixed
      right
      @click="add ()"
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
              cols="8"
            >
              <v-row
                align="center"
                class="mr-0"
              >
                <v-text-field
                  v-model = nlivro.titulo
                  placeholder="Titulo"
                  clearable
                  clear-icon="mdi-alpha-x-circle"
                ></v-text-field>
              </v-row>
            </v-col>
            <v-col cols="4">
              <v-text-field
                v-model = nlivro.total
                label="Quantidade"
                type="Number"
                @input="nlivro.total = parseInt($event, 10)"
              ></v-text-field>
            </v-col>
            <v-col
              class="align-center justify-space-between"
              cols="8"
            >
              <v-row
                align="center"
                class="mr-0"
              >
                <v-text-field
                  v-model = nlivro.subtitulo
                  placeholder="Sub Titulo"
                  clearable
                  clear-icon="mdi-alpha-x-circle"
                ></v-text-field>
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-textarea
                v-model = nlivro.descricao
                placeholder="Descrição"
                clearable
                clear-icon="mdi-alpha-x-circle"
              ></v-textarea>
            </v-col>
            <v-col cols="6">
               <v-col cols="12">
                <v-text-field
                  v-model = nlivro.edicao
                  label="Ano edição"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model = nlivro.volume
                  label="Volume"
                  type="Number"
                  @input="nlivro.volume = parseInt($event, 10)"
                ></v-text-field>
              </v-col>
            </v-col>
            
            <v-col cols="4">
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
                  @click:close="removeAutor(data.item)"
                >
                  {{ data.item.nome}}
                </v-chip>
              </template>
              <template v-slot:item="data">
                <template v-if="typeof data.item !== 'object'">
                  <v-list-item-content v-text="data.item"></v-list-item-content>
                </template>
                <template v-else class="align-center justify-space-between">
                  <v-list-item-content>
                    <v-list-item-title v-html="data.item.nome"></v-list-item-title>
                  </v-list-item-content>
                </template>
                 
              </template>
            </v-autocomplete>
          </v-col>
          <v-col cols="4">
            <v-autocomplete
              v-model="nlivro.categoria"
              :items="getCategorias"
              filled
              chips
              color="blue-grey lighten-2"
              label="Selcionar Categoria"
              item-text="nome"
              item-value="_id"
              multiple
            >
              <template v-slot:selection="data">
                <v-chip
                  :input-value="data.selected"
                  close
                  @click="data.select"
                  @click:close="removeCategoria(data.item)"
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
          <v-col cols="4">
            <template>
              <v-row align="center">
                  <v-autocomplete
                    v-model= nlivro._Editora
                    :items="getEditoras"
                    :menu-props="{ top: true, offsetY: true }"
                    label="Editora"
                    item-text = 'nome'
                    item-value="_id"
                    filled
                    
                  > </v-autocomplete>
              </v-row>
            </template>
          </v-col>
          
          </v-row>
        </v-container>
        <v-card-actions>
          <v-btn
            text
            color="primary"
            @click="dialog = false"
          >Cancelar</v-btn>
          <v-spacer></v-spacer>
          <v-btn
            text
            color='#009688'
            @click="store()"
          >Salvar</v-btn>
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
      
    }),
    computed: {
      
      getAutores () {
        return this.$store.getters.autores
      },
      getCategorias () {
        console.log(typeof(this.$store.getters.categorias))
        return this.$store.getters.categorias
      },
      getEditoras () {
        return this.$store.getters.editoras
      },
    },

    mounted () {
        this.nlivro.total = 0
        this.nlivro.volume = 0
        this.$store.dispatch('listarAutores')
        this.$store.dispatch('listarCategorias')
        this.$store.dispatch('listarEditoras')
    },
    methods:{
       add (){
          this.dialog = true
          this.nlivro = new ClassLivros()
          this.nlivro.total = 0
          this.nlivro.volume = 0
       },
       removeAutor (item) {
        const index = this.nlivro._autor.indexOf(item._id)
        if (index >= 0) this.nlivro._autor.splice(index, 1)
      },
      removeCategoria (item) {
        const index = this.nlivro.categoria.indexOf(item._id)
        if (index >= 0) this.nlivro.categoria.splice(index, 1)
      },
      store (){
        this.$store.dispatch('cadastrarLivro',this.nlivro)
        this.nlivro = new ClassLivros()
        this.dialog = false
        
      }
    },
   
}
</script>
<style  scoped>
  .v.select__selection {
    width: 100%;
    justify-content: start;
}
  
</style>