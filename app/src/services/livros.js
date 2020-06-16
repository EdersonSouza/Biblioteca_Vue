import {http} from './config'

export default {
    listar:()=> {
        return http.get('livros')
    },
    create:(livro) => {
        return http.post('livro',livro)
    }
}