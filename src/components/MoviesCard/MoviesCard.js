import { useHistory } from 'react-router-dom';
import { intToTime } from '../../utils/utils';
import { URL } from '../../utils/constants';
import './MoviesCard.css';

const MoviesCard = ({ movie, savedMovie, onAddMovie, onDeleteMovie }) => {
  const { movieApi } = URL;
  const history = useHistory();

  const handleSaveMovie = () => {
    onAddMovie(movie);
  };

  const handleDeleteClick = () => {
    onDeleteMovie(savedMovie);
  };

  return (
    <li className="movies-card">
      <a
        className="movies-card__trailer-link"
        href={movie.trailerLink}
        target="blanck"
      >
        {movie.nameRU}
      </a>
      <div className="movies-card__header">
        <div className="movies-card__description">
          <h2 className="movies-card__title">{movie.nameRU}</h2>
          {/* </a> */}
          <p className="movies-card__duration">{intToTime(movie.duration)}</p>
        </div>
        {history.location.pathname === '/movies' && (
          <button
            type="button"
            className={`movies-card__mark movies-card__mark_tag ${
              savedMovie ? 'movies-card__mark_active' : ''
            }`}
            onClick={savedMovie ? handleDeleteClick : handleSaveMovie}
          />
        )}
        {history.location.pathname === '/saved-movies' && (
          <button
            type="button"
            className="movies-card__mark movies-card__mark_cross"
            onClick={handleDeleteClick}
          />
        )}
      </div>
      {history.location.pathname === '/movies' && (
        <img
          className="movies-card__image"
          alt={movie.nameRU}
          src={`${movieApi}${movie.image.url}`}
        />
      )}
      {history.location.pathname === '/saved-movies' && (
        <img
          className="movies-card__image"
          alt={movie.nameRU}
          src={movie.image}
        />
      )}
    </li>
  );
};

export default MoviesCard;
