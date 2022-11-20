import { useEffect, useState } from 'react';
import { filterSearchMovie, filterShortCheckbox } from '../../utils/utils';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import { moviesApi } from '../../utils/MoviesApi';
import Preloader from '../Preloader/Preloader';
import MoviesNotFound from '../MoviesNotFound/MoviesNotFound';
import { NOT_FOUND, QUERY_ERROR } from '../../utils/constants';

const Movies = ({
  savedMovies,
  onAddMovie,
  onDeleteMovie,
  preloader,
  setPreloader,
}) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [allMovies, setAllMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [filterCheckbox, setFilterCheckbox] = useState(false);
  const [moviesNotFound, setMoviesNotFound] = useState(false);

  const handleSearchMovies = (movies, input, filter) => {
    const moviesList = filterSearchMovie(movies, input, filter);

    if (moviesList.length === 0) {
      setErrorMessage(NOT_FOUND);
      setMoviesNotFound(true);
      localStorage.setItem('movies', JSON.stringify(moviesList));
    } else {
      setErrorMessage(
        filter && filterShortCheckbox(moviesList).length === 0 ? NOT_FOUND : ''
      );
      setMoviesNotFound(
        filter && filterShortCheckbox(moviesList).length === 0 ? true : false
      );

      setFilterMovies(filter ? filterShortCheckbox(moviesList) : moviesList);
      localStorage.setItem('movies', JSON.stringify(moviesList));
    }
  };

  const handleSearchSubmit = (input) => {
    console.log(input);
    localStorage.setItem('search-movies', input);
    localStorage.setItem('short-movies', filterCheckbox);

    if (allMovies.length === 0) {
      setPreloader(true);
      moviesApi
        .getMovies()
        .then((res) => {
          setAllMovies(res);
          handleSearchMovies(res, input, filterCheckbox);
        })
        .catch((err) => {
          console.log(err);
          setErrorMessage(QUERY_ERROR);
          setMoviesNotFound(true);
        })
        .finally(() => setPreloader(false));
    } else {
      handleSearchMovies(allMovies, input, filterCheckbox);
    }
  };

  const handleShortFilter = () => {
    setFilterCheckbox(!filterCheckbox);
    localStorage.setItem('short-movies', filterCheckbox);

    const movies = JSON.parse(localStorage.getItem('movies'));
    localStorage.setItem('movies', JSON.stringify(movies));

    if (!filterCheckbox) {
      setFilterCheckbox(true);
      setFilterMovies(filterShortCheckbox(movies));
      if (
        Array.isArray(movies) ? filterShortCheckbox(movies).length === 0 : null
      ) {
        setErrorMessage(NOT_FOUND);
        setMoviesNotFound(true);
      } else {
        setErrorMessage('');
        setMoviesNotFound(false);
      }
    } else {
      setFilterCheckbox(false);
      setFilterMovies(movies);
      if (Array.isArray(movies) ? movies.length === 0 : null) {
        setErrorMessage(NOT_FOUND);
        setMoviesNotFound(true);
      } else {
        setErrorMessage('');
        setMoviesNotFound(false);
      }
    }
    localStorage.setItem('short-movies', !filterCheckbox);
  };

  useEffect(() => {
    if (localStorage.getItem('movies')) {
      const movies = JSON.parse(localStorage.getItem('movies'));

      if (localStorage.getItem('short-movies') === 'true') {
        setFilterMovies(filterShortCheckbox(movies));
        setFilterCheckbox(true);

        if (
          Array.isArray(movies)
            ? filterShortCheckbox(movies).length === 0
            : null
        ) {
          setErrorMessage(NOT_FOUND);
          setMoviesNotFound(true);
        } else {
          setErrorMessage('');
          setMoviesNotFound(false);
        }
      } else {
        setFilterMovies(movies);
        setFilterCheckbox(false);

        if (Array.isArray(movies) ? movies.length === 0 : null) {
          setErrorMessage(NOT_FOUND);
          setMoviesNotFound(true);
        } else {
          setErrorMessage('');
          setMoviesNotFound(false);
        }
      }
    }
  }, [setFilterMovies]);

  return (
    <main className="movies">
      <section className="movies__form">
        <fieldset className="movies__set">
          <SearchForm handleSearchSubmit={handleSearchSubmit} />
          <FilterCheckbox
            handleShortFilter={handleShortFilter}
            filterCheckbox={filterCheckbox}
          />
        </fieldset>
      </section>
      {!moviesNotFound ? (
        <MoviesCardList
          filterMovies={filterMovies}
          errorMessage={errorMessage}
          savedMovies={savedMovies}
          onDeleteMovie={onDeleteMovie}
          onAddMovie={onAddMovie}
        />
      ) : (
        <MoviesNotFound errorMessage={errorMessage} />
      )}
      {preloader ? <Preloader /> : null}
    </main>
  );
};

export default Movies;
