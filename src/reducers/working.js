import * as actionTypes from 'actions/actionTypes'

const initialState = {
    byTodoId: {
        "1": {
            todoId: "1",
            userIds: {1: 1, 2: 2}
        },
        "2": {
            todoId: "2",
            userIds: {3: 3}
        }
    },
    allIds: ["1","2"]
}

export default function workingReducer(state = initialState, action) {
    switch(action.type) {
        case actionTypes.START_LEARNING: {
            const { todoId, userId } = action

            return {
                ...state,
                byTodoId: {
                    ...state.byTodoId,
                    [todoId]: {
                        ...state.byTodoId[todoId],
                        userIds: {
                            ...state.byTodoId[todoId].userIds,
                            [userId]: userId
                        }
                    }
                }
            };
        }
        default:
            return state;
    }
}
