import * as actions from '../actions/actionTypes'

export const addTask = (task) => {
    return (dispatch) => {
        dispatch({
            type: 'ADD_DOC',
            payload: task
        })
    }
}

export const updateTask = (task) => {
    return (dispatch) => {
        dispatch({
            type: 'SET_DOC',
            payload: task.id
        })
    }
}

export const deleteTask = (task) => {
    return (dispatch) => {
        dispatch({
            type: 'DELETE_DOC',
            payload: task.id
        })
    }
}