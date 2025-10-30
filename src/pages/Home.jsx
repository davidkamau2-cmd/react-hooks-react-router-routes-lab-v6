import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then(r => r.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {movies.map(movie => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <a href={`/movie/${movie.id}`}>View Info</a>
          </div>
        ))}
      </main>
    </>
  );
};

export default Home;
