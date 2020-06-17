import Vue from 'vue'
import Vuex from 'vuex'
import Livros from '../services/livros'
import Autores from '../services/autor'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        livros: [],
        autores:[],
        alunos:[],
    },
    mutations:{
        //Livros
        GET_LIVROS(state,livros){
            state.livros=livros
        },
        ADD_LIVROS (state,livros){
            state.livros.push(livros)
        },



        //Alunos
        GET_ALUNOS(state,alunos){
            state.alunos = alunos
        },
        ADD_ALUNOS(state,alunos){
            state.alunos.push(alunos)
        },


        //Autores

        GET_AUTORES(state,autores){
            state.autores=autores
        },
        ADD_AUTORES(state,autores){
            state.autores.push(autores)
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
                  items[i].categoria[e]=n.nome
                 
                })
                
                 
                  
              })
              
             commit('GET_LIVROS',items)
            })
            .catch(function (error) {
 
            console.log(error);
            })
          },
          cadastrarLivro({commit},livro){
            Livros.create(livro)
            .then(resposta => {
                commit('ADD_LIVROS',resposta.data)
            })
            .catch( error => {
                console.log(error)
            })
          },


          //Alunos




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

          casdastrarAutor({commit},autor){
              Autores.create(autor)
              .then(resposta => {
                  commit('ADD_AUTORES',resposta.data)
              }).catch(error => {
                  console.log(error);
              })
          }


    }
})

export default store