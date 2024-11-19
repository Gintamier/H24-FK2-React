import { Expense, ExpenseWithoutId } from "@/types";

const API_URL = "http://localhost:3001";

export const getExpenses = async () => {
  const response = await fetch(`${API_URL}/api/expenses`);
  if (!response.ok) {
    throw new Error("Failed to fetch expenses");
  }
  return response.json();
};

export const deleteExpense = async (id: Expense["id"]) => {
  const response = await fetch(`${API_URL}/api/expense/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch expenses");
  }
  return response.json();
};

type CreateExpenseResponse = {
  expense: Expense;
  success: boolean;
};

export const createExpense = async (
  expense: ExpenseWithoutId
): Promise<CreateExpenseResponse> => {
  const response = await fetch(`${API_URL}/api/create-expense`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(expense),
  });
  if (!response.ok) {
    throw new Error("Failed to fetch expenses");
  }
  return response.json();
};