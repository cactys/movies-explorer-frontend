import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

const SavedMovies = () => {
  return (
    <div className="save-movies">
      <SearchForm />
      <MoviesCardList />
    </div>
  );
};

export default SavedMovies;
