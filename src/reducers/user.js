import * as actionTypes from 'actions/actionTypes'

const initialState = {
    id: 2,
    working: undefined
}

export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case actionTypes.START_LEARNING: {
            const { todoId } = action;
            
            return {
                ...state,
                working: todoId
            }
        }
        default:
            return state;
    }
}
