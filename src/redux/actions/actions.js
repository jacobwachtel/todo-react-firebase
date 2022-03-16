import * as actions from './actionTypes'

// export function taskAdded (input) {
//     return {
//         type: actions.ADD_DOC,
//                 payload: {
//                     text: input,
//                     status: false,
//                 }
//     }
// }

export const addTodo = input => ({
    type: actions.ADD_DOC,
    payload: {
        text: input,
        status: false,
    }
})