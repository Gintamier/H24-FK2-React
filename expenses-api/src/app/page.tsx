"use client";
import React, { useEffect, useState } from "react";
import { Expense, ExpenseWithoutId } from "@/types";
import { createExpense, deleteExpense, getExpenses } from "@/app/services/api";
import ExpenseList from "@/components/ExpenseList";
import AddExpenseForm from "@/components/AddExpenseForm";

export default function Home() {
  const [expenses, setExpenses] = useState<Array<Expense>>([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const data = await getExpenses();
        setExpenses(data);
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };

    fetchExpenses();
  }, []);

  const handleAddExpense = async (expense: ExpenseWithoutId) => {
    try {
      const response = await createExpense(expense);
      setExpenses([...expenses, response.expense]);
    } catch (error) {
      console.error("Error adding expense:", error);
    }
  };

  const handleDeleteExpense = async (id: Expense["id"]) => {
    try {
      await deleteExpense(id);
      setExpenses(expenses.filter((expense) => expense.id !== id));
    } catch (error) {
      console.error("Error deleting expense:", error);
    }
  };

  return (
    <div className=" min-h-screen flex flex-col items-center bg-gray-500">
      <h1 className="text-3xl font-bold text-blue-500 mb-8">Expense Tracker</h1>
      <div className="w-full max-w-lg ">
        <AddExpenseForm onAddExpense={handleAddExpense} />
        <ExpenseList expenses={expenses} onDelete={handleDeleteExpense} />
      </div>
    </div>
  );
}
