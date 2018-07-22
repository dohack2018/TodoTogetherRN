import * as actionTypes from 'actions/actionTypes'

const initialState = {
    byKey: {
        "1": {
            key: "1",
            title: "Java Lernen",
            working: 1,
            finish: false
        },
        "2": {
            key: "2",
            title: "Mathe Lernen",
            working: 1,
            finish: false
        },
        "3": {
            key: "3",
            title: "PK1 Lernen",
            working: 2,
            finish: false
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

        case actionTypes.FINISH_TODO: {
            const { todoId } = action

            console.log(todoId);

            return {
                ...state,
                byKey: {
                    ...state.byKey,
                    [todoId]: {
                        ...state.byKey[todoId],
                        finish: true
                    }
                }
            }
        }
        default:
            return state;
    }
}
