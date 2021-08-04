import React from 'react'

import PageHeader from '../template/pageHeader'
import TarefaForm from './Form'
import TarefaList from './List'

export default props => (
    <div>
        <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
        <TarefaForm />
        <TarefaList />
    </div>
)