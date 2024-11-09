import { Expense } from "@/types";
import React from "react";

type Props = {
  expenses: Expense[];
  onDelete: (id: Expense["id"]) => void;
};

const ExpenseList = ({ expenses, onDelete }: Props) => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold text-gray-700 mb-6">Your Expenses</h2>
      <ul className="space-y-4">
        {expenses.map((expense) => (
          <li
            key={expense.id}
            className="flex justify-between items-center bg-white border border-gray-300 rounded-md p-4 shadow-sm"
          >
            <div className="text-lg text-gray-600">
              <span className="font-semibold text-gray-800">
                {expense.name} -
              </span>
              <span className="ml-1 font-medium text-blue-600">
                ${expense.cost.toFixed(2)}
              </span>
            </div>
            <button
              onClick={() => onDelete(expense.id)}
              className="px-4 py-2 text-sm font-medium text-red-600 border border-red-600 rounded hover:bg-red-500 hover:text-white transition"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
