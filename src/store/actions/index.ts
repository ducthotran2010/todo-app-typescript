// export * from "./todos";
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../actionTypes";
import {
  ITodoItem,
  IAddTodoAction,
  IRemoveTodoAction,
  IToggleTodoAction
} from "../types";
export const addTodo = (payload: ITodoItem): IAddTodoAction => ({
  type: ADD_TODO,
  payload
});
export const removeTodo = (payload: number): IRemoveTodoAction => ({
  type: REMOVE_TODO,
  payload
});
export const toggleTodo = (payload: number): IToggleTodoAction => ({
  type: TOGGLE_TODO,
  payload
});
