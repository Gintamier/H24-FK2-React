import { Todo } from "@/types";
import { FC, useState } from "react";

type TodoItemProps = {
  todo: Todo;
  toggleCompletion: () => void;
  deleteTodo: () => void;
};

const TodoItem: FC<TodoItemProps> = ({
  todo,
  toggleCompletion,
  deleteTodo,
}) => {
  console.log("rendering todo item", todo.text);
  const [isRed, setIsRed] = useState<boolean>(false); // Local state to track text color (on/off)

  const handleColorToggle = () => {
    setIsRed(!isRed); // Toggle between black and red
  };

  return (
    <li className="flex justify-between items-center p-2 border-b border-gray-200">
      <span
        onClick={toggleCompletion}
        className={`flex-1 cursor-pointer ${
          todo.completed ? "line-through" : ""
        } ${isRed ? "text-red-500" : "text-black"}`} // Toggle text color
      >
        {todo.text}
      </span>

      <button
        onClick={handleColorToggle} // Trigger the color toggle
        className="text-blue-500 hover:text-blue-700 ml-2"
      >
        Toggle Color
      </button>

      <button
        onClick={deleteTodo}
        className="text-red-500 hover:text-red-700 ml-2"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
