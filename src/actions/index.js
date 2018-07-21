import * as actionTypes from './actionTypes'
import axios from "axios"
import Config from "../Config"

// TODO

export function startLearning(todoId) {
    return (dispatch, getState) => {
        const { user } = getState();

        axios.post(`${Config.appUrl}/learning`, {
            userId: user.id,
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
            payload: todoId
        });
    };
  }