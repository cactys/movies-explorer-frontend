import { useEffect, useState } from 'react';
import { filterShortCheckbox, searchMovie } from '../../utils/utils';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

const Movies = ({
  allMovies,
  savedMovies,
  checked,
  setChecked,
  onAddMovie,
  onDeleteMovie,
  preloader,
  setPreloader,
}) => {
  const [notFound, setNotFound] = useState(false);
  const [queryMovies, setQueryMovies] = useState([]);
  const [filterShort, setFilterShort] = useState([]);

  const handleSearchMovie = (movies, query, shortCheckbox) => {
    const moviesList = searchMovie(movies, query, shortCheckbox);

    if (moviesList.length === 0) {
      setNotFound(true);
    } else {
      setNotFound(false);
    }

    setQueryMovies(moviesList);
    setFilterShort(
      shortCheckbox ? filterShortCheckbox(moviesList) : moviesList
    );
  };

  const handleSearchSubmit = (input) => {
    if (allMovies === 0) {
      setPreloader(true);
    } else {
      handleSearchMovie(allMovies, input, checked);
    }
  };

  return (
    <main className="movies">
      <section className="movies__form">
        <fieldset className="movies__set">
          <SearchForm handleSearchSubmit={handleSearchSubmit} />
          <FilterCheckbox checked={checked} setChecked={setChecked} />
        </fieldset>
      </section>
      {notFound ? (
        <MoviesCardList
          onChecked={filterShortCheckbox(checked, allMovies)}
          savedMovies={savedMovies}
          onDeleteMovie={onDeleteMovie}
          onAddMovie={onAddMovie}
          checked={checked}
        />
      ) : null}
      {preloader ? <Preloader /> : null}
    </main>
  );
};

export default Movies;
