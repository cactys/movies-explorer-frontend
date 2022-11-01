const MoviesCard = ({ card }) => {
  return (
    <div className="movies-card">
      <div className="movies-card__header">
        <div className="movies-card__description">
          <h2 className="movies-card__title">{card.title}</h2>
          <p className="movies-card__duration">{card.duration}</p>
        </div>
        <div className="movies-card__btn" />
      </div>
      <img className="movies-card__image" alt={card.duration} src={card.image} />
    </div>
  )
}

export default MoviesCard