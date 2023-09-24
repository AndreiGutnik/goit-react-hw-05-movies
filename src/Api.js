import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common.Authorization =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODkwOTU0MWQ1MjM2ZGRhNDNmOWVhNGI5N2VlZDA1NCIsInN1YiI6IjY1MDA0MWFmZTBjYTdmMDBjYmVhN2YxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KMhjiI3nUTqduooQ-82TXACriU726sX4ViPAF8iUjDs';
axios.defaults.headers.common.accept = 'application/json';
axios.defaults.params = {
  language: 'en-US',
};

const END_POINT = {
  tranding: '/trending/movie/day',
  movieById: '/movie/',
  searchMovie: 'search/movie',
};

export async function getTrending({ signal }) {
  const { data } = await axios.get(END_POINT.tranding, { signal });
  return data.results;
}

export async function getMovieById(movieId, { signal }) {
  const { data } = await axios.get(`${END_POINT.movieById}${movieId}`, {
    signal,
  });
  return data;
}

export async function getMovieCast(movieId, { signal }) {
  const { data } = await axios.get(`${END_POINT.movieById}${movieId}/credits`, {
    signal,
  });
  return data;
}

export async function getMovieReviews(movieId, { signal }) {
  const { data } = await axios.get(`${END_POINT.movieById}${movieId}/reviews`, {
    signal,
  });
  return data;
}

export async function getSearchMovies(query, { signal }) {
  const params = {
    query: query,
    include_adult: 'false',
    page: '1',
  };
  const { data } = await axios.get(END_POINT.searchMovie, {
    params,
    signal,
  });
  return data.results;
}
