import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

const SavedMovies = ({ cards }) => {
  return (
    <div className="save-movies">
      <SearchForm />
      <MoviesCardList cards={cards} mark='cross' />
    </div>
  );
};

export default SavedMovies;
