import { useEffect, useState } from "react";
import { fetchMovieCredits } from "../../TMD-api.js";
import { useParams } from "react-router-dom";
import s from "./MovieCast.module.css";

export default function MovieCast() {
  const { moviesId } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const castData = await fetchMovieCredits(moviesId);
        setData(castData || []);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [moviesId]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong. Please try again later.</p>;

  return (
    <div>
      {data.length > 0 ? (
        <ul className={s.castList}>
          {data?.map((actor) => (
            <li key={actor.id}>
              <div className={s.castContainer}>
                {actor.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                    alt={actor.name}
                    width={200}
                  />
                ) : (
                  <img
                    src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXz1YFJOTtiJChKhwGzdxGboS_rtgQhlLskA&s`}
                    alt={actor.name}
                    width={200}
                  />
                )}
                <p className={s.castName}>{actor.name}</p>
                <p className={s.castName}>{actor.character}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No information about cast</p>
      )}
    </div>
  );
}
