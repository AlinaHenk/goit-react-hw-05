import axios from "axios";
axios.defaults.baseURL = `https://api.themoviedb.org`;
const tocken =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTBjNDhkZmI2MTE0MDZmOTcyZTljNDFjOGE3OGEzNCIsIm5iZiI6MTcyMjAwNTY3My4wMDUxNjcsInN1YiI6IjY2OWI3ODcwOWE0MzllMmY4MThiOTg3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DOEDSxYm6gI8nVFtmdn01MPmtWJHNfuJ-28rE28ClkA";
export const getTrendingMovies = async () => {
  const res = await axios.get("/3/trending/movie/day?language=en-US", {
    headers: {
      Authorization: tocken,
    },
  });

  return res.data;
};

export const getMovieById = async (movieId) => {
  const res = await axios.get(`/3/movie/${movieId}?language=en-US`, {
    headers: {
      Authorization: tocken,
    },
  });

  return res.data;
};

export const getReviews = async (movieId) => {
  const res = await axios.get(
    `/3/movie/${movieId}/reviews?language=en-US&page=1`,
    {
      headers: {
        Authorization: tocken,
      },
    }
  );

  return res.data;
};

export const getCast = async (movieId) => {
  const res = await axios.get(
    `/3/movie/${movieId}/credits?language=en-US&page=1`,
    {
      headers: {
        Authorization: tocken,
      },
    }
  );

  return res.data;
};

export const getMovies = async (movie) => {
  const res = await axios.get(`/3/search/movie?query=${movie}`, {
    headers: {
      Authorization: tocken,
    },
  });

  return res.data;
};

// axios
//   .get(url, options)
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
