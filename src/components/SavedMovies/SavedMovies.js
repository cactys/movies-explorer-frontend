import { useEffect, useState } from 'react';
import { MESSAGE } from '../../utils/constants';
import { filterSearchMovie, filterShortCheckbox } from '../../utils/utils';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesNotFound from '../MoviesNotFound/MoviesNotFound';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

const SavedMovies = ({ savedMovies, onDeleteMovie, windowWidth }) => {
  const { notFound } = MESSAGE;
  const [errorMessage, setErrorMessage] = useState('');
  const [filterMovies, setFilterMovies] = useState(savedMovies);
  const [searchMovies, setSearchMovies] = useState(filterMovies);
  const [filterCheckbox, setFilterCheckbox] = useState(false);
  const [moviesNotFound, setMoviesNotFound] = useState(false);
  const [isQueryValid, setIsQueryValid] = useState(false);

  const handleSearchSubmit = (input) => {
    const moviesList = filterSearchMovie(savedMovies, input, filterCheckbox);

    if (moviesList.length === 0) {
      setErrorMessage('Ничего не найдено');
      setMoviesNotFound(true);
    } else {
      setErrorMessage('');
      setMoviesNotFound(false);
    }

    setSearchMovies(moviesList);
    setFilterMovies(
      filterCheckbox ? filterShortCheckbox(moviesList) : moviesList
    );
  };

  const handleShortFilter = () => {
    if (!filterCheckbox) {
      setFilterCheckbox(true);
      setFilterMovies(filterShortCheckbox(filterMovies));
      if (filterShortCheckbox(filterMovies).length === 0) {
        setErrorMessage(notFound);
        setMoviesNotFound(true);
      } else {
        setErrorMessage('');
        setMoviesNotFound(false);
      }
    } else {
      setFilterCheckbox(false);
      setFilterMovies(searchMovies);
      if (searchMovies.length === 0) {
        setErrorMessage(notFound);
        setMoviesNotFound(true);
      } else {
        setErrorMessage('');
        setMoviesNotFound(false);
      }
    }
  };

  useEffect(() => {
    setFilterMovies(filterMovies);

    if (filterCheckbox) {
      setFilterCheckbox(filterCheckbox);
      setFilterMovies(filterShortCheckbox(filterMovies));
      if (filterShortCheckbox(filterMovies).length === 0) {
        setErrorMessage(notFound);
        setMoviesNotFound(true);
      } else {
        setErrorMessage('');
        setMoviesNotFound(false);
      }
    } else {
      setFilterCheckbox(filterCheckbox);
      setFilterMovies(filterMovies);
      if (filterMovies.length === 0) {
        setErrorMessage(notFound);
        setMoviesNotFound(true);
      } else {
        setErrorMessage('');
        setMoviesNotFound(false);
      }
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
          filterMovies={filterMovies}
          savedMovies={savedMovies}
          onDeleteMovie={onDeleteMovie}
          errorMessage={errorMessage}
          windowWidth={windowWidth}
          isQueryValid={isQueryValid}
          setIsQueryValid={setIsQueryValid}
        />
      ) : (
        <MoviesNotFound errorMessage={errorMessage} />
      )}
    </main>
  );
};

export default SavedMovies;
