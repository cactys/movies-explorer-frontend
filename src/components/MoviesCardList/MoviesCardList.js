import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import LoadMore from "../LoadMore/LoadMore";
import { useEffect, useState } from "react";
import { PAGE_SIZE } from "../../utils/content";

const MoviesCardList = ({ cards, mark }) => {
  const [index, setIndex] = useState(0);
  const [visibleData, setVisibleData] = useState([]);

  useEffect(() => {
    const numderOfIndex = PAGE_SIZE * (index + 1);
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
              return <MoviesCard key={item._id} card={item} mark={mark} />;
            })
          : null}
      </div>
      <LoadMore setIndex={cards.length > 12} isVisible={handleLoadMore} />
    </>
  );
};

export default MoviesCardList;
