import MovieCard from "./MovieCard"

const MovieGrid = ({ movies }) => {
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-6 p-6">
            {movies.map( (movie)=>{
                <MovieCard key={movie.id} movie={movie} />
            })}
        </div>
    )
}

export default MovieGrid

