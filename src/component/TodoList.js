import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  render() {
    let { todos, toggleTodo } = this.props;
    return (
      <div>
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              onClick={() => toggleTodo(todo.id)}
              {...todo}
            ></Todo>
          );
        })}
      </div>
    );
  }
}

export default TodoList;
