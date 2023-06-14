import { ADD_TODO } from './todoActionTypes';

//  u can only haz 1 default export per file

//  cant make api calls here
//  action creators must be pure functions
export const addTodo = async (todoToAdd) => {
  // make api call here

  return {
    type: ADD_TODO,
    payload: todoToAdd, // send data from api call as payload here
  };
};


