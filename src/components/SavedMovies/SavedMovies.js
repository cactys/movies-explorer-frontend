import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

const SavedMovies = ({ cards }) => {
  return (
    <main className="save-movies">
      <SearchForm />
      <FilterCheckbox />
      <MoviesCardList cards={cards} mark="cross" />
    </main>
  );
};

export default SavedMovies;
