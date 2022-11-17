import { useContext, useEffect } from 'react';
import { filterShortCheckbox } from '../../utils/utils';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';
import { CurrentUserContext } from '../../context/CurrentUserContext';

const SavedMovies = ({
  savedMovies,
  checked,
  setChecked,
  onDeleteMovie,
  searchMovies,
  onSearchMovie,
  onSearch,
  setOnSearch,
  moviesNotFound,
}) => {
  const currentUser = useContext(CurrentUserContext);
  const handleSearchSubmit = (input) => {
    onSearchMovie(savedMovies, input, checked);
  };

  useEffect(() => {
    if (
      localStorage.getItem(`${currentUser.email} - shortSaveMovie`) === 'true'
    ) {
      setChecked(true);
    } else {
      setChecked(false);
    }
    setOnSearch(false);
  }, [currentUser.email, setChecked, setOnSearch]);

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
        moviesNotFound={moviesNotFound}
      />
    </main>
  );
};

export default SavedMovies;
