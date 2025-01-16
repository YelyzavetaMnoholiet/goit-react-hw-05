import { Field, Form, Formik } from "formik";
import { useSearchParams } from "react-router-dom";
import { fetchMovieList } from "../../TMD-api.js";
import { lazy, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
const MovieList = lazy(() => import("../../components/MovieList/MovieList"));

import s from "./MoviesPage.module.css";

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const onSubmit = (values) => {
    handleChangeQuery(values.query);
  };

  const handleChangeQuery = (newQuery) => {
    if (!newQuery) {
      searchParams.delete("query");
      return setSearchParams(searchParams);
    }
    searchParams.set("query", newQuery);
    setSearchParams(searchParams);
  };

  const query = searchParams.get("query") || "";

  useEffect(() => {
    if (!query) {
      setData([]);
      return;
    }

    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchMovieList(query);
        setData(data);
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong. Please try again later.</p>;

  return (
    <div>
      <div className={s.formContainer}>
        <Formik initialValues={{ query }} onSubmit={onSubmit}>
          <Form className={s.form}>
            <Field
              className={s.field}
              type="text"
              name="query"
              placeholder="Enter movie name"
            />
            <button className={s.button} type="submit">
              <CiSearch />
            </button>
          </Form>
        </Formik>
      </div>
      <MovieList movies={data} />
    </div>
  );
}
