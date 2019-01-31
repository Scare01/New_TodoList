import React from "react";

class Todo extends React.Component {
  handleComplete = () => {
    let day = new Date();
    let dd = day.getDate();
    let mm =
      day.getMonth() < 10 ? "0" + (day.getMonth() + 1) : day.getMonth() + 1;
    let yyyy = day.getFullYear();
    let hh = day.getHours();
    let min = day.getMinutes() < 10 ? "0" + day.getMinutes() : day.getMinutes();

    let completedDate = dd + "." + mm + "." + yyyy + " " + hh + ":" + min;

    this.props.clickCompleted(completedDate);
  };

  render() {
    console.log(this.props.todo.completedDate);

    let today = new Date();

    let timeToComplete = this.props.todo.timeToComplete
      ? this.props.todo.timeToComplete
      : "00:00";

    let todoDate =
      this.props.todo.dateToComplete && timeToComplete
        ? this.props.todo.dateToComplete + "T" + timeToComplete
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

    let deadlineDate = this.props.todo.dateToComplete ? (
      <p>
        Deadline date: {dateToComplete} {timeToComplete}
      </p>
    ) : null;

    let buttonEdit = this.props.todo.completed ? null : (
      <button onClick={this.props.clickEdit}>Edit</button>
    );

    let buttonCompleted = this.props.todo.completed ? null : (
      <button onClick={this.handleComplete}>Completed</button>
    );

    let completedDate = this.props.todo.completed ? (
      <p>Completed at {this.props.todo.completedDate}</p>
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
