import { createStore } from "redux";
import todoApp from "./reducer";
import { setTodoText, addToDo, toggleTodo, setFilter } from "./actions";

const store = createStore(todoApp);

console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(setTodoText("Learn"));
store.dispatch(addToDo("Learn"));
store.dispatch(toggleTodo(1));
store.dispatch(setFilter("active"));
