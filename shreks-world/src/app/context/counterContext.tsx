"use client";

import { createContext, useState, ReactNode, useContext } from "react";

interface CounterContextType {
  counter: number;
  incrementCounter: () => void;
}

const CounterContext = createContext<CounterContextType | undefined>(undefined);

interface CounterProviderProps {
  children: ReactNode;
}

export const CounterProvider: React.FC<CounterProviderProps> = ({
  children,
}) => {
  const [counter, setCounter] = useState<number>(0);

  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <CounterContext.Provider value={{ counter, incrementCounter }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  return context;
};
