import React, { useState } from "react";

export interface IInputFormProps {
  addTodo: (name: string) => void;
}

export default ({ addTodo }: IInputFormProps) => {
  const [value, setValue] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addTodo(value);
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
