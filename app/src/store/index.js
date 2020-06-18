import Vue from 'vue'
import Vuex from 'vuex'
import Livros from '../services/livros'
import Autores from '../services/autor'
import Alunos from '../services/aluno'
import Editoras from '../services/editora'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        livros: [],
        autores:[],
        alunos:[],
        editoras:[]
    },
    mutations:{
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
            Livros.create(livro)
            .then(resposta => {
                commit('ADD_LIVROS',resposta.data)
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
          }


    }
})

export default store