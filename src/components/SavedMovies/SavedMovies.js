import { useEffect, useState } from 'react';
import { filterSearchMovie, filterShortCheckbox } from '../../utils/utils';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesNotFound from '../MoviesNotFound/MoviesNotFound';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

const SavedMovies = ({ savedMovies, onDeleteMovie }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [searchMovies, setSearchMovies] = useState(savedMovies);
  const [shortFilter, setShortFilter] = useState(searchMovies);
  const [filterCheckbox, setFilterCheckbox] = useState(false);
  const [moviesNotFound, setMoviesNotFound] = useState(false);

  const handleSearchSubmit = (input) => {
    const moviesList = filterSearchMovie(savedMovies, input, filterCheckbox);

    console.log(input);

    if (moviesList.length === 0) {
      setErrorMessage('Ничего не найдено');
      setMoviesNotFound(true);
    } else {
      setErrorMessage('');
      setMoviesNotFound(false);
    }

    setSearchMovies(moviesList);
    setShortFilter(
      filterCheckbox ? filterShortCheckbox(moviesList) : moviesList
    );
  };

  const handleShortFilter = () => {
    if (!filterCheckbox) {
      setFilterCheckbox(true);
      setShortFilter(filterShortCheckbox(shortFilter));
      if (filterShortCheckbox(shortFilter).length === 0) {
        setErrorMessage('Ничего не найдено');
        setMoviesNotFound(true);
      } else {
        setErrorMessage('');
        setMoviesNotFound(false);
      }
    } else {
      setFilterCheckbox(false);
      setShortFilter(searchMovies);
      if (searchMovies.length === 0) {
        setErrorMessage('Ничего не найдено');
        setMoviesNotFound(true);
      } else {
        setErrorMessage('');
        setMoviesNotFound(false);
      }
    }
  };

  useEffect(() => {
    setShortFilter(savedMovies);

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
          shortFilter={shortFilter}
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
