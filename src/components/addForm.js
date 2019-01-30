import React from "react";
import { addTodo } from "../redux/actions/index";
import { connect } from "react-redux";

let mapDispatchToProps = dispatch => {
  return {
    addTodo: (name, description, importance, dateToComplete) =>
      dispatch(addTodo(name, description, importance, dateToComplete))
  };
};

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      description: "",
      importance: "Normal",
      dateToComplete: null
    };
  }

  handleChangeName = e => {
    this.setState({ name: e.target.value });
  };

  handleChangeDescription = e => {
    this.setState({ description: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(
      this.state.name,
      this.state.description,
      this.state.importance,
      this.state.dateToComplete
    );
    this.setState({
      name: "",
      description: "",
      importance: "Normal",
      dateToComplete: null
    });
  };

  handleImportance = e => {
    if (e.target.value === "Important") {
      this.setState({ importance: "Important" });
    }
    if (e.target.value === "Very Important") {
      this.setState({ importance: "Very Important" });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <label htmlFor="Name">Name todo:</label>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleChangeName}
        />
        <label htmlFor="Description">Description todo:</label>
        <textarea
          type="text"
          value={this.state.description}
          onChange={this.handleChangeDescription}
        />
        <label htmlFor="Importance">Importance:</label>
        <select defaultValue="Normal" onChange={this.handleImportance}>
          <option disabled>Choose Importance</option>
          <option value="Normal">Normal</option>
          <option value="Important">Important</option>
          <option value="Very Important">Very Important</option>
        </select>
        <button type="submit">Add todo</button>
      </form>
    );
  }
}

let AddForm = connect(
  null,
  mapDispatchToProps
)(Form);

export default AddForm;
