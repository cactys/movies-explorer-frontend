import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

const SavedMovies = ({ savedMovies, checked, setChecked, onDeleteMovie }) => {
  return (
    <main className="save-movies">
      <form className="save-movies__form">
        <fieldset className="save-movies__set">
          <SearchForm />
          <FilterCheckbox checked={checked} setChecked={setChecked} />
        </fieldset>
      </form>
      <MoviesCardList savedMovies={savedMovies} onDeleteMovie={onDeleteMovie} />
    </main>
  );
};

export default SavedMovies;
