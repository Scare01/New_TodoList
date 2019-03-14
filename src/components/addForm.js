import React from "react";
import { addTodo } from "../redux/actions/index";
import { connect } from "react-redux";
import { Form, Button } from "semantic-ui-react";

let options = [
  {
    value: "Normal",
    text: "Normal"
  },
  {
    value: "Important",
    text: "Important"
  },
  {
    value: "Very Important",
    text: "Very Important"
  }
];

let mapDispatchToProps = dispatch => {
  return {
    addTodo: (name, description, importance, dateToComplete, timeToComplete) =>
      dispatch(
        addTodo(name, description, importance, dateToComplete, timeToComplete)
      )
  };
};

class AddTodoForm extends React.Component {
  state = {
    name: "",
    description: "",
    importance: "Normal",
    dateToComplete: "",
    timeToComplete: "00:00"
  };

  handleChangeName = e => {
    this.setState({ name: e.target.value });
  };

  handleChangeDescription = e => {
    this.setState({ description: e.target.value });
  };

  handleSubmit = () => {
    this.props.closeForm();
    this.props.addTodo(
      this.state.name,
      this.state.description,
      this.state.importance,
      this.state.dateToComplete,
      this.state.timeToComplete
    );

    this.setState({
      name: "",
      description: "",
      importance: "",
      dateToComplete: null,
      timeToComplete: "00:00"
    });
  };

  handleImportance = (e, { value }) => {
    this.setState({ importance: value });
  };

  handleChooseDate = e => {
    this.setState({ dateToComplete: e.target.value });
  };

  handleSetTime = time => {
    this.setState({ timeToComplete: time });
  };

  render() {
    //let time = this.state.timeToComplete;
    return (
      <Form onSubmit={this.handleSubmit} id="form">
        <Form.Input
          label="Name todo:"
          type="text"
          value={this.state.name}
          onChange={this.handleChangeName}
        />
        <Form.TextArea
          label="Description todo:"
          type="text"
          value={this.state.description}
          onChange={this.handleChangeDescription}
        />
        <Form.Select
          placeholder="Choose importance"
          options={options}
          onChange={this.handleImportance}
        />
        <Form.Input type="date" onChange={this.handleChooseDate} />

        <Form.Input type="time" onChange={this.handleSetTime} />

        <Button.Group>
          <Button type="submit" color="green">
            Add
          </Button>
          <Button.Or />
          <Button onClick={this.props.closeForm} color="red">
            Cancel
          </Button>
        </Button.Group>
      </Form>
    );
  }
}

let AddForm = connect(
  null,
  mapDispatchToProps
)(AddTodoForm);

export default AddForm;
