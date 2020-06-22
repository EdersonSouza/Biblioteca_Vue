import Vue from 'vue'
import Vuex from 'vuex'
import Livros from '../services/livros'
import Autores from '../services/autor'
import Alunos from '../services/aluno'
import Editoras from '../services/editora'
import Categorias from '../services/categoria'


Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        livros: [],
        autores:[],
        alunos:[],
        editoras:[],
        categorias:[],
        dialog: false
    },
    getters: {
        dialog(state){
            return state.dialog
        },
        livros(state) {
          return state.livros
        },
        editoras(state) {
          return state.editoras;
        },
        autores(state) {
          return state.autores;
        },
        alunos(state) {
          return state.alunos;
        },
        categorias(state) {
          return state.categorias;
        },
    
      },
    
    mutations:{

        GET_DIALOG(state,dialog){
            state.dialog = dialog
        },
        SET_DIALOG(state,dialog){
            state.dialog = dialog
        },
        //Livros
        GET_LIVROS(state,livros){
            state.livros=livros
        },
        ADD_LIVROS (state,livro){
            state.livros.push(livro)
        },



        //Alunos
        GET_ALUNOS(state,alunos){
            state.alunos = alunos
        },
        ADD_ALUNOS(state,aluno){
            state.alunos.push(aluno)
        },


        //Autores

        GET_AUTORES(state,autores){
            state.autores=autores
        },
        ADD_AUTORES(state,autor){
            state.autores.push(autor)
        },

        //Editoras

        GET_EDITORAS(state,editoras){
            state.editoras=editoras
        },
        ADD_EDITORAS(state,editora){
            state.editoras.push(editora)
        },

        //Categorias
        GET_CATEGORIAS(state,categorias){
            state.categorias=categorias
        },
        ADD_CATEGORIAS(state,categoria){
            state.categorias.push(categoria)
        },

    },
    actions:{
        //Livros
        listarLivros({commit}) {
           
            Livros.listar()
            .then(resposta => {
                const items = resposta.data
                items.map((el,i)=>{
                el.categoria.map((n,e)=>{
                  items[i].categoria[e]="    "+n.nome 
                 
                })
                
                 
                  
              })
              
             commit('GET_LIVROS',items)
            })
            .catch(function (error) {
 
            console.log(error);
            })
          },
          cadastrarLivro({commit},livro){
            console.log(livro._autor)
            Livros.create(livro)
            .then(resposta => {
                const item = resposta.data
               
                item.categoria.map(n=>{
                  item.categoria.push("    "+n.nome) 
                 
                })
                
                 
                  
              
                commit('ADD_LIVROS',item)
            })
            .catch( error => {
                console.log(error)
            })
          },


          //Alunos

          cadastrarAluno({commit},aluno){
            Alunos.create(aluno)
            .then(resposta => {
                commit('ADD_ALUNOS',resposta.data)
            })
            .catch( error => {
                console.log(error)
            })
          },
          listarAlunos({commit}) {
           
            Alunos.listar()
            .then(resposta => {
             const items = resposta.data
             commit('GET_ALUNOS',items)
            })
            .catch(error => {
 
            console.log(error);
            })
          },


          //Autores
          listarAutores({commit}) {
           
            Autores.listar()
            .then(resposta => {
             const items = resposta.data
             commit('GET_AUTORES',items)
            })
            .catch(error => {
 
            console.log(error);
            })
          },

          cadastrarAutor({commit},autor){
              Autores.create(autor)
              .then(resposta => {
                  commit('ADD_AUTORES',resposta.data)
              }).catch(error => {
                  console.log(error);
              })
          },

          //Editoras

          cadastrarEditora({commit},editora){
              Editoras.create(editora)
              .then(resposta => {
                  commit('ADD_EDITORAS', resposta.data)
              }).catch(error => {
                  console.log(error);
              })
          },
          listarEditoras({commit}){
              Editoras.listar()
              .then(resposta => {
                  commit('GET_EDITORAS',resposta.data)
              }).catch(error => {
                  console.log(error);
              })
          },


          //Categorias


          listarCategorias({commit}){
              Categorias.listar()
              .then(resposta => {
                  commit('GET_CATEGORIAS',resposta.data)
              }).catch(error => {
                  console.log(error)
              })
          },
          cadastrarCategoria({commit},categoria){
              Categorias.create(categoria)
              .then(resposta => {
                  commit('ADD_CATEGORIAS',resposta.data)
              }).catch(error => {
                  console.log(error)
              })
          }


    }
})

export default store