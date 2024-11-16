import { useState } from "react";

type Props = {
  onAddExpense: (expense: { name: string; cost: number }) => void;
  isLoggedIn: boolean;
  onLogin: (username: string) => void;
  onLogout: () => void;
};

const AddExpenseForm = ({
  onAddExpense,
  isLoggedIn,
  onLogin,
  onLogout,
}: Props) => {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [username, setUsername] = useState("");
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (name && cost) {
      onAddExpense({ name, cost: parseFloat(cost) });
      setName("");
      setCost("");
    }
  };

  const handleLogin = () => {
    if (username.trim() !== "") {
      onLogin(username);
      setIsLoginFormVisible(false);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-md mx-auto text-center transition-all duration-300 ease-in-out">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-100 mb-6 transition-colors duration-300 ease-in-out">
          {isLoginFormVisible ? "Log In" : "Please Log In to Add an Expense"}
        </h2>

        {isLoginFormVisible ? (
          <>
            <input
              type="text"
              className="p-2 rounded mb-2 w-full text-black dark:text-white dark:bg-gray-700 border dark:border-gray-600"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button
              onClick={handleLogin}
              className="w-full px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded-full hover:bg-blue-600 dark:hover:bg-blue-700"
            >
              Log In
            </button>
          </>
        ) : (
          <button
            onClick={() => setIsLoginFormVisible(true)}
            className="w-full px-4 py-2 bg-blue-500 dark:bg-blue-600 text-white rounded-full hover:bg-blue-600 dark:hover:bg-blue-700"
          >
            Log In
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={onLogout}
        className="absolute top-4 right-10 px-4 py-2 bg-red-500 dark:bg-red-600 text-white rounded-full hover:bg-red-600 dark:hover:bg-red-700"
      >
        Logout
      </button>

      <form
        onSubmit={handleSubmit}
        className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-md mx-auto transition-all duration-300 ease-in-out"
      >
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-100 mb-6 transition-colors duration-300 ease-in-out">
          Add New Expense
        </h2>

        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-gray-600 dark:text-gray-300 font-medium mb-2 transition-colors duration-300 ease-in-out"
          >
            Expense Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 placeholder-gray-400 dark:placeholder-gray-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-all duration-300 ease-in-out"
            placeholder="e.g., Groceries, Rent"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="cost"
            className="block text-gray-600 dark:text-gray-300 font-medium mb-2 transition-colors duration-300 ease-in-out"
          >
            Cost ($)
          </label>
          <input
            type="number"
            id="cost"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 placeholder-gray-400 dark:placeholder-gray-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-all duration-300 ease-in-out"
            placeholder="e.g., 50.00"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 dark:bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 dark:hover:bg-blue-600 focus:bg-blue-700 dark:focus:bg-blue-500 transition-all duration-300 ease-in-out"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default AddExpenseForm;
