export const addTask = (task) => {
    return (dispatch) => {
        dispatch({
            type: 'addDoc',
            payload: task
        })
    }
}

export const updateTask = (task) => {
    return (dispatch) => {
        dispatch({
            type: 'setDoc',
            payload: task
        })
    }
}

export const deleteTask = (task) => {
    return (dispatch) => {
        dispatch({
            type: 'deleteDoc',
            payload: task.id
        })
    }
}