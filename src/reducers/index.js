/* Combine all available reducers to a single root reducer.
 *
 * CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import { combineReducers } from 'redux';
/* Populated by react-webpack-redux:reducer */
import { ADD_TODO, REMOVE_TODO } from '../actions/const';

const initialState = {
  todos: [
    {
      'id':1,
      'description' : 'Get groceries',
      'isDone':true
    },
    {
      'id':2,
      'description' : 'Make up some new ToDos',
      'isDone':false
    },
    {
      'id':3,
      'description' : 'Prep for Mondays class',
      'isDone':false
    },
    {
      'id':4,
      'description' : 'Answer emails',
      'isDone':false
    },
    {
      'id':5,
      'description' : 'Take Gracie to the park',
      'isDone':false
    },
    {
      'id':6,
      'description' : 'Finish writing this book',
      'isDone':false
    }
  ]
};

function todo(state = initialState, action){
  switch(action.type){
    case ADD_TODO:
      state.todos.push(action.object);
      return state;
    case REMOVE_TODO:
       state.todos[action.index].isDone=!state.todos[action.index].isDone;
      return state;
    default:
      return state;
  }
}

const reducers = {todo};
module.exports = combineReducers(reducers);
