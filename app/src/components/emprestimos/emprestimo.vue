<template>
  <v-card
    class="mx-auto"
    max-width="800"
  >
    <v-card-title class="title font-weight-regular justify-space-between">
      <span>{{ currentTitle }}</span>
      <v-avatar
        color="primary lighten-2"
        class="subheading white--text"
        size="24"
        v-text="step"
      ></v-avatar>
    </v-card-title>

    <v-window v-model="step">
      <v-window-item :value="1">
        <v-card>
          <v-autocomplete
            v-model= emprestimo.aluno
            :items="alunos"
            :menu-props="{ top: true, offsetY: true }"
            label="Aluno"
            item-text = 'nome'
            item-value="_id"
            filled
                    
          > </v-autocomplete>
        </v-card>
      </v-window-item>

      <v-window-item :value="2">
        <v-card-text>
          <v-text-field
            label="Password"
            type="password"
          ></v-text-field>
          <v-text-field
            label="Confirm Password"
            type="password"
          ></v-text-field>
          <span class="caption grey--text text--darken-1">
            Please enter a password for your account
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="3">
        <div class="pa-4 text-center">
          <v-img
            class="mb-4"
            contain
            height="128"
            src="https://cdn.vuetifyjs.com/images/logos/v.svg"
          ></v-img>
          <h3 class="title font-weight-light mb-2">Welcome to Vuetify</h3>
          <span class="caption grey--text">Thanks for signing up!</span>
        </div>
      </v-window-item>
    </v-window>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn
        :disabled="step === 1"
        text
        @click="step--"
      >
        Voltar
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="step === 3"
        color="primary"
        depressed
        @click="step++"
      >
        Próximo
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
  export default {
    data: () => ({
      alunos:[],
      emprestimo:{
          aluno: ''
      },
      step: 1,
    }),
    mounted () {
        this.$store.dispatch('listarAlunos')
        this.alunos = this.$store.getters.alunos

    },
    computed: {
      currentTitle () {
        switch (this.step) {
          case 1: return 'Escolha o aluno'
          case 2: return 'selecione Livros'
          default: return 'Confirmar'
        }
      },
    },
  }
</script>