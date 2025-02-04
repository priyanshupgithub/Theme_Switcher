import { useContext, useState } from "react";
import "./App.css";
import Comp1 from "./components/Comp1";
import { DataContext } from "./contexts/DataContext";
import Navbar from "./components/Navbar";
import { ThemeContext, ThemeContextProvider } from "./contexts/ThemeContext";

function App() {
  // const { number, handleNumberChange } = useContext(DataContext);
  const { theme } = useContext(ThemeContext);
  const BodyClass = `${
    theme !== "light" ? "bg-black text-white" : ""
  } h-screen flex justify-center items-center`;
  return (
    // <>
    // <div className="font-bold m-4 bg-gray-300 p-3"> Using the useContext Api </div>
    //     <div>
    //       <label>Enter the number : </label>
    //       <input
    //         type="number"
    //         value={number}
    //         onChange={handleNumberChange}
    //         className="w-14 border border-gray-500 rounded-md"
    //       />
    //     </div>
    //     <Comp1  />
    // </>

    <>
      <Navbar />
      <div className={BodyClass}>Theme Swither application</div>
    </>
  );
}

export default App;
