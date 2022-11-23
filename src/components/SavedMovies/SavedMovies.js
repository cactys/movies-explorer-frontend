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
  const [displayMovies, setDisplayMovies] = useState(savedMovies);
  const [searchMovies, setSearchMovies] = useState(displayMovies);
  const [filterCheckbox, setFilterCheckbox] = useState(false);
  const [moviesNotFound, setMoviesNotFound] = useState(false);

  const handleSearchSubmit = (input) => {
    const moviesList = filterSearchMovie(savedMovies, input, filterCheckbox);

    if (filterShortCheckbox(moviesList).length === 0) {
      setErrorMessage(notFound);
      setMoviesNotFound(true);
    } else {
      setMoviesNotFound(false);
    }
    if (moviesList.length === 0) {
      setErrorMessage(notFound);
      setMoviesNotFound(true);
    } else {
      setMoviesNotFound(false);
    }

    setDisplayMovies(
      filterCheckbox ? filterShortCheckbox(moviesList) : moviesList
    );
  };

  const handleShortFilter = () => {
    if (!filterCheckbox) {
      setFilterCheckbox(true);
      setDisplayMovies(filterShortCheckbox(searchMovies));
      if (filterShortCheckbox(searchMovies).length === 0) {
        setErrorMessage(notFound);
        setMoviesNotFound(true);
      } else {
        setErrorMessage('');
        setMoviesNotFound(false);
      }
    } else {
      setFilterCheckbox(false);
      setDisplayMovies(searchMovies);
      if (searchMovies.length === 0) {
        setErrorMessage(notFound);
        setMoviesNotFound(true);
      } else {
        setMoviesNotFound(false);
      }
    }
  };

  useEffect(() => {
    if (filterCheckbox) {
      setFilterCheckbox(true);
      setDisplayMovies(filterShortCheckbox(savedMovies));
    } else {
      setFilterCheckbox(false);
      setDisplayMovies(savedMovies);
    }
  }, [filterCheckbox, savedMovies]);

  useEffect(() => {
    setSearchMovies(displayMovies);

    if (displayMovies.length === 0 || savedMovies.length === 0) {
      setErrorMessage(notFound);
      setMoviesNotFound(true);
    } else {
      setMoviesNotFound(false);
    }
  }, [notFound, displayMovies, savedMovies.length]);

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
          displayMovies={displayMovies}
          savedMovies={savedMovies}
          onDeleteMovie={onDeleteMovie}
          errorMessage={errorMessage}
          windowWidth={windowWidth}
        />
      ) : (
        <MoviesNotFound errorMessage={errorMessage} />
      )}
    </main>
  );
};

export default SavedMovies;
