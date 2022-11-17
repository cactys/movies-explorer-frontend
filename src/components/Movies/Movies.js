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
  // allMovies,
  savedMovies,
  // checked,
  // setChecked,
  onAddMovie,
  onDeleteMovie,
  preloader,
  setPreloader,
  // searchMovies,
  // setSearchMovies,
  // onSearchMovie,
  // onSearch,
  // setOnSearch,
  // moviesNotFound,
}) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState([]);
  const [shortFilter, setShortFilter] = useState([]);
  const [filterCheckbox, setFilterCheckbox] = useState(false);
  const [moviesNotFound, setMoviesNotFound] = useState(false);

  const currentUser = useContext(CurrentUserContext);

  const handleSearchMovies = (movies, input, checkbox) => {
    const moviesList = filterSearchMovie(movies, input, checkbox);

    if (moviesList.length === 0) {
      setErrorMessage('Ничего не найдено');
      setMoviesNotFound(true);
    } else {
      setErrorMessage('');
      setMoviesNotFound(false);

      setSearchMovies(moviesList);
      setShortFilter(checkbox ? filterShortCheckbox(moviesList) : moviesList);
      localStorage.setItem(
        `${currentUser._id} - movies`,
        JSON.stringify(moviesList)
      );
    }
  };

  const handleSearchSubmit = (input) => {
    localStorage.setItem(`${currentUser._id} - searchMovies`, input);
    localStorage.setItem(`${currentUser._id} - shortMovies`, filterCheckbox);

    if (movies.length === 0) {
      setPreloader(true);
      moviesApi
        .getMovies()
        .then((res) => {
          setMovies(res);
          handleSearchMovies(res, input, filterCheckbox);
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
      setShortFilter(filterShortCheckbox(searchMovies));
    } else {
      setShortFilter(searchMovies);
    }

    localStorage.setItem(`${currentUser._id} - shortMovies`, !filterCheckbox);
  };

  useEffect(() => {
    if (localStorage.getItem(`${currentUser._id} - shortMovies`) === 'true') {
      setFilterCheckbox(true);
    } else {
      setFilterCheckbox(false);
    }
  }, [currentUser]);

  useEffect(() => {
    if (localStorage.getItem(`${currentUser._id} - movies`)) {
      const movies = JSON.parse(
        localStorage.getItem(`${currentUser._id} - movies`)
      );
      setSearchMovies(movies);
      if (localStorage.getItem(`${currentUser._id} - shortMovies`) === 'true') {
        setShortFilter(filterShortCheckbox(movies));
      } else {
        setShortFilter(movies);
      }
    }
  }, [currentUser]);

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
      {moviesNotFound ? (
        <MoviesCardList
          filterMovies={shortFilter}
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
