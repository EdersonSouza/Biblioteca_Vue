<template>
  <v-container fluid>
    <v-data-iterator
      :items="items"
      :page="page"
      :search="search"
      :sort-by="sortBy.toLowerCase()"
      :sort-desc="sortDesc"
      hide-default-footer
    >
      <template v-slot:header>
        <v-toolbar
          dark
          color="#009688"
          class="mb-1"
        >
          <v-text-field
            v-model="search"
            clearable
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="Procurar"
          ></v-text-field>
          <template v-if="$vuetify.breakpoint.mdAndUp">
            <v-spacer></v-spacer>
            <v-select
              v-model="sortBy"
              flat
              solo-inverted
              hide-details
              :items="keys"
              prepend-inner-icon="mdi-magnify"
              label="Ordenar por"
            ></v-select>
            <v-spacer></v-spacer>
          </template>
        </v-toolbar>
      </template>

      <template >
            <v-card >
              <v-data-table
              :headers="keys"
              :items="this.items"
              :search="search"
              ></v-data-table>
            </v-card>
          
      </template>
    </v-data-iterator>
  </v-container>
</template>
<script>
import Livros from '../../services/livros'
  export default {
    data () {
      return {
        search: '',
        filter: {},
        sortDesc: false,
        page: 1,
        sortBy: 'titulo',
        keys: [
           { text: 'Titulo', value: 'titulo' },
           { text: 'Descrição', value: 'descrição' },
           { text: 'Categorias', value: 'categoria' },
          
        ],
        items: [
         
        ],
        categoria:[]
      }
    },
    computed: {
      numberOfPages () {
        return Math.ceil(this.items.length / this.itemsPerPage)
      },
      filteredKeys () {
        return this.keys.filter(key => key !== `Titulo`)
      },
    },

    created () {
        this.list()

    },
    methods: {
      list () {
        
        Livros.listar()
            .then(resposta => {
              this.items = resposta.data
              this.items.map((el,i)=>{
                el.categoria.map((n,e)=>{
                  this.items[i].categoria[e]=n.nome
                 
                })
                
                 
                  
              })
             
            })
            .catch(function (error) {
    // handle error
            console.log(error);
            })
          
      },
      nextPage () {
        if (this.page + 1 <= this.numberOfPages) this.page += 1
      },
      formerPage () {
        if (this.page - 1 >= 1) this.page -= 1
      },
      updateItemsPerPage (number) {
        this.itemsPerPage = number
      },
    },
  }
</script>
