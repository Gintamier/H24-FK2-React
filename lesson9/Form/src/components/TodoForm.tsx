import { FC, MouseEventHandler, useState } from "react";

type TodoFormProps = {
  addTodo: (newTodo: string) => void;
};

const TodoForm: FC<TodoFormProps> = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="mb-20">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task"
        className="p-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSubmit}
        type="button"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Add Todo
      </button>
    </div>
  );
};

export default TodoForm;
