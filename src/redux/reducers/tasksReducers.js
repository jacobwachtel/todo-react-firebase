import * as actions from '../actions/actionTypes'

const INIT_STATE = {
    
}

let lastId = 0;

const reducer = (state = INIT_STATE, action) => {
    switch(action.type) {
        case actions.ADD_DOC:
            return {
                ...state,
                text: action.payload.text,
                status: action.payload.status,
                id: lastId++,
            };
        case actions.SET_DOC:
            return {
                ...state,
                status: action.payload.status,
            };
        case actions.DEL_DOC:
            return state.filter(item => item.id !== action.payload.id)
        default:
            return state;
    }
}

export default reducer;