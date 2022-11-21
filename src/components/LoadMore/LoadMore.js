import './LoadMore.css';

const LoadMore = ({ setIndex, showMovies, showCards, filter }) => {
  return (
    <div className="load-more">
      {showMovies.length >= showCards.total &&
        showMovies.length < filter.length && (
          <button
            className="load-more__button"
            type="submit"
            onClick={setIndex}
          >
            Ещё
          </button>
        )}
    </div>
  );
};

export default LoadMore;
