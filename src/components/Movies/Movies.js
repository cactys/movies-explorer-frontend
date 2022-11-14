import { filterShortCheckbox } from '../../utils/utils';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

const Movies = ({
  movies,
  savedMovies,
  checked,
  setChecked,
  onAddMovie,
  onDeleteMovie,
}) => {
  return (
    <main className="movies">
      <section className="movies__form">
        <fieldset className="movies__set">
          <SearchForm />
          <FilterCheckbox checked={checked} setChecked={setChecked} />
        </fieldset>
      </section>
      <MoviesCardList
        onChecked={filterShortCheckbox(checked, movies)}
        savedMovies={savedMovies}
        onDeleteMovie={onDeleteMovie}
        onAddMovie={onAddMovie}
        checked={checked}
      />
    </main>
  );
};

export default Movies;
