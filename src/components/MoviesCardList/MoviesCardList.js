import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import LoadMore from '../LoadMore/LoadMore';
import { useState } from 'react';
import { getSavedMovie } from '../../utils/utils';
import { useEffect } from 'react';
import { PAGE_SIZE } from '../../utils/constants';
import { useHistory } from 'react-router-dom';

const MoviesCardList = ({
  displayMovies,
  savedMovies,
  onAddMovie,
  onDeleteMovie,
  windowWidth,
}) => {
  const [filter, setFilter] = useState([]);
  const [showMovies, setShowMovies] = useState([]);
  const [showCards, setShowCards] = useState({ total: 12, load: 3 });

  const history = useHistory();

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
    Array.isArray(displayMovies) ? setFilter(displayMovies) : setFilter([]);
  }, [displayMovies]);

  useEffect(() => {
    if (windowWidth > desktop.width) {
      setShowCards(desktop.cards);
    } else if (windowWidth <= desktop.width && windowWidth > mobile.width) {
      setShowCards(table.cards);
    } else {
      setShowCards(mobile.cards);
    }
  }, [desktop, mobile, table, windowWidth]);

  useEffect(() => {
    if (filter.length) {
      setShowMovies(filter.filter((item, i) => i < showCards.total));
    }
  }, [filter, showCards.total]);

  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list">
        {history.location.pathname === '/movies'
          ? showMovies.map((movie) => (
              <MoviesCard
                key={movie.id}
                movie={movie}
                savedMovie={getSavedMovie(savedMovies, movie)}
                onAddMovie={onAddMovie}
                onDeleteMovie={onDeleteMovie}
              />
            ))
          : displayMovies.map((movie) => (
              <MoviesCard
                key={movie._id}
                movie={movie}
                onDeleteMovie={onDeleteMovie}
              />
            ))}
      </ul>
      {history.location.pathname === '/movies' && (
        <LoadMore
          setIndex={handleLoadMore}
          showMovies={showMovies}
          showCards={showCards}
          filter={filter}
        />
      )}
    </section>
  );
};

export default MoviesCardList;
