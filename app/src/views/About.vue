<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      color= '#E0F7FA'
    >
      <v-list dense>
        <template v-for="item in items">
          <v-list-item
            :key="item.text"
            router
            :to="{ name: item.link }"
            
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="#009688"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title
        style="width: 800px"
        class="ml-0 pl-4"
      >
        <span class="hidden-sm-and-down">Biblioteca Braz </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        icon
        large
      >
        <v-avatar
          size="32px"
          item
          
        >
          <v-img
            src="../assets/logo_braz.png"
            alt="Logo Braz"
          ></v-img></v-avatar>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
      <v-row 
      align="center"
      justify="center">
        <router-view/>
      </v-row>
        
      </v-container>
    </v-content>
    
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
      drawer: null,
      items: [
        { icon: 'mdi-book-open-page-variant', text: 'Livros' ,link :'livros'},
        { icon: 'mdi-account-multiple', text: 'Autores', link: 'autor'},
        { icon: 'mdi-account-group-outline', text: 'Alunos', link: 'aluno' },
        { icon: 'mdi-code-array', text:'Categorias',link:'categoria'},
        { icon: 'mdi-briefcase-edit', text: 'Editoras', link:'editora' },
        { icon: 'mdi-cart-arrow-right', text: 'Emprestimos' , link:'emprestimo'},
        
        
      ],
    }),
  }
</script>

