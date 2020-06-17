import {http} from './config'

export default {
    listar:()=> {
        return http.get('alunos')
    },
    create:(aluno) => {
        return http.post('aluno',aluno)
    }
}