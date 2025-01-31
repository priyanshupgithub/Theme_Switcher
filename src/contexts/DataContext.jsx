import { createContext } from "react";
import { useState } from "react";

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const user = {
    name: "Priyanshu",
    age: 34,
    gender: "Male",
  };

  const [number, setNumber] = useState(0);

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };
  return (
    <DataContext.Provider
      value={{ user, number, setNumber, handleNumberChange }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };
