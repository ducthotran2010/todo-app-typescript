import React from "react";
import { connect } from "react-redux";

import Header from "./components/Header";
import { InputForm, TodoItem } from "./components";
import { ITodoItem } from "./store/types";
import { AppState } from "./store/reducers";

interface IAppProps {
  todos?: ITodoItem[];
}

const App = ({ todos }: IAppProps) => {
  return (
    <>
      <Header
        title="Todo App"
        subTitle="This is todo app using typescript + react + hooks + redux"
      />
      <InputForm />
      <br />
      {todos && todos.map(todo => <TodoItem todo={todo} key={todo.id} />)}
    </>
  );
};

const mapStateToProps = (state: AppState): IAppProps => ({
  todos: state.todos
});

export default connect(mapStateToProps)(App);
