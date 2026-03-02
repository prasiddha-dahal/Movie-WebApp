import { useState } from "react"
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ onSearch }) => {
    const [input, Setinput] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        Setinput(value);
        onSearch(value);
    }

    return (
        <nav className="flex justify-between items-center p-6 bg-slate-300 dark:bg-slate-900">
            <h1 className="text-2xl font-bold dark:text-white">MovieApp</h1>
            <input type="text"
                    placeholder="Search Movies..."
                    value={input}
                    onChange={handleChange}
                    className="rounded-xl px-4 py-2 w-1/3 bg-white outline-none text-slate-900 dark:bg-slate-700 dark:text-white"
            />
            <ThemeToggle />
        </nav>
    )
}

export default Navbar 
