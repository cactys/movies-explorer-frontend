import { useContext, useEffect, useState } from 'react';
import { filterShortCheckbox } from '../../utils/utils';
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
  checked,
  setChecked,
  onAddMovie,
  onDeleteMovie,
  preloader,
  setPreloader,
  searchMovies,
  setSearchMovies,
  onSearchMovie,
  onSearch,
  setOnSearch,
  moviesNotFound,
}) => {
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);

  const currentUser = useContext(CurrentUserContext);

  const handleSearchSubmit = (input) => {
    localStorage.setItem(`${currentUser.email} - searchMovie`, input);
    localStorage.setItem(`${currentUser.email} - shortMovie`, checked);

    if (movies.length === 0) {
      setPreloader(true);
      moviesApi
        .getMovies()
        .then((res) => {
          setMovies(res);
          onSearchMovie(res, input, checked);
        })
        .finally(() => setPreloader(false))
        .catch((err) => console.log(err));
    } else {
      onSearchMovie(movies, input, checked);
    }
  };

  console.log(checked);

  useEffect(() => {
    if (localStorage.getItem(`${currentUser.email} - movies`)) {
      const movies = JSON.parse(
        localStorage.getItem(`${currentUser.email} - movie`)
      );
      setFilterMovies(movies);
    }
    // localStorage.setItem(`${currentUser.email} - shortMovie`, checked);
    // setSearchMovies([]);
  }, []);

  return (
    <main className="movies">
      <section className="movies__form">
        <fieldset className="movies__set">
          <SearchForm
            handleSearchSubmit={handleSearchSubmit}
            setOnSearch={setOnSearch}
          />
          <FilterCheckbox checked={checked} setChecked={setChecked} />
        </fieldset>
      </section>
      {onSearch && (
        <MoviesCardList
          filterMovies={filterShortCheckbox(checked, searchMovies)}
          savedMovies={savedMovies}
          onDeleteMovie={onDeleteMovie}
          onAddMovie={onAddMovie}
          checked={checked}
          moviesNotFound={moviesNotFound}
        />
      )}
      {preloader ? <Preloader /> : null}
    </main>
  );
};

export default Movies;
