import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams(); // Get movie ID from URL
  const navigate = useNavigate();
  const [trailerKey, setTrailerKey] = useState("");
  const [loading, setLoading] = useState(true);
  const API_KEY = import.meta.env.VITE_TMDB_KEY;

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`
        );
        const data = await res.json();
        console.log("Video data:", data);

        // Find YouTube trailer
        const trailer = data.results.find(
          (v) => v.type === "Trailer" && v.site === "YouTube"
        );

        if (trailer) {
          setTrailerKey(trailer.key);
        }
      } catch (err) {
        console.log("Error fetching trailer:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrailer();
  }, [id]);

  return (
    <div className="bg-slate-300 min-h-screen flex flex-col items-center justify-center p-4">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        ← Back
      </button>

      {loading && <p className="text-white text-xl">Loading trailer...</p>}

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
