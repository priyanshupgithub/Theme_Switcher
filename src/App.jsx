import { useContext, useState } from "react";
import "./App.css";
import Comp1 from "./components/Comp1";
import { DataContext } from "./contexts/DataContext";

function App() {
  const { number, handleNumberChange } = useContext(DataContext);

  return (
    <>
    <div className="font-bold m-4 bg-gray-300 p-3"> Using the useContext Api </div>
        <div>
          <label>Enter the number : </label>
          <input
            type="number"
            value={number}
            onChange={handleNumberChange}
            className="w-14 border border-gray-500 rounded-md"
          />
        </div>
        <Comp1  />
    </>
  );
}

export default App;
