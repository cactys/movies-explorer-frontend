import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({ cards, mark }) => {
  return (
    <div className="movies-card-list">
      {cards.map((item) => (
        <MoviesCard key={item._id} card={item} mark={mark} />
      ))}
    </div>
  );
};

export default MoviesCardList;
