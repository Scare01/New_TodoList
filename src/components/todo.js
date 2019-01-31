import React from "react";

class Todo extends React.Component {
  render() {
    let today = new Date();

    let todoDate =
      this.props.todo.dateToComplete && this.props.todo.timeToComplete
        ? this.props.todo.dateToComplete + "T" + this.props.todo.timeToComplete
        : this.props.todo.dateToComplete
        ? this.props.todo.dateToComplete
        : null;

    let todoDeadlineDate = new Date(todoDate);

    let style = this.props.todo.completed
      ? "green"
      : todoDate
      ? todoDeadlineDate < today
        ? "red"
        : "black"
      : "black";

    let dateToComplete = this.props.todo.dateToComplete
      ? this.props.todo.dateToComplete
          .split("-")
          .reverse()
          .join(".")
      : null;

    let timeToComplete = this.props.todo.timeToComplete
      ? this.props.todo.timeToComplete
      : null;

    let deadlineDate = this.props.todo.dateToComplete ? (
      <p>
        Deadline date: {dateToComplete} {timeToComplete}
      </p>
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
