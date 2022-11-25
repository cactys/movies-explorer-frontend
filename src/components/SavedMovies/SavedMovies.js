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
    if (moviesList.length === 0) {
      setMoviesNotFound(true);
      setErrorMessage(notFound);
    } else {
      setMoviesNotFound(false);
      setErrorMessage('');
      if (filterCheckbox) {
        setDisplayMovies(filterShortCheckbox(moviesList));
      } else {
        setDisplayMovies(moviesList);
      }

      setSearchMovies(moviesList);
    }
  };

  const handleShortFilter = () => {
    if (!filterCheckbox) {
      setFilterCheckbox(true);
      setDisplayMovies(filterShortCheckbox(searchMovies));
      if (filterShortCheckbox(searchMovies).length === 0) {
        setMoviesNotFound(true);
        setErrorMessage(notFound);
      } else {
        setMoviesNotFound(false);
        setErrorMessage('');
      }
    } else {
      setFilterCheckbox(false);
      setDisplayMovies(searchMovies);
      if (searchMovies.length === 0) {
        setMoviesNotFound(true);
        setErrorMessage(notFound);
      } else {
        setMoviesNotFound(false);
        setErrorMessage('');
      }
    }
  };

  useEffect(() => {
    if (filterCheckbox) {
      console.log(
        filterCheckbox,
        '1',
        filterShortCheckbox(displayMovies).length
      );
    } else {
      console.log(filterCheckbox, '2', displayMovies.length);
    }
  });

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
    if (displayMovies.length === 0) {
      setMoviesNotFound(true);
      setErrorMessage(notFound);
    } else {
      setMoviesNotFound(false);
      setErrorMessage('');
    }
  }, [displayMovies]);

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
          displayMovies={searchMovies}
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
