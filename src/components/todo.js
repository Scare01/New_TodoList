import React from "react";
import { Card, Button } from "semantic-ui-react";

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
      <Button color="blue" size="small" onClick={this.props.clickEdit}>
        Edit
      </Button>
    );

    let buttonCompleted = this.props.todo.completed ? null : (
      <Button color="green" size="small" onClick={this.handleComplete}>
        Completed
      </Button>
    );

    let completedDate = this.props.todo.completed ? (
      <p>Completed at {this.props.todo.completedDate}</p>
    ) : null;

    return (
      <Card style={{ color: style }} id="card">
        <Card.Content>
          <Card.Header>{this.props.todo.name}</Card.Header>
          <Card.Meta>Importance: {this.props.todo.importance}</Card.Meta>
          <Card.Description>{this.props.todo.description}</Card.Description>
          <Card.Content extra>
            <Card.Description>{deadlineDate}</Card.Description>
            <Card.Description>{completedDate}</Card.Description>
          </Card.Content>
        </Card.Content>

        <Button.Group id="todoButtons" size="mini">
          {buttonEdit}
          {buttonCompleted}
          <Button color="red" size="small" onClick={this.props.clickDelete}>
            Delete
          </Button>
        </Button.Group>
      </Card>
    );
  }
}

export default Todo;
