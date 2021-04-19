import React from "react";
import { Todo } from "../todo.model";
import "./TodoList.css"

interface TodoListProps {
  items: Todo[];
  onDeleteTodo: (todoId: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ items, onDeleteTodo }) => {
  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id} style={{ paddingBottom: "2rem" }}>
          <span>{todo.text}</span>&nbsp;
          <button onClick={onDeleteTodo.bind(null, todo.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
