import { TodoForm, TodoList, ResetButton } from "@/components";
import { Todo } from "@/types";
import React, { FC, useState } from "react";

const INITIAL_TODOS: Todo[] = [
  { text: "Fara út með hundinn", completed: true },
  { text: "Skamma köttinn", completed: true },
  { text: "Hengja upp þvottinn", completed: false },
];

const App: FC = () => {
  const [todos, setTodos] = useState<Todo[]>(INITIAL_TODOS);

  const addTodo = (newTodo: string) => {
    setTodos([...todos, { text: newTodo, completed: false }]);
  };

  const toggleTodoCompletion = (index: number) => {
    const newTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const resetTodos = () => {
    setTodos([]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple-700">
      <h1 className="text-4xl font-bold mb-6">Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleTodoCompletion={toggleTodoCompletion}
        deleteTodo={deleteTodo}
      />
      <ResetButton resetTodos={resetTodos} />
    </div>
  );
};

export default App;
