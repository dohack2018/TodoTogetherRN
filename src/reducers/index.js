import * as actionTypes from '../actions/actionTypes'

const initialState = {
    user: {
        id: 1
    },
    todos: {
        byKey: {
            "1": {
                key: "1",
                title: "Java Lernen",
                working: []
            },
            "2": {
                key: "2",
                title: "Mathe Lernen",
                working: []
            },
            "3": {
                key: "3",
                title: "PK1 Lernen",
                working: []
            }
        },
        allKeys: ["1","2","3"]
    }
}

export default function todoTogetherApp(state = initialState, action) {
    switch(action.type) {
        case actionTypes.START_LEARNING: {
            const { payload } = action
            const item = state.todos.byKey[payload]
            const working = item.working
            const userId = state.user.id

            console.log(state);

            const newState = { 
                ...state,
                todos: {
                    ...state.todos,
                    byKey: {
                        ...state.todos.byKey, 
                            [payload]: {
                                ...item,
                                working: [
                                    ...working,
                                    userId
                                ]
                            }
                        
                    }
                }
            }

            console.log(newState);

            return newState;
        }
    }

    return state;
}