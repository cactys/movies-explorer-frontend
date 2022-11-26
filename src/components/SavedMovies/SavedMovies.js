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
  const [inputQuery, setInputQuery] = useState('');
  const [filterCheckbox, setFilterCheckbox] = useState(false);
  const [moviesNotFound, setMoviesNotFound] = useState(false);

  const handleSearchSubmit = (input) => {
    setInputQuery(input);
  };

  const handleShortFilter = () => {
    setFilterCheckbox(!filterCheckbox);
  };

  useEffect(() => {
    const moviesList = filterSearchMovie(savedMovies, inputQuery);
    setDisplayMovies(
      filterCheckbox ? filterShortCheckbox(moviesList) : moviesList
    );
  }, [filterCheckbox, inputQuery, savedMovies]);

  useEffect(() => {
    if (displayMovies.length === 0) {
      setErrorMessage(notFound);
      setMoviesNotFound(true);
    } else {
      setErrorMessage('');
      setMoviesNotFound(false);
    }
  }, [displayMovies, notFound]);

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
          savedMovies={displayMovies}
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
