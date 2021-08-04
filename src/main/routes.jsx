import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Tarefa from '../tarefas/tarefa'
import About from '../about/about'

export default props => (
    <Router history={hashHistory}>
        <Route path='/tarefas' component={Tarefa} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/tarefas' />
    </Router>
)