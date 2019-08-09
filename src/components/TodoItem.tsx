import React from "react";
import { connect } from "react-redux";
import { removeTodo, toggleTodo } from "../store/actions";
import { ITodoItem } from "../store/types";

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

export default connect(
  null,
  { removeTodo, toggleCompleted: toggleTodo }
)(TodoItem);
