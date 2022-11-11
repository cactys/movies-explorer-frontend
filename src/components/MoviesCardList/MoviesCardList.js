import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import LoadMore from '../LoadMore/LoadMore';
import { useEffect, useState } from 'react';
import {
  PAGE_SIZE_1024,
  PAGE_SIZE_1280,
  PAGE_SIZE_425,
} from '../../utils/config';

const MoviesCardList = ({ cards, mark }) => {
  const pageSize = () => {
    if (window.innerWidth <= 500) {
      return PAGE_SIZE_425;
    }
    if (window.innerWidth > 1024) {
      return PAGE_SIZE_1280;
    } else {
      return PAGE_SIZE_1024;
    }
  };
  // window.innerWidth ><=
  const [visibleData, setVisibleData] = useState(pageSize());

  const handleLoadMore = () => {
    return setVisibleData(visibleData + pageSize());
  };

  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__list">
        {cards.slice(0, visibleData).map((item) => {
          return <MoviesCard key={item.id} card={item} mark={mark} />;
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
