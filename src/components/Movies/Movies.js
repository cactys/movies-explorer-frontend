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
  const handleFilterCheckbox = (movies) => {
    if (checked) {
      return movies.filter((movie) => movie.duration < 40);
    }
  };

  return (
    <main className="movies">
      <section className="movies__form">
        <fieldset className="movies__set">
          <SearchForm />
          <FilterCheckbox checked={checked} setChecked={setChecked} />
        </fieldset>
      </section>
      <MoviesCardList
        movies={movies}
        onShortChecked={handleFilterCheckbox}
        savedMovies={savedMovies}
        onDeleteMovie={onDeleteMovie}
        onAddMovie={onAddMovie}
      />
    </main>
  );
};

export default Movies;
