import {http} from './config'

export default {
    listar:()=> {
        return http.get('emprestimos')
    },
    create:(emprestimo) => {
        return http.post('emprestimo',emprestimo)
    }
}