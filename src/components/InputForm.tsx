import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../store/actions";
import { ITodoItem, IAddTodoAction } from "../store/types";

export interface IInputFormProps {
  addTodo: (todo: ITodoItem) => IAddTodoAction;
}

const InputForm = ({ addTodo }: IInputFormProps) => {
  const [value, setValue] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addTodo({ name: value, isCompleted: false, id: new Date().getTime() });
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        autoFocus
        onChange={e => setValue(e.target.value)}
        value={value}
      />
      <button type="submit">+</button>
    </form>
  );
};

export default connect(
  null,
  { addTodo }
)(InputForm);
