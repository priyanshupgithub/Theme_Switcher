import React, { useContext } from "react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
  const { theme, setTheme, handleTheme } = useContext(ThemeContext);

  const isLight = theme === "light";
  const navClass = `${
    isLight ? "bg-gray-300" : "bg-black text-white border-b border-gray-100"
  } flex justify-between px-4`;
  const liClass = `${
    isLight ? "hover:text-gray-600" : "hover:text-gray-300"
  } font-bold cursor-pointer text-md hover:scale-110  duration-150`;

  return (
    <>
      <div className={navClass}>
        <ul className="flex space-x-10 p-4">
          {["Home", "About", "Careers", "Contact Us"].map((item, index) => (
            <li key={index} className={liClass}>
              {item}
            </li>
          ))}
        </ul>

        <button className="text-3xl pr-3" onClick={handleTheme}>
          {theme === "light" ? <MdDarkMode /> : <CiLight />}
        </button>
      </div>
    </>
  );
};

export default Navbar;
