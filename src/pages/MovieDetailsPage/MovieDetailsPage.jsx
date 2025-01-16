import { useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { fetchMovieDetails } from "../../TMD-api.js"; // API usage here
import s from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const location = useLocation();
  const goBackRef = useRef(location.state);
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { moviesId } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const movieData = await fetchMovieDetails(moviesId);
        console.log("Movie Data from API:", movieData); // Логування відповіді API
        setData(movieData); // Зберігаємо дані в state
      } catch (error) {
        console.error(error);
        setIsError(true); // Якщо помилка, встановлюємо isError в true
      } finally {
        setIsLoading(false); // Завершуємо завантаження
      }
    };
    getData(); // Викликаємо асинхронну функцію
  }, [moviesId]); // Запускати, коли moviesId змінюється

  // Виведення повідомлень про стан
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong. Please try again later.</p>;

  return (
    <div>
      <div className={s.btnContainer}>
        <Link className={s.btnBack} to={goBackRef.current}>
          Go Back
        </Link>
      </div>

      <section className={s.movieContainer}>
        <img
          src={
            data.poster_path
              ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
              : "default-image.jpg"
          }
          alt={data.title}
          width={300}
        />
        <div>
          <h2>{data.title}</h2>
          <p>{data.vote_average * 10}%</p>
          <h3>Overview</h3>
          <p>{data.overview}</p>
          <h4>Genres</h4>
          <ul className={s.genresList}>
            {data.genres?.length ? (
              data.genres.map((genre) => (
                <li className={s.genres} key={genre.id}>
                  {genre.name}
                </li>
              ))
            ) : (
              <p>No genres available</p>
            )}
          </ul>
        </div>
      </section>

      <nav className={s.optionNav}>
        <NavLink className={s.movieOptions} to="cast">
          Cast
        </NavLink>
        <NavLink className={s.movieOptions} to="reviews">
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
