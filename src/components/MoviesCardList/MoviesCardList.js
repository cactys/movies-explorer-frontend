import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import LoadMore from '../LoadMore/LoadMore';
import { useState } from 'react';
import { getSavedMovie } from '../../utils/utils';
import { useEffect } from 'react';
import { PAGE_SIZE } from '../../utils/constants';

const MoviesCardList = ({
  filterMovies,
  savedMovies,
  onAddMovie,
  onDeleteMovie,
  windowWidth,
}) => {
  const [toMount, setToMount] = useState(true);
  const [showMovies, setShowMovies] = useState([]);
  const [showCards, setShowCards] = useState({ total: 12, load: 3 });
  const [filter, setFilter] = useState([]);

  const { desktop, table, mobile } = PAGE_SIZE;

  const handleLoadMore = () => {
    const learMore = filter.length - showMovies.length;

    if (learMore > 0) {
      const newCards = filter.slice(
        showMovies.length,
        showMovies.length + showCards.load
      );
      setShowMovies([...showMovies, ...newCards]);
    }
  };

  useEffect(() => {
    setFilter(filterMovies);
  }, [filterMovies]);

  useEffect(() => {
    if (windowWidth > desktop.width) {
      setShowCards(desktop.cards);
    } else if (windowWidth <= desktop.width && windowWidth > mobile.width) {
      setShowCards(table.cards);
    } else {
      setShowCards(mobile.cards);
    }

    return () => setToMount(false);
  }, [desktop, mobile, table, windowWidth, toMount]);

  useEffect(() => {
    if (filter.length) {
      setShowMovies(filter.filter((item, i) => i < showCards.total));
    }
  }, [filter, showCards.total]);

  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list">
        {showMovies.map((movie) => {
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
        setIndex={handleLoadMore}
        showMovies={showMovies}
        showCards={showCards}
        filter={filter}
      />
    </section>
  );
};

export default MoviesCardList;
