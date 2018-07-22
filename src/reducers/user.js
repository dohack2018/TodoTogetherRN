import * as actionTypes from 'actions/actionTypes'

const initialState = {
    id: 2,
    working: undefined
}

export default function userReducer(state = initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
}
