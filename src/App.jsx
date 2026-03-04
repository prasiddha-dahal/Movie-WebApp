import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Homepage from "./pages/Homepage"
import MovieDetails from "./pages/MovieDetails"

function App() {
    const [movies , setMovies] = useState([]);
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);

    const API_KEY = import.meta.env.VITE_TMDB_KEY;

    useEffect(()=>{
        if(query){
            fetchSearchMovies(query, page);
        }else{
            fetchPopularMovies(page);
        }
          window.scrollTo({ top: 0, behavior: "smooth" });
    },[query,page])

    const fetchPopularMovies = async(pageNumber = 1) => {
        try{
        const res = await fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${pageNumber}`
        );
        const data = await res.json();
        console.log(data);
        
        setMovies(data.results);
        }catch(err){
            console.log("error fetching popular movies")
        }
    };

    const fetchSearchMovies = async(searchTerm, pageNumber = 1) => {
        try{
        const res = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&page=${pageNumber}`
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
                <Route path="/" element={<Homepage movies={movies} page={page} setPage={setPage} />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
            </Routes>
        </div>
    )
}

export default App;
