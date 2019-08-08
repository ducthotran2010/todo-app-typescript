import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../actionTypes";
import { ITodoItem, ITodoActionTypes } from "../types";

const initState: ITodoItem[] = [];

export default function(
  state: ITodoItem[] = initState,
  action: ITodoActionTypes
) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case REMOVE_TODO:
      return state.filter((todo: ITodoItem) => todo.id !== action.payload);

    case TOGGLE_TODO:
      return state.map((todo: ITodoItem) =>
        todo.id === action.payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );

    default:
      return state;
  }
}
