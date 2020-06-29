<template>
  <v-container fluid>
    <v-data-iterator
      :items="getLivros"
      :page="page"
      :search="search"
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
        </v-toolbar>
      </template>

      <template >
            <v-card >
              <v-data-table
              :headers="keys"
              :items="getLivros"
              :search="search"
              ></v-data-table>
            </v-card>
          
      </template>
    </v-data-iterator>
  </v-container>
</template>
<script>

  export default {
    data () {
      return {
        search: '',
        filter: {},
        sortDesc: false,
        page: 1,
        pageCount: 0,
        itemsPerPage: 5,
        sortBy: 'titulo',
        keys: [
           { text: 'Titulo', value: 'titulo' },
           { text: 'Descrição', value: 'descricao' },
           { text: 'Categorias', value: 'categoria' },
           { text: 'Autores', value: '_autor'},
           { text: 'Editora', value: '_Editora.nome'},
           { text: 'Edição', value: 'edicao'},
           { text: 'Volume', value: 'volume'}
           
          
        ],
      }
    },
    computed: {
      
      getLivros () {
        return this.$store.getters.livros
      },
    },

    mounted () {
        this.$store.dispatch('listarLivros')

    },
    
    methods: {
      getLivro(props){
        console.log('entrei')
        console.log(props.titulo)
        
      }
      
    },
  }
</script>
