import axios from "axios";
axios.defaults.baseURL = `https://api.themoviedb.org`;

export const getTrendingMovies = async () => {
  const res = await axios.get("/3/trending/movie/day?language=en-US", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTBjNDhkZmI2MTE0MDZmOTcyZTljNDFjOGE3OGEzNCIsIm5iZiI6MTcyMjAwNTY3My4wMDUxNjcsInN1YiI6IjY2OWI3ODcwOWE0MzllMmY4MThiOTg3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DOEDSxYm6gI8nVFtmdn01MPmtWJHNfuJ-28rE28ClkA",
    },
  });

  return res.data;
};

// axios
//   .get(url, options)
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
