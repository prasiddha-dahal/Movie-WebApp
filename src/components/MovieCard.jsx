import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {

    const navigate = useNavigate();

    const handlePlayTrailer = () => {
        navigate(`/movie/${movie.id}`);
    };

    return (
        <div className="bg-white dark:bg-slate-700 rounded-lg shadow-md overflow-hidden transition-colors duration-300 hover:scale-100">
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-64 object-cover"
            />
            <div>
                <p className="text-lg font-bold text-slate-900 dark:text-white">
                    {movie.title}
                </p>
                <p className="text-slate-500 dark:text-slate-200">
                    {movie.vote_average || "N/A"}
                </p>
            </div>

            <div className="flex justify-center">
                <button
                    onClick={handlePlayTrailer}
                    className="  p-3 rounded-xl text-white bg-slate-500 hover:bg-slate-600 m-3 dark:bg-slate-900 dark:hover:bg-slate-800 "
                >
                    Play Trailor
                </button>
            </div>
        </div>
    );
};

export default MovieCard;
