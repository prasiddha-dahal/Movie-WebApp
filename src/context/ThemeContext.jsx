import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("Theme");
        return savedTheme ? savedTheme : "light";
    });

    useEffect(() => {
        localStorage.setItem("Theme", theme);
        document.documentElement.classList.remove("light","dark");
        document.documentElement.classList.add(theme);
    }, [theme])

    const toggleTheme = () => {
        setTheme((prev)=>(prev === "light" ? "dark" : "light"));
    };

    return(
        <ThemeContext.Provider value ={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
