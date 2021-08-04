import { combineReducers } from 'redux'
import Reducer from '../tarefas/Reducer'

const rootReducer = combineReducers({
    tarefa: Reducer
})

export default rootReducer