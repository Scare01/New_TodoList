import React from "react";
import AddForm from "./addForm";

class AddTodo extends React.Component {
  state = {
    isOpen: false
  };

  hadleOpenForm = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return this.state.isOpen ? (
      <AddForm closeForm={this.hadleOpenForm} />
    ) : (
      <button onClick={this.hadleOpenForm}>Add Todo</button>
    );
  }
}

export default AddTodo;
