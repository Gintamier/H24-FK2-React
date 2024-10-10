import { Todo } from "@/types";
import { FC } from "react";
import TodoItem from "./TodoItem";

type TodoListProps = {
  todos: Todo[];
  toggleTodoCompletion: (index: number) => void;
  deleteTodo: (index: number) => void;
};

const TodoList: FC<TodoListProps> = ({
  todos,
  toggleTodoCompletion,
  deleteTodo,
}) => {
  return (
    <ul className="w-full max-w-md bg-white shadow-md rounded-lg p-4 mb-4">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          toggleCompletion={() => toggleTodoCompletion(index)}
          deleteTodo={() => deleteTodo(index)}
        />
      ))}
    </ul>
  );
};

export default TodoList;
