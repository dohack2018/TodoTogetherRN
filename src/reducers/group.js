import * as actionTypes from 'actions/actionTypes'

const initialState = {
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

export default function groupReducer(state = initialState, action) {
    switch(action.type) {
        case actionTypes.START_LEARNING: {
            const { todoId, userId } = action

            return {
                ...state,
                members: {
                    ...state.members,
                    byKey: {
                        ...state.members.byKey,
                        [userId]: {
                            ...state.members.byKey[userId],
                            working: todoId
                        }
                    }
                }
            };
        }
        default:
            return state;
    }
}
