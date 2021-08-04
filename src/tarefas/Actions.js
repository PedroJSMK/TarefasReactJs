import axios from 'axios'

const URL = 'http://localhost:3003/api/tarefas'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    return (dispatch, getState) => {
        const description = getState().tarefa.description
        const search = description ? `&description__regex=/${description}/` : ''
        const request = axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => dispatch({type: 'TAREFA_SEARCHED', payload: resp.data}))
    }
}

export const add = (description) => {
    return dispatch => {
        axios.post(URL, { description })
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()))
    }
}

export const markAsDone = (tarefa) => {
    return dispatch => {
        axios.put(`${URL}/${tarefa._id}`, { ...tarefa, done: true })
            .then(resp => dispatch(search()))
    }
}

export const markAsPending = (tarefa) => {
    return dispatch => {
        axios.put(`${URL}/${tarefa._id}`, { ...tarefa, done: false })
            .then(resp => dispatch(search()))
    }
}

export const remove = (tarefa) => {
    return dispatch => {
        axios.delete(`${URL}/${tarefa._id}`)
            .then(resp => dispatch(search()))
    }
}

export const clear = () => {
    return [{ type: 'TAREFA_CLEAR' }, search()]
}