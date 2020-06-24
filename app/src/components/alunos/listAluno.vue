<template>
  <v-container fluid>
    <v-data-iterator
      :items="getAlunos"
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
              :items="getAlunos"
              :search="search"
              >
              <template v-slot:item.actions="{ item }"

                >
                  <v-btn
                    depressed 
                    small
                    color="#009688"
                    align="right"
                    class="mr-2"
                    @click="getAluno(item)"
                  >
                   Novo Empréstimo
                  </v-btn>

                </template>
              </v-data-table>
            </v-card>
          
      </template>
    </v-data-iterator>
    <template>
      <div class="text-center">
        <v-dialog
          v-model="dialog"
          width="500"
        >
         <emprestimo @sdialog="sdialog"/>
        </v-dialog>
      </div>
    </template>
  </v-container>
</template>
<script>
import Emprestimo from '../emprestimos/novoEmprestimo'
  export default {
    components:{
      Emprestimo,
    },
    data () {
      return {
        search: '',
        filter: {},
        sortDesc: false,
        page: 1,
        sortBy: 'nome',
        dialog:false,
        keys: [
           { text: 'Nome', value: 'nome' },
           { text: 'SGDE', value: 'codigoSgde' },
          { text:  'Ações', value: 'actions', sortable: false },
           
          
        ],
      }
    },
    computed: {
      
      getAlunos () {
        return this.$store.getters.alunos
      },
     
    },

    mounted () {
        this.$store.dispatch('listarAlunos')
      
    },
    
    methods: {
      getAluno(item){
        this.$store.dispatch('setAluno',item)
        this.dialog = true
        console.log(item.nome)
      },
      sdialog(){
        this.dialog = false
      }
      
      
      
    },
  }
</script>
