import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

export default function MovieList({ movies }) {
  const location = useLocation();
  return (
    <div>
      <ul className={s.movieList}>
        {movies.map((movie) => (
          <li key={movie.id}>
            <div className={s.movieContainer}>
              <Link
                className={s.movieName}
                to={`/movies/${movie.id.toString()}`}
                state={location}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  width={300}
                />
                <p className={s.movieName}>{movie.title}</p>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
