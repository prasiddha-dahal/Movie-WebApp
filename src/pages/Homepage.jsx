import MovieGrid from "../components/MovieGrid";

const Homepage = ({ movies }) => {
  return (
    <main className="flex-1 min-h-screen bg-slate-50 dark:bg-slate-700 transition-colors duration-300">
      <section className="p-6">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
          Welcome to MovieApp
        </h1>
        <p className="text-slate-600 dark:text-slate-300 mb-6">
          Browse popular movies or search your favorites!
        </p>
      </section>

      <MovieGrid movies={movies} />
    </main>
  );
};

export default Homepage;
