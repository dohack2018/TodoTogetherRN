import * as actionTypes from '../actions/actionTypes'
import { combineReducers } from '../../../../../Library/Caches/typescript/2.9/node_modules/redux'
import todosReducer from './todos'
import userReducer from './user'
import groupReducer from './group'
import workingReducer from './working'

export default combineReducers({
    todos: todosReducer,
    user: userReducer,
    group: groupReducer,
    working: workingReducer
});
