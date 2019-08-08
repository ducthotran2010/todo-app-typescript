import { combineReducers } from "redux";
import todos from "./todos";

const rootReducers = combineReducers({
  fromDos: todos,
  todos
});

export type AppState = ReturnType<typeof rootReducers>;

export default rootReducers;
