<template>
  <v-container fluid>
    <v-data-iterator
      :items="getLivros"
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
              :page.sync="page"
              :items-per-page="itemsPerPage"
              class="elevation-1"
              @page-count="pageCount = $event"
               hide-default-footer
              ></v-data-table>
            </v-card>
        
           <div class="text-center pt-2" >
          <v-text-field
            :value="itemsPerPage"
            label="Items por pagina"
            type="number"
            min="-1"
            max="15"
            @input="itemsPerPage = parseInt($event, 10)"
          ></v-text-field>
          <v-pagination v-model="page" :length="pageCount"></v-pagination>
        </div>
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
      pegar(props){
        console.log(props._id)
        console.log(props.titulo)
        
      }
      
    },
  }
</script>
