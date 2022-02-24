import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_TODO_TEXT,
  SET_FILTER,
} from "./actionTypes";

let nextTodoId = 0;

/**
 * 添加待办项
 */
export const addToDo = (text) => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text,
  completed: false,
});

/**
 * 添加待办项
 */
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

/**
 * 添加待办项
 */
export const setFilter = (filter) => ({
  type: SET_FILTER,
  filter,
});

/**
 * 添加待办项
 */
export const setTodoText = (text) => ({
  type: SET_TODO_TEXT,
  text,
});
