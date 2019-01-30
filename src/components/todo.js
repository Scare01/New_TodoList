import React from "react";

class Todo extends React.Component {
  render() {
    let EditButton = this.props.todo.completed ? null : (
      <button onClick={this.props.clickEdit}>Edit</button>
    );
    let CompeleteDate = this.props.todo.dateToComplete ? (
      <p>Completed to {this.props.todo.dateToComplete}</p>
    ) : null;

    let CompletedButton = this.props.todo.completed ? null : (
      <button onClick={this.props.clickCompleted}>Completed</button>
    );

    let TodoCompeleted = this.props.todo.completed ? (
      <p>Completed date: {this.props.todo.completedDate}</p>
    ) : null;

    return (
      <div className="todo">
        <h2>{this.props.todo.name}</h2>
        <h4>{this.props.todo.importance}</h4>
        <p>{this.props.todo.description}</p>
        {CompeleteDate}
        {EditButton}
        {CompletedButton}
        {TodoCompeleted}
        <button onClick={this.props.clickDelete}>Delete</button>
      </div>
    );
  }
}

export default Todo;
