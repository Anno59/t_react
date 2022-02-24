import React, { Component } from "react";
import AddTodo from "./AddTodo";
import Footer from "./Footer";
import TodoList from "./TodoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      filter: "all",
    };
    this.newTodoid = 0;
  }

  render() {
    const { filter } = this.state;
    const todo = this.getVisibleTodos();
    return (
      <div>
        <AddTodo addTodo={this.addTodolist}></AddTodo>
        <TodoList todos={todo} toggleTodo={this.toggleTodo}></TodoList>
        <Footer
          filter={filter}
          setVisibilityFilter={this.setVisibilityFilter}
        ></Footer>
      </div>
    );
  }

  getVisibleTodos() {
    const { filter } = this.state;
    return this.state.todo.filter((item) => {
      if (filter === "active") {
        return !item.completed;
      } else if (filter === "completed") {
        return item.completed;
      } else {
        return true;
      }
    });
  }

  addTodolist = (text) => {
    const todo = {
      id: this.newTodoid++,
      text,
      completed: false,
    };

    const newTodo = [todo, ...this.state.todo];
    this.setState({
      todo: newTodo,
    });
  };

  toggleTodo = (id) => {
    const { todo } = this.state;
    todo.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
    });

    this.setState({
      todo,
    });
  };

  setVisibilityFilter = (filter) => {
    this.setState({
      filter,
    });
  };
}

export default App;
