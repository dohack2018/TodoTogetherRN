import * as actionTypes from './actionTypes'

export function startLearning(todoId) {
    return {
        type: actionTypes.START_LEARNING,
        payload: todoId
    }
}
