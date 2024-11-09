export type Expense = {
  id: number;
  cost: number;
  name: string;
};

export type ExpenseWithoutId = Omit<Expense, "id">;
