import { useState } from "react";
import "./App.css";
import Comp1 from "./components/Comp1";

function App() {
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
    <>
      <div>
      <label>Enter the number : </label>
      <input
        type="number"
        value={number}
        onChange={handleNumberChange}
        className="w-14 border border-gray-500 rounded-md"
      />
      </div>
      <Comp1 detail={user} number={number} />
    </>
  );
}

export default App;
