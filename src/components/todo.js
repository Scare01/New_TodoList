import React from "react";

class Todo extends React.Component {
  render() {
    let today = new Date();

    let todoDeadlineDate = new Date(this.props.todo.dateToComplete);

    let style = todoDeadlineDate < today ? "red" : "black";

    let dateToComplete = this.props.todo.dateToComplete
      ? this.props.todo.dateToComplete
          .split("-")
          .reverse()
          .join(".")
      : null;

    let deadlineDate = this.props.todo.dateToComplete ? (
      <p>Deadline date: {dateToComplete}</p>
    ) : null;

    let buttonEdit = this.props.todo.completed ? null : (
      <button onClick={this.props.clickEdit}>Edit</button>
    );

    let buttonCompleted = this.props.todo.completed ? null : (
      <button onClick={this.props.clickCompleted}>Completed</button>
    );

    let completedDate = this.props.todo.completed ? (
      <p>Completed: {this.props.todo.completedDate}</p>
    ) : null;

    return (
      <div style={{ color: style }}>
        <h2>{this.props.todo.name}</h2>
        <h4>{this.props.todo.importance}</h4>
        <p>{this.props.todo.description}</p>
        {deadlineDate}
        {buttonEdit}
        {buttonCompleted}
        {completedDate}
        <button onClick={this.props.clickDelete}>Delete</button>
      </div>
    );
  }
}

export default Todo;
