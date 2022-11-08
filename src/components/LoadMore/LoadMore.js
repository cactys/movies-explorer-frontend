import './LoadMore.css';

const LoadMore = ({ setIndex, isVisible, isDisable }) => {
  return (
    isVisible && (
      <section className="load-more">
        <button
          className={`load-more__button ${
            isDisable ? 'load-more__button_disabled' : ''
          }`}
          type="submit"
          onClick={setIndex}
        >
          Еще
        </button>
      </section>
    )
  );
};

export default LoadMore;
