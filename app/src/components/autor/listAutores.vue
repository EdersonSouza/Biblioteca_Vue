<template>
  <v-container fluid>
    <v-data-iterator
      :items="getAutores"
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
              :items="getAutores"
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
        dialog:false,
        sortBy: 'nome',
        keys: [
           { text: 'Nome', value: 'nome' },
           
          
        ],
      }
    },
    computed: {
      
      getAutores () {
        return this.$store.getters.autores
      },
    },

    mounted () {
        this.$store.dispatch('listarAutores')

    },
    
    
  }
</script>
