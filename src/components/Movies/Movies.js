import { useContext, useEffect, useState } from 'react';
import { filterSearchMovie, filterShortCheckbox } from '../../utils/utils';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { moviesApi } from '../../utils/MoviesApi';
import Preloader from '../Preloader/Preloader';
import MoviesNotFound from '../MoviesNotFound/MoviesNotFound';

const Movies = ({
  savedMovies,
  onAddMovie,
  onDeleteMovie,
  preloader,
  setPreloader,
}) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState([]);
  const [shortFilter, setShortFilter] = useState([]);
  const [filterCheckbox, setFilterCheckbox] = useState(false);
  const [moviesNotFound, setMoviesNotFound] = useState(false);

  const currentUser = useContext(CurrentUserContext);

  const handleSearchMovies = (movies, input) => {
    const moviesList = filterSearchMovie(movies, input, filterCheckbox);

    if (moviesList.length === 0) {
      setErrorMessage('Ничего не найдено');
      setMoviesNotFound(true);
    } else {
      setErrorMessage('');
      setMoviesNotFound(false);

      setSearchMovies(moviesList);
      setShortFilter(
        filterCheckbox ? filterShortCheckbox(moviesList) : moviesList
      );
      localStorage.setItem(
        `${currentUser.email} - movies`,
        JSON.stringify(moviesList)
      );
    }
  };

  const handleSearchSubmit = (input) => {
    localStorage.setItem(`${currentUser.email} - searchMovies`, input);
    localStorage.setItem(`${currentUser.email} - shortMovies`, filterCheckbox);

    if (movies.length === 0) {
      setPreloader(true);
      moviesApi
        .getMovies()
        .then((res) => {
          setMovies(res);
          handleSearchMovies(res, input);
        })
        .catch((err) => {
          console.log(err);
          setErrorMessage(
            'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
          );
          setMoviesNotFound(true);
        })
        .finally(() => setPreloader(false));
    } else {
      handleSearchMovies(movies, input, filterCheckbox);
    }
  };

  const handleShortFilter = () => {
    setFilterCheckbox(!filterCheckbox);

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
    localStorage.setItem(`${currentUser.email} - shortMovies`, !filterCheckbox);
  };

  useEffect(() => {
    if (localStorage.getItem(`${currentUser.email} - shortMovies`) === 'true') {
      setFilterCheckbox(true);
    } else {
      setFilterCheckbox(false);
    }

    if (localStorage.getItem(`${currentUser.email} - movies`)) {
      const movies = JSON.parse(
        localStorage.getItem(`${currentUser.email} - movies`)
      );
      localStorage.getItem(`${currentUser.email} - shortMovies`) === 'true'
        ? setShortFilter(filterShortCheckbox(movies))
        : setShortFilter(movies);
    }
  }, [currentUser]);

  useEffect(() => {
    setShortFilter(shortFilter);
  }, [shortFilter]);

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
          shortFilter={shortFilter}
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
