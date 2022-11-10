import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import LoadMore from '../LoadMore/LoadMore';
import { useEffect, useState } from 'react';
import { PAGE_SIZE } from '../../utils/config';

const MoviesCardList = ({ cards, mark }) => {
  const [index, setIndex] = useState(0); // window.innerWidth ><=
  const [visibleData, setVisibleData] = useState([]);

  const pageSize = () => {
    if (window.innerWidth <= 2560) {
      return 12;
    }
  };


  useEffect(() => {
    const numderOfIndex = pageSize() * (index + 1);
    const newArray = [];

    for (let i = 0; i < cards.length; i++) {
      if (i < numderOfIndex) {
        newArray.push(cards[i]);
      }
    }

    return setVisibleData(newArray);
  }, [cards, index]);

  const handleLoadMore = () => {
    return setIndex(index + 1);
  };

  return (
    <>
      <div className="movies-card-list">
        {Array.isArray(visibleData)
          ? visibleData.map((item) => {
              return <MoviesCard key={item.id} card={item} mark={mark} />;
            })
          : null}
      </div>
      <LoadMore
        isVisible={cards.length > 12}
        isDisable={cards.length === visibleData.length}
        setIndex={handleLoadMore}
      />
    </>
  );
};

export default MoviesCardList;
