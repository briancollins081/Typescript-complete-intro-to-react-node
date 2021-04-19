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

  return (
    <div className="App">
      <NewTodo onAddTodo={handleAddTodo} />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
