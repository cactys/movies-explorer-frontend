import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import LoadMore from '../LoadMore/LoadMore';
import { useState } from 'react';
import { getSavedMovie, pageSize } from '../../utils/utils';
import { useHistory } from 'react-router-dom';

const MoviesCardList = ({
  movies,
  savedMovies,
  onAddMovie,
  onDeleteMovie,
  onShortChecked,
}) => {
  const [visibleData, setVisibleData] = useState(pageSize());

  console.log(onShortChecked(movies));

  const history = useHistory();

  const handleLoadMore = () => {
    return setVisibleData(visibleData + pageSize());
  };

  return (
    <section className="movies-card-list">
      {history.location.pathname === '/movies' && (
        <>
          <ul className="movies-card-list__list">
            {movies.slice(0, visibleData).map((movie) => {
              return (
                <MoviesCard
                  key={movie.id}
                  movie={movie}
                  savedMovie={getSavedMovie(savedMovies, movie)}
                  onAddMovie={onAddMovie}
                  onDeleteMovie={onDeleteMovie}
                />
              );
            })}
          </ul>
          <LoadMore
            isVisible={movies.length > pageSize()}
            isDisable={movies.length === visibleData.length}
            setIndex={handleLoadMore}
          />
        </>
      )}
      {history.location.pathname === '/saved-movies' && (
        <>
          <ul className="movies-card-list__list">
            {savedMovies.slice(0, visibleData).map((savedMovie) => {
              return (
                <MoviesCard
                  key={savedMovie._id}
                  movie={savedMovie}
                  onDeleteMovie={onDeleteMovie}
                />
              );
            })}
          </ul>
          <LoadMore
            isVisible={savedMovies.length > pageSize()}
            isDisable={savedMovies.length === visibleData.length}
            setIndex={handleLoadMore}
          />
        </>
      )}
    </section>
  );
};

export default MoviesCardList;
