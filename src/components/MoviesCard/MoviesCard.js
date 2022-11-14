import { useHistory } from 'react-router-dom';
import { GLOBAL_URL } from '../../utils/constants';
import { intToTime } from '../../utils/utils';
import './MoviesCard.css';

const MoviesCard = ({ movie, savedMovie, onAddMovie, onDeleteMovie }) => {
  const history = useHistory();

  const handleSaveMovie = () => {
    onAddMovie(movie);
  };

  const handleDeleteSavedMovie = () => {
    onDeleteMovie(savedMovie);
  };

  const handleDeleteClick = () => {
    onDeleteMovie(movie);
  };

  const location = history.location.pathname === '/movies';

  return (
    <li className="movies-card">
      {location ? (
        <>
          <div className="movies-card__header">
            <div className="movies-card__description">
              <h2 className="movies-card__title">{movie.nameRU}</h2>
              <p className="movies-card__duration">
                {intToTime(movie.duration)}
              </p>
            </div>
            <button
              type="button"
              className={`movies-card__mark movies-card__mark_tag ${
                savedMovie ? 'movies-card__mark_active' : ''
              }`}
              onClick={savedMovie ? handleDeleteSavedMovie : handleSaveMovie}
            />
          </div>
          <img
            className="movies-card__image"
            alt={movie.nameRU}
            src={`${GLOBAL_URL}${movie.image.url}`}
          />
        </>
      ) : (
        <>
          <div className="movies-card__header">
            <div className="movies-card__description">
              <h2 className="movies-card__title">{movie.nameRU}</h2>
              <p className="movies-card__duration">
                {intToTime(movie.duration)}
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
            alt={movie.nameRU}
            src={movie.image}
          />
        </>
      )}
    </li>
  );
};

export default MoviesCard;
