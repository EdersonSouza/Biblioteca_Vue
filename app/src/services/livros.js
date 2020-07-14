import {http} from './config'
//http.defaults.headers.common['x-access-token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVmMDdiMjJmOTA0OTZlMWM1MGM1ODQ1MyIsIm5vbWVVc2VyIjoiZGF2aSBzYW50b3MiLCJwYXNzd29yZCI6IiQyYSQxMCRjcWJKWE9WLkFocmJKNjZSRDQvTXJ1enhvazdOQkRzTnNXakNPSi9kV0JrMUt2bElWRzJnRyIsIl9fdiI6MH0sImlhdCI6MTU5NDY4OTc1MSwiZXhwIjoxNTk0Nzc2MTUxfQ.1sum3mxxuefCkEKGOb1tpDaotkoo2-5Q3OmmFxmRqRo'
export default {
    listar:()=> {
        return http.get('livros')
    },
    create:(livro) => {
        return http.post('livro',livro)
    }
}