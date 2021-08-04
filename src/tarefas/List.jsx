import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButton from '../template/iconButton'
import { markAsDone, markAsPending, remove } from './Actions'

const TarefaList = props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(tarefa => (
            <tr key={tarefa._id}>
                <td className={tarefa.done ? 'markedAsDone' : ''}>{tarefa.description}</td>
                <td>
                    <IconButton style='success' icon='check' hide={tarefa.done}
                        onClick={() => props.markAsDone(tarefa)}></IconButton>
                    <IconButton style='warning' icon='undo' hide={!tarefa.done} 
                        onClick={() => props.markAsPending(tarefa)}></IconButton>
                    <IconButton style='danger' icon='trash-o' hide={!tarefa.done} 
                        onClick={() => props.remove(tarefa)}></IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({list: state.tarefa.list})
const mapDispatchToProps = dispatch => 
    bindActionCreators({ markAsDone, markAsPending, remove }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TarefaList)