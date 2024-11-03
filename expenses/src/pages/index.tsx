import React, { useState } from "react";

interface Expense {
  id: number;
  name: string;
  amount: number;
}

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [expenseName, setExpenseName] = useState<string>("");
  const [expenseAmount, setExpenseAmount] = useState<string>("");

  const addExpense = () => {
    if (expenseName && expenseAmount) {
      setExpenses((prevExpenses) => [
        ...prevExpenses,
        {
          name: expenseName,
          amount: parseFloat(expenseAmount),
          id: Date.now(),
        },
      ]);
      setExpenseName("");
      setExpenseAmount("");
    }
  };

  const removeExpense = (id: number) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  };

  const totalCost = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const expenseCount = expenses.length;

  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md mr-10">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          My Expenses
        </h1>

        <div className="mb-6 space-y-4">
          <input
            type="text"
            placeholder="Expense Name"
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            placeholder="Amount"
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addExpense}
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Add Expense
          </button>
        </div>

        <div className="mb-6 text-gray-600">
          <h2 className="text-lg font-medium">
            Total Expenses: {expenseCount}
          </h2>
          <h2 className="text-lg font-medium">
            Total Cost: ${totalCost.toFixed(2)}
          </h2>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Expense List
        </h2>
        <ul className="space-y-4">
          {expenses.map((expense) => (
            <li
              key={expense.id}
              className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm"
            >
              <div>
                <p className="text-black">
                  <span className="font-bold">Name:</span> {expense.name}
                </p>
                <p className="text-black">
                  <span className="font-bold">Cost:</span> $
                  {expense.amount.toFixed(2)}
                </p>
              </div>
              <button
                onClick={() => removeExpense(expense.id)}
                className="text-red-500 hover:text-red-600 transition duration-200 focus:outline-none"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
