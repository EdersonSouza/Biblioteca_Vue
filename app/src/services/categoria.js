import {http} from './config'

export default {
    listar:()=> {
        return http.get('categorias')
    },
    create:(categoria) => {
        return http.post('categoria',categoria)
    }
}