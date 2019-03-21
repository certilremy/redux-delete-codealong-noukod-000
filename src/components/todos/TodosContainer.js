import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'
 
class TodosContainer extends Component {
 
  renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)
 
  render() {
    return(
      <div>
        {this.renderTodos()}
      </div>
    );
  }
};
 
const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    delete: todoText => dispatch({type: 'DELETE_TODO', payload: todoText })
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
Now, TodosContainer will have access to this.props.delete, which can take in an argument and send it as the action's payload. We can then pass this.props.delete down to Todo, so that each Todo component rendered will have access to our 'DELETE_TODO' action.

renderTodos = () => this.props.todos.map((todo, id) => <Todo delete={this.props.delete} key={id} text={todo} />)
 
Modifying the Todo Component
Todo is receiving this.props.delete, so let's update the component a little and incorporate a button:

import React from 'react'
 
const Todo = props => {
  return (
    <div>
      <span>{props.text}</span><button>DELETE</button>
    </div>
  )
}
 
export default Todo;