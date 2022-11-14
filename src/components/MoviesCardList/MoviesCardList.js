import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import LoadMore from '../LoadMore/LoadMore';
import { useState } from 'react';
import { getSavedMovie, pageSize } from '../../utils/utils';
import { useEffect } from 'react';

const MoviesCardList = ({
  savedMovies,
  onAddMovie,
  onDeleteMovie,
  onChecked,
}) => {
  const [visibleData, setVisibleData] = useState(pageSize());
  const [filterCheckbox, setFilterCheckbox] = useState([]);

  const handleLoadMore = () => {
    return setVisibleData(visibleData + pageSize());
  };

  useEffect(() => {
    setFilterCheckbox(onChecked);
  }, [onChecked]);

  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list">
        {Array.isArray(filterCheckbox)
          ? filterCheckbox.slice(0, visibleData).map((movie) => {
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
        isVisible={filterCheckbox.length > pageSize()}
        isDisable={filterCheckbox.length === visibleData.length}
        setIndex={handleLoadMore}
      />
    </section>
  );
};

export default MoviesCardList;
