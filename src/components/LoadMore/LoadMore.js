import './LoadMore.css';

const LoadMore = ({ setIndex, isVisible, isDisable }) => {
  return (
    isVisible && (
      <div className="load-more">
        <button
          className={`load-more__button ${
            isDisable ? 'load-more__button_disabled' : ''
          }`}
          type="submit"
          onClick={setIndex}
        >
          Ещё
        </button>
      </div>
    )
  );
};

export default LoadMore;
