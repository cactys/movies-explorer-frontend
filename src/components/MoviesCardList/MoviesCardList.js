import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import LoadMore from '../LoadMore/LoadMore';
import { useState } from 'react';
import { getSavedMovie, pageSize } from '../../utils/utils';
import { useEffect } from 'react';
// import MoviesNotFound from '../MoviesNotFound/MoviesNotFound';

const MoviesCardList = ({
  filterMovies,
  savedMovies,
  onAddMovie,
  onDeleteMovie,
}) => {
  const [visibleData, setVisibleData] = useState(pageSize());
  const [filter, setFilter] = useState([]);

  const handleLoadMore = () => {
    return setVisibleData(visibleData + pageSize());
  };

  useEffect(() => {
    setFilter(filterMovies);
  }, [filterMovies]);

  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list">
        {Array.isArray(filter)
          ? filter.slice(0, visibleData).map((movie) => {
              return (
                <MoviesCard
                  key={movie.id || movie._id}
                  movie={movie}
                  savedMovie={getSavedMovie(savedMovies, movie)}
                  onAddMovie={onAddMovie}
                  onDeleteMovie={onDeleteMovie}
                />
              );
            })
          : null}
      </ul>
      <LoadMore
        isVisible={Array.isArray(filter) ? filter.length > pageSize() : null}
        isDisable={Array.isArray(filter) ? filter.length <= visibleData : null}
        setIndex={handleLoadMore}
      />
    </section>
  );
};

export default MoviesCardList;
