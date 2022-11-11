import { useState } from 'react';
import { intToTime, GLOBAL_URL } from '../../utils/config';
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
    <li className="movies-card">
      <div className="movies-card__header">
        <div className="movies-card__description">
          <h2 className="movies-card__title">{card.nameRU}</h2>
          <p className="movies-card__duration">{intToTime(card.duration)}</p>
        </div>
        <button
          type="button"
          className={`movies-card__mark movies-card__mark_${mark} movies-card__mark_${
            saveMovies ? 'active' : ''
          }`}
          onClick={handleSaveMovie}
        />
      </div>
      <img
        className="movies-card__image"
        alt={card.duration}
        src={`${GLOBAL_URL}${card.image.url}`}
      />
    </li>
  );
};

export default MoviesCard;
