'use strict';

import React from 'react';
import TodoItem from './TodoItemComponent';

require('styles/TodoList.scss');

class TodoListComponent extends React.Component {

  render() {
    var self = this;
    return (
      <div className="todolist-component">
        <h2>TODOS:</h2>
        <ul >
          {this.props.list.map(function (task,index) {
            return <TodoItem deleteTodo={self.props.deleteItem} key={index} task={task}/>
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
