import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../actionTypes";

export interface ITodoItem {
  id: number;
  name: string;
  isCompleted: boolean;
}

export interface IAddTodoAction {
  type: typeof ADD_TODO;
  payload: ITodoItem;
}

export interface IRemoveTodoAction {
  type: typeof REMOVE_TODO;
  payload: number;
}

export interface IToggleTodoAction {
  type: typeof TOGGLE_TODO;
  payload: number;
}

export type ITodoActionTypes =
  | IAddTodoAction
  | IRemoveTodoAction
  | IToggleTodoAction;
