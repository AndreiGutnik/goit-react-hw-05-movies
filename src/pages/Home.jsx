import { useState, useEffect, useRef } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { getTrending } from 'Api';
import { Error } from 'components/Error/Error.styled';
import { MoviesList } from 'components/Movies/MoviesList/MoviesList';
import { LayoutStyled } from 'components/Layout/Layout.styled';

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);
  const controllerRef = useRef();

  useEffect(() => {
    if (trendingMovies.length !== 0) {
      return;
    }
    if (controllerRef.current) {
      controllerRef.current.abort();
    }
    controllerRef.current = new AbortController();

    async function getTrendingMovies() {
      try {
        setIsLoader(true);
        setIsError(false);
        const movies = await getTrending(controllerRef.current);
        setTrendingMovies(movies);
      } catch (error) {
        if (error.code !== 'ERR_CANCELED') setIsError(true);
      } finally {
        setIsLoader(false);
      }
    }
    getTrendingMovies();
    return () => {
      controllerRef.current.abort();
    };
  }, [trendingMovies]);

  return (
    <LayoutStyled>
      {!isError && (
        <MoviesList title="Trending movies" movieList={trendingMovies} />
      )}
      {isLoader && (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#3F51B5"
          ariaLabel="three-dots-loading"
          wrapperStyle={{ justifyContent: 'center' }}
          wrapperClassName=""
          visible={true}
        />
      )}
      {isError && !isLoader && (
        <Error>
          <p>OOPS! There was an ERROR!</p>
        </Error>
      )}
    </LayoutStyled>
  );
}