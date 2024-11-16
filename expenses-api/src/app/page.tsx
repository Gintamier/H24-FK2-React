"use client";
import React, { useEffect, useState } from "react";
import { Expense, ExpenseWithoutId } from "@/types";
import { createExpense, deleteExpense, getExpenses } from "@/app/services/api";
import ExpenseList from "@/components/ExpenseList";
import AddExpenseForm from "@/components/AddExpenseForm";
import DarkModeToggle from "@/components/Darkmode";

export default function Home() {
  const [expenses, setExpenses] = useState<Array<Expense>>([]);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

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

  const handleLogin = (username: string) => {
    console.log(`User logged in: ${username}`);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    console.log("User logged out");
    setIsLoggedIn(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-background text-foreground transition-all duration-300 ease-in-out relative">
      <h1 className="text-3xl font-bold text-blue-500 mb-8 transition-colors duration-300 ease-in-out">
        Expense Tracker
      </h1>
      <div className="w-full max-w-lg">
        <AddExpenseForm
          onAddExpense={handleAddExpense}
          isLoggedIn={isLoggedIn}
          onLogin={handleLogin}
          onLogout={handleLogout}
        />
        <ExpenseList
          expenses={expenses}
          onDelete={handleDeleteExpense}
          isLoggedIn={isLoggedIn}
        />
      </div>
      <div className="absolute top-4 right-4 flex space-x-4">
        <DarkModeToggle />
      </div>
    </div>
  );
}
