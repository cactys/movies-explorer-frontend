import './MoviesNotFound.css';

const MoviesNotFound = ({ errorMessage }) => {
  return (
    <section className="movies-not-found">
      <h3 className="movies-not-found__title">{errorMessage}</h3>
    </section>
  );
};

export default MoviesNotFound;
