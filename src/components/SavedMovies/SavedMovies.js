import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

const SavedMovies = ({ cards, checked, setChecked }) => {
  return (
    <div className="save-movies">
      <SearchForm />
      <FilterCheckbox checked={checked} setChecked={setChecked} />
      <MoviesCardList cards={cards} mark="cross" />
    </div>
  );
};

export default SavedMovies;
