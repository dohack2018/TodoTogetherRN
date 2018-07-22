import * as actionTypes from './actionTypes'
import axios from "axios"
import Config from "../Config"

// TODO

export function startLearning(todoId) {
    return (dispatch, getState) => {
        const state = getState();
        const userId = state.user.id;

        axios.post(`${Config.appUrl}/learning`, {
            userId,
            todoId
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        dispatch({
            type: actionTypes.START_LEARNING,
            todoId,
            userId
        });
    };
  }

  export function finishTodo(todoId) {
    return (dispatch, getState) => {
      const state = getState();
      const userId = state.user.id
    
      return dispatch({
        type: actionTypes.FINISH_TODO,
        todoId,
        userId
    });
    }
  }
