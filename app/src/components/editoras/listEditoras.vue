<template>
  <v-container fluid>
    <v-data-iterator
      :items="getEditoras"
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
              :items="getEditoras"
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
        sortBy: 'nome',
        keys: [
           { text: 'Nome', value: 'nome' },
           
          
        ],
      }
    },
    computed: {
      
      getEditoras () {
        return this.$store.getters.editoras
      },
    },

    mounted () {
        this.$store.dispatch('listarEditoras')

    },
    
    methods: {
      
      
      
    },
  }
</script>
