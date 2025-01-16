import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
// const API_KEY = "c147a8a9d9e5d8ef23516b94b8d46785";
const API_KEY = "dce1ef1ad6dc372e447ecd046a0dd920";

// Отримання трендових фільмів
export async function fetchHomeList() {
  const { data } = await axios.get("/trending/movie/week", {
    params: { api_key: API_KEY },
  });
  return data.results || [];
}

// Пошук фільмів за запитом
export async function fetchMovieList(query) {
  const { data } = await axios.get("/search/movie", {
    params: { api_key: API_KEY, query },
  });
  return data.results;
}

// Отримання деталей фільму
export async function fetchMovieDetails(moviesId) {
  const { data } = await axios.get(`/movie/${moviesId}`, {
    params: { api_key: API_KEY },
  });
  return data;
}

// Отримання акторського складу фільму
export async function fetchMovieCredits(moviesId) {
  const { data } = await axios.get(`/movie/${moviesId}/credits`, {
    params: { api_key: API_KEY },
  });
  return data.cast;
}

// Отримання відгуків на фільм
export async function fetchMovieReviews(moviesId) {
  try {
    const { data } = await axios.get(`/movie/${moviesId}/reviews`, {
      params: { api_key: API_KEY },
    });
    console.log("Reviews API Response:", data); // Додайте логування
    return data.results;
  } catch (error) {
    console.error("Помилка у fetchMovieReviews:", error.message);
    throw error;
  }
}
