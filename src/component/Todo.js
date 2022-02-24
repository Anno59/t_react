import React, { Component } from "react";

class Todo extends Component {
  render() {
    const { text, completed, onClick } = this.props;
    return (
      <div>
        {
          <li
            style={{
              textDecoration: completed ? "line-through" : "none",
            }}
            onClick={onClick}
          >
            {text}
          </li>
        }
      </div>
    );
  }
}

export default Todo;
