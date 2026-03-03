import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div
            onClick={toggleTheme}
            className=" w-14 h-8 flex items-center bg-slate-500 dark:bg-slate-300 rounded-full p-1 cursor-pointer transition-colors duration-300"

        >
            <div
                className={`bg-white dark:bg-slate-900 w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
                    theme === "dark" ? "translate-x-6" : "translate-x-0"
                }`}
            />
        </div>
    );
};

export default ThemeToggle;
