import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeContextProvider = ({children}) =>{
    const [theme , setTheme] = useState("light");

    const handleTheme = () =>{
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
      }
    return (
        <ThemeContext.Provider value={{theme, setTheme, handleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export {ThemeContext, ThemeContextProvider};