import React, { useContext } from "react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
  const { theme, setTheme , handleTheme} = useContext(ThemeContext);
 
  return (
    <>
      <div className={theme === "light"? ( "bg-gray-300 flex justify-between px-4"): ("bg-black text-white flex justify-between px-4 border-b border-gray-100")}  >
        <ul className="flex space-x-10 p-4">
          <li className={theme==="light"? ("font-bold cursor-pointer text-md hover:scale-110 hover:text-gray-600 duration-150"): "font-bold cursor-pointer text-md hover:scale-110 hover:text-gray-300 duration-150"}>
            Home
          </li>
          <li className={theme==="light"? ("font-bold cursor-pointer text-md hover:scale-110 hover:text-gray-600 duration-150"): "font-bold cursor-pointer text-md hover:scale-110 hover:text-gray-300 duration-150"}>
            About
          </li>
          <li className={theme==="light"? ("font-bold cursor-pointer text-md hover:scale-110 hover:text-gray-600 duration-150"): "font-bold cursor-pointer text-md hover:scale-110 hover:text-gray-300 duration-150"}>
            Careers
          </li>
          <li className={theme==="light"? ("font-bold cursor-pointer text-md hover:scale-110 hover:text-gray-600 duration-150"): "font-bold cursor-pointer text-md hover:scale-110 hover:text-gray-300 duration-150"}>
            Contact Us
          </li>
        </ul>

        <button className="text-3xl pr-3"
            onClick={handleTheme}
        >
          {theme === "light" ? <MdDarkMode /> : <CiLight />}
        </button>
      </div>
    </>
  );
};

export default Navbar;
