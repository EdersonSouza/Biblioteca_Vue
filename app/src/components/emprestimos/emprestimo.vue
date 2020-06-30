<template>
  <v-container fluid>
    <v-data-iterator
      :items="getEmprestimos"
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
              :items="getEmprestimos"
              :search="search"
              ></v-data-table>
            </v-card>
          
      </template>
    </v-data-iterator>
  </v-container>
</template>
<script>

  export default {
    data ()  {
      return {
        search: '',
        filter: {},
        sortDesc: false,
        page: 1,
        pageCount: 0,
        itemsPerPage: 5,
        sortBy: 'data',
        keys: [
           { text: 'Data', value: 'createdAt' },
           { text: 'Aluno', value: 'aluno.nome' },
           { text: 'Livro', value: 'livro.titulo' },
           { text: 'Data de devolução', value: 'devolucao'},

           
          
        ],
      }
    },
    computed: {
      
      getEmprestimos () {
        return this.$store.getters.emprestimos
      },
    },
     

    mounted () {
        this.$store.dispatch('listarEmprestimos')


    },
    
    methods: {
      
      
    },
  }
</script>
