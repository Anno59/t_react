import { ADD_TODO, TOGGLE_TODO } from "../actions/actionTypes";

const todos = function (state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map((item) =>
        item.id === action.id ? { ...item, completed: !action.completed } : item
      );
    default:
      return state;
  }
};

export default todos;
