import { Link, useLocation } from 'react-router-dom';
import { MovieItemStyled } from './MovieItem.styled';

export function MovieItem({ movie }) {
  const location = useLocation();
  return (
    <MovieItemStyled>
      <Link to={`/movies/${movie.id}`} state={{ from: location }}>
        {movie.title}
      </Link>
    </MovieItemStyled>
  );
}
