<template>
  <div class="text-center">
    
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          :item="getAluno"
          primary-title
        >
          Empréstimo
        </v-card-title>

        <v-card-text>
             <v-form
                ref="form"
                v-model="valid"
                lazy-validation
            >
                <v-text-field
                :disabled="true"
                v-model="getAluno.nome"
                label="Aluno"
                required
                ></v-text-field>

               

                <v-autocomplete
                v-model="idLivro"
                :items="getLivros"
                item
                :rules="[v => !!v || 'Selecione um livro']"
                label="Livro"
                item-text="titulo"
                item-value="_id"
                required
                >
                    <template v-slot:item="data">
                      <template v-if="typeof data.item !== 'object'">
                        <v-list-item-content v-text="data.item"></v-list-item-content>
                      </template>
                      <template v-else>
                        <v-list-item-content>
                          <v-list-item-title v-html="'Título: '+data.item.titulo"></v-list-item-title>
                          <v-list-item-subtitle v-html="'Sub Título: '+data.item.subtitulo"></v-list-item-subtitle>
                          <v-list-item-title v-html="'descrição: '+data.item.descricao"></v-list-item-title>
                        </v-list-item-content>
                      </template>
                    </template>
                </v-autocomplete>
                  <v-menu
                    ref="menu1"
                    v-model="menu1"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="dateFormatted"
                        label="Data de Devolução"
                        persistent-hint
                        v-bind="attrs"
                        @blur="date = parseDate(dateFormatted)"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
                  </v-menu>
                

            </v-form>
          
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
            <v-btn
            color="primary"
            text
            @click="sdialog"
          >
            Cancelar
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="store"
          >
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
   
  </div>
</template>
<script>
import Emprestimo from '../../models/emprestimos/emprestimo'
import serviceEmprestimo from '../../services/emprestimo'
export default {
    data: vm =>({
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
      menu1: false,
      valid:true,
      select: null,
      idLivro:'',
        
    }),
     watch: {
      date () {
        this.dateFormatted = this.formatDate(this.date)
      },
    },

    computed: {
        getLivros () {
        return this.$store.getters.livros
      },
        getAluno () {
            return this.$store.getters.aluno
        },
        computedDateFormatted () {
        return this.formatDate(this.date)
      },

    },
     mounted () {
        this.$store.dispatch('listarLivros')
        

    },
    methods:{
        sdialog (){
            this.$emit('sdialog')
             this.idLivro=''
              this.date= new Date().toISOString().substr(0, 10)
        },
       
      store (){
        const emprestimo = new Emprestimo;
        emprestimo.aluno = this.getAluno._id
        console.log(emprestimo.aluno)
        emprestimo.livro = this.idLivro
        emprestimo.devolucao = this.date
        serviceEmprestimo.create(emprestimo).then(resposta => {
          console.log(resposta.data)
          this.sdialog()
        }).catch(error => {
           console.log(error)
        })
        console.log(emprestimo)
      },
       formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
    }
}
</script>