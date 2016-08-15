'use strict';

import React from 'react';

require('styles//TodoItem.scss');

class TodoItemComponent extends React.Component {


  setAsDone(id, e) {
    this.props.deleteTodo(id, e.target.checked);
  }


  render() {
    return (
      <li className={this.props.task.isDone?'done todoitem-component ':'todoitem-component '}>
        <label>
          <input type="checkbox" checked={this.props.task.isDone}
                 onChange={this.setAsDone.bind(this,this.props.task.id)}/>
          <span>{this.props.task.description}</span>
        </label>

      </li>
    );
  }
}

TodoItemComponent.displayName = 'TodoItemComponent';

// Uncomment properties you need
TodoItemComponent.propTypes = {
  task: React.PropTypes.object.isRequired

};
// TodoItemComponent.defaultProps = {};

export default TodoItemComponent;
