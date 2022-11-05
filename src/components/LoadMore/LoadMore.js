import "./LoadMore.css";

const LoadMore = ({ setIndex, isVisible }) => {
  return (
    setIndex && (
      <div className="load-more">
        <button className="load-more__button" type="button" onClick={isVisible}>
          Еще
        </button>
      </div>
    )
  );
};

export default LoadMore;
