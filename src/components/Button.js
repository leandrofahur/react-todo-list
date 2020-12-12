import React from "react";

class Button extends React.Component {
  state = { signal: null };

  onClick = (event) => {
    event.preventDefault();

    if (this.props.label === "Add") {
      this.setState({ signal: 1 });
    }
    if (this.props.label === "Clear") {
      this.setState({ signal: 2 });
    }
    if (this.props.label === "Search") {
      this.setState({ signal: 3 });
    }
  };

  componentDidUpdate() {
    this.props.onClickButton(this.state.signal);
  }

  render() {
    return (
      <React.Fragment>
        <button
          className={`ui button ${this.props.color}`}
          onClick={this.onClick}
        >
          {this.props.label}
        </button>
      </React.Fragment>
    );
  }
}

export default Button;
