import { useHistory } from 'react-router-dom';
import { intToTime } from '../../utils/utils';
import { URL } from '../../utils/constants';
import './MoviesCard.css';

const MoviesCard = ({ movie, savedMovie, onAddMovie, onDeleteMovie }) => {
  const { beatfilmMovies } = URL;
  const history = useHistory();

  const handleFolloweMovies = () => {
    onAddMovie(movie);
  };

  const handleUnfolloweMovies = () => {
    onDeleteMovie(savedMovie);
  };

  const handleDeleteSavedMovie = () => {
    onDeleteMovie(movie);
  };

  return (
    <li className="movies-card">
      <div className="movies-card__header">
        <div className="movies-card__description">
          <h2 className="movies-card__title">{movie.nameRU}</h2>
          <p className="movies-card__duration">{intToTime(movie.duration)}</p>
        </div>
        {history.location.pathname === '/movies' && (
          <button
            type="button"
            className={`movies-card__mark movies-card__mark_tag ${
              savedMovie ? 'movies-card__mark_active' : ''
            }`}
            onClick={savedMovie ? handleUnfolloweMovies : handleFolloweMovies}
          />
        )}
        {history.location.pathname === '/saved-movies' && (
          <button
            type="button"
            className="movies-card__mark movies-card__mark_cross"
            onClick={handleDeleteSavedMovie}
          />
        )}
      </div>
      <a
        className="movies-card__trailer-link"
        href={movie.trailerLink}
        target="blanck"
      >
        {movie.nameRU}
        {history.location.pathname === '/movies' && (
          <img
            className="movies-card__image"
            alt={movie.nameRU}
            src={`${beatfilmMovies}${movie.image.url}`}
          />
        )}
        {history.location.pathname === '/saved-movies' && (
          <img
            className="movies-card__image"
            alt={movie.nameRU}
            src={movie.image}
          />
        )}
      </a>
    </li>
  );
};

export default MoviesCard;
