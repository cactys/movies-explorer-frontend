import './LoadMore.css';

const LoadMore = ({ setIndex, isVisible, isDisable }) => {
  return (
    isVisible && (
      <div className="load-more">
        <button
          className={`load-more__button ${
            isDisable ? 'load-more__button_disabled' : ''
          }`}
          type="button"
          onClick={setIndex}
        >
          Еще
        </button>
      </div>
    )
  );
};

export default LoadMore;
