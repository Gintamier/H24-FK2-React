import { FC } from "react";

type ResetButtonProps = {
  resetTodos: () => void;
};

const ResetButton: FC<ResetButtonProps> = ({ resetTodos }) => {
  return (
    <button
      onClick={resetTodos}
      className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
    >
      Reset Todo List
    </button>
  );
};

export default ResetButton;
