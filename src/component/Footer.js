import React, { Component } from "react";

class Footer extends Component {
  render() {
    const { filter, setVisibilityFilter } = this.props;
    return (
      <div>
        <span>show:</span>
        <button
          disabled={filter === "all"}
          onClick={() => {
            setVisibilityFilter("all");
          }}
        >
          all
        </button>
        <button
          disabled={filter === "active"}
          onClick={() => {
            setVisibilityFilter("active");
          }}
        >
          active
        </button>
        <button
          disabled={filter === "completed"}
          onClick={() => {
            setVisibilityFilter("completed");
          }}
        >
          completed
        </button>
      </div>
    );
  }
}

export default Footer;
