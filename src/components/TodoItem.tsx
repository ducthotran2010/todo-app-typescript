import React from "react";
import { ITodoItem } from "../App";

interface ITodoItemProps {
  key: number;
  todo: ITodoItem;
  toggleCompleted: (id: number) => void;
  removeTodo: (id: number) => void;
}

const style = {
  container: { width: 200, fontSize: 18 },
  floatRight: {
    float: "right" as "right",
    fontWeight: "bold" as "bold",
    color: "red" as "red",
    cursor: "pointer"
  }
};

const TodoItem = ({
  todo: { name, isCompleted, id },
  toggleCompleted,
  removeTodo
}: ITodoItemProps) => {
  return (
    <div style={style.container}>
      <input
        type="checkbox"
        name={name}
        checked={isCompleted}
        onChange={() => toggleCompleted(id)}
      />

      {name}

      <span style={style.floatRight} onClick={() => removeTodo(id)}>
        &times;
      </span>
    </div>
  );
};

export default TodoItem;
