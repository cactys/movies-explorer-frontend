import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

const Movies = ({ cards, checked, setChecked }) => {
  return (
    <div className="movies">
      <SearchForm />
      <FilterCheckbox checked={checked} setChecked={setChecked} />
      <MoviesCardList cards={cards} mark="tag" />
    </div>
  );
};

export default Movies;
