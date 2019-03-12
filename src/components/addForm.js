import React from "react";
import { addTodo } from "../redux/actions/index";
import { connect } from "react-redux";
import TimeField from "react-simple-timefield";
import { Form, Button, Input } from 'semantic-ui-react';

let options = [
  {
    value: ''
  }
]

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
      importance: "Normal",
      dateToComplete: null,
      timeToComplete: "00:00"
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

  handleChooseDate = e => {
    this.setState({ dateToComplete: e.target.value });
  };

  handleSetTime = time => {
    this.setState({ timeToComplete: time });
  };

  render() {
    let time = this.state.timeToComplete;
    return (




      <Form onSubmit={this.handleSubmit} id="form">
        <Form.Input 
          label='Name todo:' type="text"
          value={this.state.name}
          onChange={this.handleChangeName} 
        />
        <Form.TextArea 
          label='Description todo:' 
          type="text"
          value={this.state.description}
          onChange={this.handleChangeDescription} 
        />
        <Form.Select
          defaultValue="Normal" 
          onChange={this.handleImportance}
        >
          <option disabled>Choose Importance</option>
          <option value="Normal">Normal</option>
          <option value="Important">Important</option>
          <option value="Very Important">Very Important</option>
        </Form.Select>
         
      
        
          <label htmlFor="Date">Choose date and time for deadline or not:</label>
          <input type="date" name="day" onChange={this.handleChooseDate} />


          <TimeField value={time} onChange={this.handleSetTime} />
        <Button.Group>
          <Button type="submit" color='green'>Add</Button>
          <Button.Or />
          <Button onClick={this.props.closeForm} color='red'>Cancel</Button>
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
