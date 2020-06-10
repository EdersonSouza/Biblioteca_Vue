import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/About.vue'),
    children: [
      { path: 'livros', name: 'livros', component: () => import('../components/livros/livro') },
      { path: 'autor', name: 'autor', component: () => import('../components/autor/autor') },
      { path: 'editora', name: 'editora', component: () => import('../components/editoras/editora') },
      { path: 'aluno', name: 'aluno', component: () => import('../components/alunos/aluno') },
      { path: 'emprestimo', name: 'emprestimo', component: () => import('../components/emprestimos/emprestimo') },
    ]
  }

]

const router = new VueRouter({
  mode: process.env.IS_ELECTRON ? 'hash' : 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
