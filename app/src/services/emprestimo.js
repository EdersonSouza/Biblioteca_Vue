import {http} from './config'

export default {
    listar:()=> {
        return http.get('empresimos')
    },
    create:(emprestimo) => {
        return http.post('emprestimo',emprestimo)
    }
}