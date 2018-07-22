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

function updateWorking(state, todoId, userId) {
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

export default function groupReducer(state = initialState, action) {
    switch(action.type) {
        case actionTypes.START_LEARNING: {
            const { todoId, userId } = action

            return updateWorking(state, todoId, userId);
        }

        case actionTypes.FINISH_TODO: {
            const { todoId, userId } = action

            let member = { ...state.members.byKey[userId] }

            if(member.working != todoId) 
                return state;

            return updateWorking(state, undefined, userId);
        }
        default:
            return state;
    }
}
