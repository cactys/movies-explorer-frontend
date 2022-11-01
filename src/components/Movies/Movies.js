import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

const Movies = ({ cards }) => {
  return (
    <div className="movies">
      <SearchForm />
      <MoviesCardList cards={cards} mark='tag'/>
    </div>
  );
};

export default Movies;
