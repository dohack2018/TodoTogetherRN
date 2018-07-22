import * as actionTypes from 'actions/actionTypes'

const initialState = {
    byKey: {
        "1": {
            key: "1",
            title: "Java Lernen",
            working: 1
        },
        "2": {
            key: "2",
            title: "Mathe Lernen",
            working: 1
        },
        "3": {
            key: "3",
            title: "PK1 Lernen",
            working: 2
        }
    },
    allKeys: ["1","2","3"]
}

export default function todosReducer(state = initialState, action) {
    switch(action.type) {
        case actionTypes.START_LEARNING: {
            const { todoId, userId } = action
            
            return {
                ...state,
                byKey: {
                    ...state.byKey,
                    [todoId]: {
                        ...state.byKey[todoId],
                        working: todoId
                    }
                }
            }
        }
        default:
            return state;
    }
}
