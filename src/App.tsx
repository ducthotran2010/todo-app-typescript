import React, { useState } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import TodoItem from "./components/TodoItem";

export interface ITodoItem {
  id: number;
  name: string;
  isCompleted: boolean;
}
interface ITodoList extends Array<ITodoItem> {}

export interface IAppState {
  todos: ITodoList;
}

export default () => {
  const [todos, setTodos] = useState<ITodoList>([
    { name: "I want to fly", isCompleted: false, id: new Date().getTime() }
  ]);

  const addTodo = (name: string): void => {
    const newTodos = [
      ...todos,
      { name, isCompleted: false, id: new Date().getTime() }
    ];
    setTodos(newTodos);
  };

  const toggleCompleted = (id: number): void => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? {
              ...todo,
              isCompleted: !todo.isCompleted
            }
          : todo
      )
    );
  };

  const removeTodo = (id: number): void => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  return (
    <>
      <Header title="Todo App" subTitle="This is todo app using react hooks" />
      <InputForm addTodo={addTodo} />
      <br />
      {todos.map(todo => (
        <TodoItem
          removeTodo={removeTodo}
          toggleCompleted={toggleCompleted}
          todo={todo}
          key={todo.id}
        />
      ))}
    </>
  );
};
