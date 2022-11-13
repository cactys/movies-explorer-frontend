import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { GLOBAL_URL, intToTime } from '../../utils/config';
import './MoviesCard.css';

const MoviesCard = ({ card, currentCards, onAddMovie, onDeleteMovie }) => {
  const [saveMovies, setSaveMovies] = useState(false);

  const history = useHistory();

  console.log(
    currentCards.some((item) => console.log(item.movieId === card.id))
  );

  const handleSaveMovie = () => {
    onAddMovie(card);

    if (!saveMovies) {
      return setSaveMovies(true);
    }
    return setSaveMovies(false);
  };

  const handleDeleteClick = () => {
    onDeleteMovie(card);
  };

  const location = history.location.pathname === '/movies';

  return (
    <li className="movies-card">
      {location ? (
        <>
          <div className="movies-card__header">
            <div className="movies-card__description">
              <h2 className="movies-card__title">{card.nameRU}</h2>
              <p className="movies-card__duration">
                {intToTime(card.duration)}
              </p>
            </div>
            <button
              type="button"
              className={`movies-card__mark movies-card__mark_tag ${
                saveMovies ? 'movies-card__mark_active' : ''
              }`}
              onClick={handleSaveMovie}
            />
          </div>
          <img
            className="movies-card__image"
            alt={card.nameRU}
            src={`${GLOBAL_URL}${card.image.url}`}
          />
        </>
      ) : (
        <>
          <div className="movies-card__header">
            <div className="movies-card__description">
              <h2 className="movies-card__title">{card.nameRU}</h2>
              <p className="movies-card__duration">
                {intToTime(card.duration)}
              </p>
            </div>
            <button
              type="button"
              className="movies-card__mark movies-card__mark_cross"
              onClick={handleDeleteClick}
            />
          </div>
          <img
            className="movies-card__image"
            alt={card.nameRU}
            src={card.image}
          />
        </>
      )}
    </li>
  );
};

export default MoviesCard;
