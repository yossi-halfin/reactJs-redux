/* Populated by react-webpack-redux:action */

export const ADD_TODO  = 'ADD_TODO';
export const REMOVE_TODO  = 'REMOVE_TODO';


export function addTodo(object) {
  return { type: ADD_TODO, object }
}

export function removeTodo(index) {
  return { type: REMOVE_TODO, index }
}
