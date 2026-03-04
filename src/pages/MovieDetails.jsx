import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieDetails = () => {
    const [movieDetail, setMovieDetail] = useState(null);
    const { id } = useParams(); // Get movie ID from URL
    const navigate = useNavigate();
    const [trailerKey, setTrailerKey] = useState("");
    const [loading, setLoading] = useState(true);
    const API_KEY = import.meta.env.VITE_TMDB_KEY;

    useEffect(() => {

        const fetchMovieData = async () => {
            try {
                const detailResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
                const detailData = await detailResponse.json();
                console.log("movie data:", detailData);
                setMovieDetail(detailData)

                const videoResponse = await fetch(
                    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`
                );
                const videoData = await videoResponse.json();
                console.log("Video data:", videoData);

                // Find YouTube trailer
                const trailer = videoData.results.find(
                    (v) => v.type === "Trailer" && v.site === "YouTube"
                );

                if (trailer) {
                    setTrailerKey(trailer.key);
                }
            } catch (err) {
                console.log("Error fetching movie data:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchMovieData();
    }, [id]);

    return (
        <div className="bg-slate-300 dark:bg-slate-700 min-h-screen flex flex-col items-center justify-center p-4">
            <button
                onClick={() => navigate(-1)}
                className="mb-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
                Back
            </button>

            {movieDetail && (
                <div className="flex flex-col gap-5 dark:text-white w-1/2 border-t-4 border-t-red-800 border-b-4 border-b-red-800 m-6">
                    <p className="text-4xl font-extrabold shadow-black text-center ">{movieDetail.title}</p>
                    <p>{movieDetail.overview}</p>
                    <p className="font-semibold">Release Date: {movieDetail.release_date}</p>
                    <p className="font-semibold mb"> Rating : <span className="text-yellow-800 dark:text-yellow-500">
                        {movieDetail.vote_average}
                    </span></p>
                </div>
            )}

            {loading && (<>
                <div className="w-16 h-16 rounded-full border-4 border-white border-t-transparent animate-spin">
                </div>
                <p className="text-white mt-4 text-lg">Loading trailer...</p>
            </>
            )}

            {trailerKey ? (
                <iframe
                    width="100%"
                    height="600"
                    src={`https://www.youtube.com/embed/${trailerKey}`}
                    allowFullScreen
                    title="Movie Trailer"
                    className="max-w-4xl"
                ></iframe>
            ) : (
                !loading && (
                    <p className="text-white text-xl">
                        Trailer not available for this movie
                    </p>
                )
            )}
        </div>
    );
};

export default MovieDetails;
