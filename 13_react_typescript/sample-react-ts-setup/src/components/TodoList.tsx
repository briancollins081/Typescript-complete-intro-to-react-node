import React from "react";
import { Todo } from "../todo.model";

interface TodoListProps {
  items: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({items}) => {
  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
