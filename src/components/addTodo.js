import React from "react";
import AddForm from "./addForm";
import { Button } from "semantic-ui-react";

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
      <Button onClick={this.hadleOpenForm} color="green">
        Add Todo
      </Button>
    );
  }
}

export default AddTodo;
