const INIT_STATE = {
    text: '',
    status: false,
}

const reducer = (state = INIT_STATE, action) => {
    switch(action.type) {
        case 'addDoc':
            return {
                ...state,
                text: action.payload.text,
                status: action.payload.status,
            };
        case 'setDoc':
            return {
                ...state,
                status: action.payload.status,
            };
        case 'deleteDoc':
            return action.payload;
        default:
            return state;
    }
}

export default reducer;