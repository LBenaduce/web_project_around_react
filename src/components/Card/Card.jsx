export default function Card({ card, onCardLike }) {
  const likeButtonClassName = `card__like-button ${
    card.isLiked ? "card__like-button_active" : ""
  }`;

  return (
    <li className="card">
      <button
        type="button"
        className="card__delete-button"
        aria-label="Delete card"
      />

      <img className="card__image" src={card.link} alt={card.name} />

      <div className="card__description">
        <h2 className="card__title">{card.name}</h2>

        <button
          type="button"
          className={likeButtonClassName}
          aria-label="Like"
          onClick={() => onCardLike(card)}
        />
      </div>
    </li>
  );
}
