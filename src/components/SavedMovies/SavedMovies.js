import { useEffect } from 'react';
import { filterShortCheckbox } from '../../utils/utils';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

const SavedMovies = ({
  savedMovies,
  checked,
  setChecked,
  onDeleteMovie,
  searchMovies,
  onSearchMovie,
  onSearch,
  setOnSearch,
}) => {
  const handleSearchSubmit = (input) => {
    onSearchMovie(savedMovies, input, checked);
  };

  useEffect(() => {
    setOnSearch(false);
  }, [setOnSearch]);

  return (
    <main className="save-movies">
      <section className="save-movies__form">
        <fieldset className="save-movies__set">
          <SearchForm
            handleSearchSubmit={handleSearchSubmit}
            setOnSearch={setOnSearch}
          />
          <FilterCheckbox checked={checked} setChecked={setChecked} />
        </fieldset>
      </section>
      <MoviesCardList
        filterMovies={
          onSearch
            ? filterShortCheckbox(checked, searchMovies)
            : filterShortCheckbox(checked, savedMovies)
        }
        savedMovies={savedMovies}
        onDeleteMovie={onDeleteMovie}
      />
    </main>
  );
};

export default SavedMovies;
