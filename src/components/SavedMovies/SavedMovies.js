import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import LoadMore from '../LoadMore/LoadMore';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

const SavedMovies = ({ cards }) => {
  return (
    <div className="save-movies">
      <SearchForm />
      <FilterCheckbox />
      <MoviesCardList cards={cards} mark='cross' />
    </div>
  );
};

export default SavedMovies;
