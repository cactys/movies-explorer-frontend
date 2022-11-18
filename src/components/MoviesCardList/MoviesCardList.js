import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import LoadMore from '../LoadMore/LoadMore';
import { useState } from 'react';
import { getSavedMovie, pageSize } from '../../utils/utils';
import { useEffect } from 'react';
// import MoviesNotFound from '../MoviesNotFound/MoviesNotFound';

const MoviesCardList = ({
  shortFilter,
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
    setFilter(shortFilter);
  }, [shortFilter]);

  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list">
        {filter.slice(0, visibleData).map((movie) => {
          return (
            <MoviesCard
              key={movie.id || movie._id}
              movie={movie}
              savedMovie={getSavedMovie(savedMovies, movie)}
              onAddMovie={onAddMovie}
              onDeleteMovie={onDeleteMovie}
            />
          );
        })}
      </ul>
      <LoadMore
        isVisible={filter.length > pageSize()}
        isDisable={filter.length <= visibleData}
        setIndex={handleLoadMore}
      />
    </section>
  );
};

export default MoviesCardList;
