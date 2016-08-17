'use strict';

import React from 'react';
import TodoItem from './TodoItemComponent';

require('styles/TodoList.scss');

class TodoListComponent extends React.Component {
  render() {
    return (
      <div className="todolist-component">
        <h2>TODOS:</h2>
        <ul >
          {this.props.list.map((task,index)=>{
            return <TodoItem deleteTodo={this.props.deleteItem} key={index} task={task}/>
          })}
        </ul>
      </div>
    );
  }
}

TodoListComponent.displayName = 'TodoListComponent';

// Uncomment properties you need
// TodoListComponent.propTypes = {};
// TodoListComponent.defaultProps = {};

export default TodoListComponent;
