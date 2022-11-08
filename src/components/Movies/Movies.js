import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

const Movies = ({ cards }) => {
  return (
    <main className="movies">
      <SearchForm />
      <FilterCheckbox />
      <MoviesCardList cards={cards} mark="tag" />
    </main>
  );
};

export default Movies;
