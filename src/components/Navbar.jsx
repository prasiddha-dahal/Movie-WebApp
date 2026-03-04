import { useState } from "react"
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

const Navbar = ({ onSearch }) => {
    const [input, Setinput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(input);
    };

    return (
        <nav className="flex justify-between items-center p-6 bg-slate-300 dark:bg-slate-900">
            <Link to="/" className="text-2xl font-bold dark:text-white tracking-widest">
                FILMhera
            </Link>
            <form className="flex w-1/3" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search Movies..."
                    value={input}
                    onChange={(e) => Setinput(e.target.value)}
                    className="rounded-xl px-4 py-2 w-full bg-white outline-none text-slate-900 dark:bg-slate-700 dark:text-white"
                />
                <button className="ml-2 bg-slate-400 dark:border-white dark:text-white px-4 rounded hover:bg-slate-500 active:scale-95" type="submit">
                    Search
                </button>
            </form>
            <ThemeToggle />
        </nav>
    );
}

export default Navbar 
