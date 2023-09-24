import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  SearchForm,
  SearchFormButton,
  ButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

export const Searchbar = () => {
  const [, setSearchParams] = useSearchParams();

  const handlerSubmit = e => {
    e.preventDefault();
    setSearchParams({});
    if (e.target.movie.value === '') {
      toast.warning('Enter a value in the search bar');
      return;
    }
    setSearchParams({ q: e.target.movie.value });
  };

  return (
    <SearchForm onSubmit={handlerSubmit}>
      <SearchFormButton type="submit">
        <ButtonLabel>Search</ButtonLabel>
      </SearchFormButton>
      <SearchFormInput type="text" name="movie" placeholder="Search movie" />
    </SearchForm>
  );
};
