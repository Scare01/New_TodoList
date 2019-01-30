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

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="todo">Todo</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChangeName}
          />
          <textarea
            type="text"
            value={this.state.description}
            onChange={this.handleChangeDescription}
          />
          <button type="submit">Add todo</button>
        </div>
      </form>
    );
  }
}

let AddForm = connect(
  null,
  mapDispatchToProps
)(Form);

export default AddForm;
