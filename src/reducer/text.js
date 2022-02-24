import { SET_TODO_TEXT } from "../actions/actionTypes";

const text = function (state = "", action) {
  switch (action.type) {
    case SET_TODO_TEXT:
      return action.text;
    default:
      return state;
  }
};

export default text;
