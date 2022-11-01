import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({ cards }) => {
  return (
    <div className="movies-card-list">
      {cards.map((item) => (
        <MoviesCard
          key={item._id}
          card={item}
        />
      ))}
    </div>
  );
};

export default MoviesCardList;
