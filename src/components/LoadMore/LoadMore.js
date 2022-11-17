import './LoadMore.css';

const LoadMore = ({ setIndex, isVisible, isDisable }) => {
  return (
    <div className="load-more">
      {isVisible ? (
        <button
          className={`load-more__button ${
            isDisable ? 'load-more__button_disabled' : ''
          }`}
          type="submit"
          onClick={setIndex}
        >
          Ещё
        </button>
      ) : null}
    </div>
  );
};

export default LoadMore;
