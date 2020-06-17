import Vue from 'vue'
import Vuex from 'vuex'
import Livros from '../services/livros'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        livros: [
        ],
    },
    mutations:{
        GET_LIVROS(state,livros){
            state.livros=livros
        },
        ADD_LIVROS (state,livros){
            state.livros.push(livros)
        }
    },
    actions:{
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
    // handle error
            console.log(error);
            })
          },
    }
})

export default store