import { useState } from "react";

type Props = {
  onAddExpense: (expense: { name: string; cost: number }) => void;
};

const AddExpenseForm = ({ onAddExpense }: Props) => {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (name && cost) {
      onAddExpense({ name, cost: parseFloat(cost) });
      setName("");
      setCost("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto"
    >
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">
        Add New Expense
      </h2>

      <div className="mb-5">
        <label htmlFor="name" className="block text-gray-600 font-medium mb-2">
          Expense Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 placeholder-gray-400"
          placeholder="e.g., Groceries, Rent"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="cost" className="block text-gray-600 font-medium mb-2">
          Cost ($)
        </label>
        <input
          type="number"
          id="cost"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 placeholder-gray-400"
          placeholder="e.g., 50.00"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:bg-blue-700 transition-all duration-200"
      >
        Add Expense
      </button>
    </form>
  );
};

export default AddExpenseForm;
