const MovieCard = ({movie}) => {
    return (
        <div className="bg-white dark:bg-slate-700 rounded-lg shadow-md overflow-hidden transition-colors duration-500 hover:scale-100">
           <img 
                src={movie.poster}
                alt={movie.title} 
                className="w-full h-64 object-cover"
                />  
            <div>
                <p className="text-lg font-bold text-slate-900 dark:text-white">
                    {movie.title}
                </p>
                <p className="text-slate-500 dark:text-slate-200">
                    {movie.rating || "N/A"}
                </p>
            </div>
        </div>
    )
}

export default MovieCard
