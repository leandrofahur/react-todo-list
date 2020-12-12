import React from "react";

import Button from "./Button";

class TaskBar extends React.Component {
  state = { field: "" };

  onChange = (event) => {
    this.setState({ field: event.target.value });
  };

  render() {
    return (
      <div className='field'>
        <input
          type='text'
          name={this.props.name}
          placeholder={this.props.placeholder}
          value={this.state.field}
          onChange={this.onChange}
        ></input>
        <br></br>
        <br></br>
        {this.props.children}
      </div>
    );
  }
}

export default TaskBar;
