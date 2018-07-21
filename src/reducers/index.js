import * as actionTypes from '../actions/actionTypes'

const initialState = {
    user: {
        id: 2,
        working: []
    },
    todos: {
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
    },
    group: {
        id: "1",
        name: "Kibibytes",
        members: {
            byKey: {
               0: {
                    id: 0,
                    name: "Spongebob",
                    working: "2"
                },
               1: {
                    id: 1,
                    name: "Ghandi",
                    working: "2"
                },
                2: {
                    id: 2,
                    name: "Elon Musk",
                    working: undefined
                },
                3: {
                    id: 3,
                    name: "Linus Torwalds",
                    working: undefined
                },
                4: {
                    id: 4,
                    name: "Johannes Cleven",
                    working: undefined
                }
            },
            allKeys: [0,1,2,3,4]
        }
    }
}

export default function todoTogetherApp(state = initialState, action) {
    switch(action.type) {
        case actionTypes.START_LEARNING: {
            const { payload } = action
            const item = state.todos.byKey[payload]
            const working = item.working
            const userId = state.user.id
            const members = state.group.members

            console.log(state);

            const newState = { 
                ...state,
                user: {
                    ...state.user,
                    working: [
                        ...state.user.working,
                        payload
                    ]
                },
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
                },
                group: {
                    ...state.group,
                    members: {
                        ...members,
                        byKey: {
                            ...members.byKey,
                            [userId]: {
                                ...members.byKey[userId],
                                working: payload
                            }
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