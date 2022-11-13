import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

const Movies = ({ cards, currentCards, checked, setChecked, onAddMovie }) => {
  return (
    <main className="movies">
      <form className="movies__form">
        <fieldset className="movies__set">
          <SearchForm />
          <FilterCheckbox checked={checked} setChecked={setChecked} />
        </fieldset>
      </form>
      <MoviesCardList
        cards={cards}
        currentCards={currentCards}
        onAddMovie={onAddMovie}
      />
    </main>
  );
};

export default Movies;
