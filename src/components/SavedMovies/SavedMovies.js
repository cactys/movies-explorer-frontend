import { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { filterSearchMovie, filterShortCheckbox } from '../../utils/utils';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesNotFound from '../MoviesNotFound/MoviesNotFound';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

const SavedMovies = ({
  savedMovies,
  // checked,
  // setChecked,
  onDeleteMovie,
  // searchMovies,
  // onSearchMovie,
  // onSearch,
  // setOnSearch,
  // moviesNotFound,
}) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [searchMovies, setSearchMovies] = useState(savedMovies);
  const [shortFilter, setShortFilter] = useState(searchMovies);
  const [filterCheckbox, setFilterCheckbox] = useState(false);
  const [moviesNotFound, setMoviesNotFound] = useState(false);

  const currentUser = useContext(CurrentUserContext);

  const handleSearchSubmit = (input) => {
    const moviesList = filterSearchMovie(savedMovies, input, filterCheckbox);

    if (moviesList.length === 0) {
      setErrorMessage('Ничего не найдено');
      setMoviesNotFound(true);
    } else {
      setErrorMessage('');
      setMoviesNotFound(false);

      setSearchMovies(moviesList);
      setShortFilter(moviesList);
    }
  };

  const handleShortFilter = () => {
    if (!filterCheckbox) {
      setFilterCheckbox(true);
      setSearchMovies(filterShortCheckbox(shortFilter));
      if (filterShortCheckbox(shortFilter).length === 0) {
        console.log('ASD');
        setErrorMessage('Ничего не найдено');
        setMoviesNotFound(true);
      } else {
        setErrorMessage('');
        setMoviesNotFound(false);
      }
    } else {
      setFilterCheckbox(true);
      setSearchMovies(shortFilter);
      if (shortFilter.length === 0) {
        setErrorMessage('Ничего не найдено');
        setMoviesNotFound(true);
      } else {
        setErrorMessage('');
        setMoviesNotFound(false);
      }
    }
  };

  useEffect(() => {
    setSearchMovies(savedMovies);
    console.log(savedMovies);
    if (savedMovies.lengh === 0) {
      setErrorMessage('Ничего не найдено');
      setMoviesNotFound(true);
    } else {
      setErrorMessage('');
      setMoviesNotFound(false);
    }
  }, [savedMovies]);

  return (
    <main className="save-movies">
      <section className="save-movies__form">
        <fieldset className="save-movies__set">
          <SearchForm handleSearchSubmit={handleSearchSubmit} />
          <FilterCheckbox
            filterCheckbox={filterCheckbox}
            handleShortFilter={handleShortFilter}
          />
        </fieldset>
      </section>
      {!moviesNotFound ? (
        <MoviesCardList
          filterMovies={searchMovies}
          savedMovies={savedMovies}
          onDeleteMovie={onDeleteMovie}
          errorMessage={errorMessage}
        />
      ) : (
        <MoviesNotFound errorMessage={errorMessage} />
      )}
    </main>
  );
};

export default SavedMovies;
