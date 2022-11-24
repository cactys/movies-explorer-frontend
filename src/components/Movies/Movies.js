import { useEffect, useState } from 'react';
import { filterSearchMovie, filterShortCheckbox } from '../../utils/utils';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import { moviesApi } from '../../utils/MoviesApi';
import Preloader from '../Preloader/Preloader';
import MoviesNotFound from '../MoviesNotFound/MoviesNotFound';
import { MESSAGE } from '../../utils/constants';

const Movies = ({
  savedMovies,
  onAddMovie,
  onDeleteMovie,
  preloader,
  setPreloader,
  windowWidth,
}) => {
  const { notFound, queryError } = MESSAGE;
  const [errorMessage, setErrorMessage] = useState('');
  const [allMovies, setAllMovies] = useState([]);
  const [displayMovies, setDisplayMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState([]);
  const [filterCheckbox, setFilterCheckbox] = useState(false);
  const [moviesNotFound, setMoviesNotFound] = useState(false);

  const handleSearchMovies = (movies, input) => {
    const moviesList = filterSearchMovie(movies, input);

    if (moviesList.length === 0) {
      setErrorMessage(notFound);
      setMoviesNotFound(true);
      setSearchMovies(moviesList);
    } else {
      setErrorMessage(
        filterCheckbox && filterShortCheckbox(moviesList).length === 0
          ? notFound
          : ''
      );
      setMoviesNotFound(
        filterCheckbox && filterShortCheckbox(moviesList).length === 0
          ? true
          : false
      );
      setSearchMovies(moviesList);
    }
    localStorage.setItem('movies', JSON.stringify(moviesList));
  };

  const handleSearchSubmit = (input) => {
    localStorage.setItem('query-movies', input);
    if (allMovies.length === 0) {
      setPreloader(true);
      moviesApi
        .getMovies()
        .then((res) => {
          setAllMovies(res);
          handleSearchMovies(res, input);
        })
        .finally(() => {
          setPreloader(false);
        })
        .catch((err) => {
          console.log(err);
          setErrorMessage(queryError);
          setMoviesNotFound(true);
        });
    } else {
      handleSearchMovies(allMovies, input);
    }
  };

  const handleShortFilter = () => {
    setFilterCheckbox(!filterCheckbox);
    localStorage.setItem('short-movies', filterCheckbox);

    const movies = JSON.parse(localStorage.getItem('movies'));

    if (!filterCheckbox) {
      setFilterCheckbox(true);
      setDisplayMovies(filterShortCheckbox(movies));
      if (
        Array.isArray(movies) ? filterShortCheckbox(movies).length === 0 : null
      ) {
        setErrorMessage(notFound);
        setMoviesNotFound(true);
        if (localStorage.getItem('movies') === null) {
          setErrorMessage(notFound);
          setMoviesNotFound(true);
        }
      } else {
        setErrorMessage('');
        setMoviesNotFound(false);
      }
    } else {
      setFilterCheckbox(false);
      setDisplayMovies(movies);
      if (Array.isArray(movies) ? movies.length === 0 : null) {
        setErrorMessage(notFound);
        setMoviesNotFound(true);
      } else {
        setErrorMessage('');
        setMoviesNotFound(false);
      }
    }
    localStorage.setItem('short-movies', !filterCheckbox);
  };

  useEffect(() => {
    if (localStorage.getItem('short-movies') === 'true') {
      setFilterCheckbox(true);
    }
  }, [filterCheckbox]);

  useEffect(() => {
    const getMovies = JSON.parse(localStorage.getItem('movies'));

    if (localStorage.getItem('movies')) {
      setSearchMovies(getMovies);
    }
  }, [filterCheckbox]);

  useEffect(() => {
    setDisplayMovies(
      filterCheckbox ? filterShortCheckbox(searchMovies) : searchMovies
    );
  }, [searchMovies, filterCheckbox]);

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
          displayMovies={displayMovies}
          errorMessage={errorMessage}
          savedMovies={savedMovies}
          onDeleteMovie={onDeleteMovie}
          onAddMovie={onAddMovie}
          windowWidth={windowWidth}
        />
      ) : (
        <MoviesNotFound errorMessage={errorMessage} />
      )}
      {preloader ? <Preloader /> : null}
    </main>
  );
};

export default Movies;
