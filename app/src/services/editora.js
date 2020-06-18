import {http} from './config'

export default {
    listar:()=> {
        return http.get('editoras')
    },
    create:(editora) => {
        return http.post('editora',editora)
    }
}