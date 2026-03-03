import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Homepage from "./pages/Homepage"
import MovieDetails from "./pages/MovieDetails"

function App() {
    const [movies , setMovies] = useState([]);
    const [query, setQuery] = useState("");

    const API_KEY = import.meta.env.VITE_TMDB_KEY;

    useEffect(()=>{
        fetchPopularMovies();
    },[]);

    useEffect(()=>{
        if(query){
            fetchSearchMovies(query);
        }
    },[query]);

    const fetchPopularMovies = async() => {
        try{
        const res = await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        );
        const data = await res.json();
        console.log(data.results);
        
        setMovies(data.results);
        }catch(err){
            console.log("error fetching popular movies")
        }
    };

    const fetchSearchMovies = async(searchTerm) => {
        try{
        const res = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`
        );
        const data = await res.json();
        setMovies(data.results);
        }catch(err){
            console.log("error fetching serched movies")
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar onSearch={setQuery} />
            <Routes>
                <Route path="/" element={<Homepage movies={movies} />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
            </Routes>
        </div>
    )
}

export default App;
