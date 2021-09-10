import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, UPDATE_TODO } from "./constants";

const intialState = {
  todos: [],
  // task: {}
};

const rootReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? (todo = action.payload) : null
        ),
      };
    case COMPLETE_TODO:
      return {
        ...state,
        task: state.todos.map((todo) =>
          todo.id === action.payload ? (todo.completed = true) : false
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;
