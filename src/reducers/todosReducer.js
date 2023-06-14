import {ADD_TODO} from "../actions/todoActionTypes";


const INITIAL_STATE = {
  todos: [],
};


export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    default:
      return state;
  }
}