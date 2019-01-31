import React from "react";
import TimeField from "react-simple-timefield";

class EditForm extends React.Component {
  state = {
    name: this.props.todo.name || "",
    description: this.props.todo.description || "",
    importance: this.props.todo.importance || "Normal",
    dateToComplete: null,
    timeToComplete: "00:00"
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
    let time = this.state.timeToComplete;

    return (
      <form onSubmit={this.handleSubmit} className="form">
        <label htmlFor="Name">Name todo:</label>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleChangeName}
          required
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
        <label htmlFor="Date">Choose date for deadline or not:</label>
        <input type="date" name="day" onChange={this.handleChooseDate} />
        <label htmlFor="Time">Set time:</label>
        <TimeField value={time} onChange={this.handleSetTime} />
        <button type="submit">Save Changes</button>
      </form>
    );
  }
}

export default EditForm;
