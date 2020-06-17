import {http} from './config'

export default {
    listar:()=> {
        return http.get('autores')
    },
    create:(autor) => {
        return http.post('autor',autor)
    }
}