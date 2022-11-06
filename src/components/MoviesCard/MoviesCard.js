import { useState } from 'react';
import { intToTime, URL } from '../../utils/content';
import './MoviesCard.css';

const MoviesCard = ({ card, mark }) => {
  const [saveMovies, setSaveMovies] = useState(false);

  const handleSaveMovie = () => {
    if (!saveMovies && mark === 'tag') {
      return setSaveMovies(true);
    }
    return setSaveMovies(false);
  };

  return (
    <div className="movies-card">
      <div className="movies-card__header">
        <div className="movies-card__description">
          <h2 className="movies-card__title">{card.nameRU}</h2>
          <p className="movies-card__duration">{intToTime(card.duration)}</p>
        </div>
        <div
          className={`movies-card__mark movies-card__mark_${mark} movies-card__mark_${
            saveMovies ? 'active' : ''
          }`}
          onClick={handleSaveMovie}
        />
      </div>
      <img
        className="movies-card__image"
        alt={card.duration}
        src={`${URL}${card.image.url}`}
      />
    </div>
  );
};

export default MoviesCard;
