import React from "react";

import TaskBar from "./TaskBar";
import Button from "./Button";

class App extends React.Component {
  onClickButton = (signal) => {
    if (signal === 1) {
      console.log("You clicked to Add");
    }
    if (signal === 2) {
      console.log("You clicked to Clear");
    }
    if (signal === 3) {
      console.log("You clicked to Search");
    }
  };

  render() {
    return (
      <div className='ui container'>
        <div className='ui segments'>
          <div className='ui segment'>
            <h1>TODO List</h1>
            <form className='ui form'>
              <TaskBar name='addTask' placeholder='Add Task'>
                <Button
                  label='Add'
                  color='green'
                  onClickButton={this.onClickButton}
                />
                <Button
                  label='Clear'
                  color='orange'
                  onClickButton={this.onClickButton}
                />
              </TaskBar>

              <TaskBar name='searchTask' placeholder='Search Task'>
                <Button
                  label='Search'
                  color='blue'
                  onClickButton={this.onClickButton}
                />
              </TaskBar>
            </form>
          </div>
          {/* <div className='ui segment'></div> */}
        </div>
      </div>
    );
  }
}

export default App;
