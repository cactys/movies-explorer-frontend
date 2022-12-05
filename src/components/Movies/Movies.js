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
  const [moviesNotFound, setMoviesNotFound] = useState(false);
  const [filterCheckbox, setFilterCheckbox] = useState(
    JSON.parse(localStorage.getItem('short-movies'))
  );
  const [isLoading, setIsLoading] = useState(false);

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
  };

  const handleSearchSubmit = (input) => {
    localStorage.setItem('query-movies', input);

    if (allMovies.length === 0) {
      setIsLoading(true);
      setPreloader(true);
      moviesApi
        .getMovies()
        .then((res) => {
          setAllMovies(res);
          handleSearchMovies(res, input);
          localStorage.setItem('movies', JSON.stringify(res));
        })
        .finally(() => {
          setIsLoading(false);
          setPreloader(false);
        })
        .catch((err) => {
          setErrorMessage(queryError);
          setMoviesNotFound(true);
        });
    } else {
      handleSearchMovies(allMovies, input);
      setIsLoading(false);
    }
  };

  const handleShortFilter = () => {
    setFilterCheckbox(!filterCheckbox);

    if (!filterCheckbox) {
      setFilterCheckbox(true);
      setDisplayMovies(filterShortCheckbox(searchMovies));
      if (
        Array.isArray(searchMovies)
          ? filterShortCheckbox(searchMovies).length === 0
          : null
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
      setDisplayMovies(searchMovies);
      if (Array.isArray(searchMovies) ? searchMovies.length === 0 : null) {
        setErrorMessage(notFound);
        setMoviesNotFound(true);
      } else {
        setErrorMessage('');
        setMoviesNotFound(false);
      }
    }
    localStorage.setItem('short-movies', !filterCheckbox);
  };

  // useEffect(() => {
  //   if (localStorage.getItem('short-movies') === 'true') {
  //     setFilterCheckbox(true);
  //   }
  // }, [filterCheckbox]);

  useEffect(() => {
    const getMovies = JSON.parse(localStorage.getItem('movies'));
    const getInput = localStorage.getItem('query-movies');

    if (localStorage.getItem('movies')) {
      setSearchMovies(filterSearchMovie(getMovies, getInput));
    }
  }, []);

  useEffect(() => {
    if (filterCheckbox) {
      setDisplayMovies(filterShortCheckbox(searchMovies));
    } else {
      setDisplayMovies(searchMovies);
    }
    // setDisplayMovies(
    //   filterCheckbox ? filterShortCheckbox(searchMovies) : searchMovies
    // );
  }, [searchMovies, filterCheckbox]);

  return (
    <main className="movies">
      <section className="movies__form">
        <fieldset className="movies__set">
          <SearchForm
            handleSearchSubmit={handleSearchSubmit}
            isLoading={isLoading}
          />
          <FilterCheckbox
            handleShortFilter={handleShortFilter}
            filterCheckbox={filterCheckbox}
          />
        </fieldset>
      </section>
      {!moviesNotFound ? (
        <MoviesCardList
          displayMovies={displayMovies}
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
