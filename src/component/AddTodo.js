import React, { Component } from "react";

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  handleOnClick = () => {
    const { text } = this.state;
    this.props.addTodo(text);
  };

  handleOnChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <input value={this.state.text} onChange={this.handleOnChange} />
        <button onClick={this.handleOnClick}>add</button>
      </div>
    );
  }
}

export default AddTodo;
