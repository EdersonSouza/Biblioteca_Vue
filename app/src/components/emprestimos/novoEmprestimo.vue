<template>
  <div class="text-center">
    
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Emprestimo
        </v-card-title>

        <v-card-text>
             <v-form
                ref="form"
                v-model="valid"
                lazy-validation
            >
                <v-text-field
                v-model="name"
                label="Aluno"
                required
                ></v-text-field>

               

                <v-autocomplete
                v-model="items"
                :items="getLivros"
                item
                :rules="[v => !!v || 'Selecione um livro']"
                label="Livro"
                item-text="titulo"
                item-value="_id"
                required
                ></v-autocomplete>

                <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
                >
                Validate
                </v-btn>

                <v-btn
                color="error"
                class="mr-4"
                @click="reset"
                >
                Reset Form
                </v-btn>

                <v-btn
                color="warning"
                @click="resetValidation"
                >
                Reset Validation
                </v-btn>
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
            @click="sdialog"
          >
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
   
  </div>
</template>
<script>
export default {
    data: ()=>({

      valid:true,
      name: '',
      aluno:"",
      select: null,
      items: [
      ],
        
    }),

    computed: {
        getLivros () {
        return this.$store.getters.livros
      },
        getAluno () {
            return this.$store.getters.aluno
        }

    },
     mounted () {
        this.$store.dispatch('listarLivros')
        this.aluno = this.getAluno
        this.name = this.aluno.nome
        console.log("estou aqui"+this.aluno.nome)
        

    },
    methods:{
        sdialog (){
            this.$emit('sdialog')
        },
        validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    }
}
</script>