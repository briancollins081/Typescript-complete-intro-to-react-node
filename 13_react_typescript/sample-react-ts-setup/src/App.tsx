import React, { useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { Todo } from "./todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "t1", text: "Finish the course!" },
  ]);

  const handleAddTodo = (text: string) => {
    setTodos([...todos, { id: new Date().getTime().toString(), text }]);
  };

  const handleDeleteTodo = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={handleAddTodo} />
      <TodoList items={todos} onDeleteTodo={handleDeleteTodo} />
    </div>
  );
};

export default App;
