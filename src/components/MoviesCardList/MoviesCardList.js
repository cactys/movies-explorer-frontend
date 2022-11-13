import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import LoadMore from '../LoadMore/LoadMore';
import { useState } from 'react';
import { pageSize } from '../../utils/config';

const MoviesCardList = ({ cards, mark, onAddMovie }) => {
  const [visibleData, setVisibleData] = useState(pageSize());

  const handleLoadMore = () => {
    return setVisibleData(visibleData + pageSize());
  };

  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list">
        {cards.slice(0, visibleData).map((item) => {
          return (
            <MoviesCard
              key={item._id || item.id}
              card={item}
              mark={mark}
              onAddMovie={onAddMovie}
            />
          );
        })}
      </ul>
      <LoadMore
        isVisible={cards.length > pageSize()}
        isDisable={cards.length === visibleData.length}
        setIndex={handleLoadMore}
      />
    </section>
  );
};

export default MoviesCardList;
