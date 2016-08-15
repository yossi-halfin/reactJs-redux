require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import TodoList from './TodoListComponent';
import AddTodo from './AddTodoComponent';

import {addTodo, removeTodo} from '../actions/const';



let todosList = [];

class AppComponent extends React.Component {

  constructor(props,context){
    super(props,context);
    this.state={
      todos:this.context.store.getState().todo.todos
    }
  }
  regData(){
    this.context.store.subscribe(() =>
      this.setState({todos:this.context.store.getState().todo.todos})
    )
  }

  addTODO(taskTXT){
    this.context.store.dispatch(addTodo({
      'id':todosList.length+1,
      'description' : taskTXT,
      'isDone':false
    }));
  }

  deleteTODO(index){
    var index = index-1;
    this.context.store.dispatch(removeTodo(index));
  }


  render() {
    return (
      <div className='index'>
        <AddTodo addNewTodo={this.addTODO.bind(this)}/>
        <TodoList deleteItem={this.deleteTODO.bind(this)} list={this.state.todos} />
      </div>
    );
  }
}

AppComponent.contextTypes = { store: React.PropTypes.object };

export default AppComponent;
