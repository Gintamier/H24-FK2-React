import { Expense } from "@/types";
import React from "react";

type Props = {
  expenses: Expense[];
  onDelete: (id: Expense["id"]) => void;
  isLoggedIn: boolean;
};

const ExpenseList = ({ expenses, onDelete, isLoggedIn }: Props) => {
  return (
    <div className="mt-10 transition-all duration-300 ease-in-out">
      <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-100 mb-6 transition-colors duration-300 ease-in-out">
        Your Expenses
      </h2>
      <ul className="space-y-4">
        {expenses.map((expense) => (
          <li
            key={expense.id}
            className="flex justify-between items-center bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md p-4 shadow-sm transition-all duration-300 ease-in-out"
          >
            <div className="text-lg text-gray-600 dark:text-gray-300 transition-colors duration-300 ease-in-out">
              <span className="font-semibold text-gray-800 dark:text-gray-100">
                {expense.name} -{" "}
              </span>
              <span className="ml-1 font-medium text-blue-600 dark:text-blue-400">
                ${expense.cost.toFixed(2)}
              </span>
            </div>
            {isLoggedIn && (
              <button
                onClick={() => onDelete(expense.id)}
                className="px-4 py-2 text-sm font-medium text-red-600 dark:text-red-400 border border-red-600 dark:border-red-400 rounded hover:bg-red-500 dark:hover:bg-red-600 hover:text-white dark:hover:text-gray-200 transition-all duration-300 ease-in-out"
              >
                Delete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
