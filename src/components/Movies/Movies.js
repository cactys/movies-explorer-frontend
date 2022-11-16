import { useEffect } from 'react';
import { filterShortCheckbox } from '../../utils/utils';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

const Movies = ({
  allMovies,
  savedMovies,
  checked,
  setChecked,
  onAddMovie,
  onDeleteMovie,
  searchMovies,
  setSearchMovies,
  onSearchMovie,
  onSearch,
  setOnSearch,
}) => {

  const handleSearchSubmit = (input) => {
    onSearchMovie(allMovies, input, checked);
  };

  useEffect(() => {
    setSearchMovies([]);
  }, [setSearchMovies]);

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
        />
      )}
    </main>
  );
};

export default Movies;
