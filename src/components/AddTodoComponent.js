'use strict';

import React from 'react';

require('styles/AddTodo.scss');
class AddTodoComponent extends React.Component {
  constructor(){
    super();
    this.state = {taskTxt:''};
  }
  addNewItem(e){

    this.props.addNewTodo(this.state.taskTxt);
    this.setState({taskTxt:''});
    e.preventDefault();
  }

  setTaskName(e){
    this.setState({taskTxt:e.target.value});
  }
  render() {
    return (
      <form onSubmit={this.addNewItem.bind(this)} className="addtodo-component">
        <h1>ReactJS - Todo list <img height="30" src="images/redux.png"/> <img height="30" src="images/reacts.png"/></h1>
        <input placeholder="What needs to do?"
               value={this.state.taskTxt}
               onChange={this.setTaskName.bind(this)}
               type="text" />
        <button disabled={!this.state.taskTxt.length} type="submit">Add!</button>
      </form>
    );
  }
}

AddTodoComponent.displayName = 'AddTodoComponent';

// Uncomment properties you need
// AddTodoComponent.propTypes = {};
// AddTodoComponent.defaultProps = {};

export default AddTodoComponent;
