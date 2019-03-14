import React from "react";
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

class EditForm extends React.Component {
  state = {
    name: this.props.todo.name || "",
    description: this.props.todo.description || "",
    importance: this.props.todo.importance || "Normal",
    dateToComplete: null
  };

  handleChangeName = e => {
    this.setState({ name: e.target.value });
  };

  handleChangeDescription = e => {
    this.setState({ description: e.target.value });
  };

  handleSubmit = () => {
    this.props.clickSave(
      this.state.name,
      this.state.description,
      this.state.importance,
      this.state.dateToComplete,
      this.state.timeToComplete
    );
  };

  handleImportance = e => {
    if (e.target.value === "Important") {
      this.setState({ importance: "Important" });
    }
    if (e.target.value === "Very Important") {
      this.setState({ importance: "Very Important" });
    }
  };

  handleChooseDate = e => {
    this.setState({ dateToComplete: e.target.value });
  };

  handleSetTime = time => {
    this.setState({ timeToComplete: time });
  };

  render() {
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

        <Button type="submit" color="green">
          Save Changes
        </Button>
      </Form>
    );
  }
}

export default EditForm;
