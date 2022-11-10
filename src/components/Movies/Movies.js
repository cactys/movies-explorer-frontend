import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

const Movies = ({ cards }) => {
  return (
    <main className="movies">
      <form className="movies__form">
        <fieldset className="movies__set">
          <SearchForm />
          <FilterCheckbox />
        </fieldset>
      </form>
      <MoviesCardList cards={cards} mark="tag" />
    </main>
  );
};

export default Movies;
