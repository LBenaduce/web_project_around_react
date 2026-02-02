import "./Card.css";

export default function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const { name, link, isLiked } = card;

  return (
    <li className="card">
      <img
        className="card__image"
        src={link}
        alt={name}
        onClick={() => onCardClick(card)}
      />

      <button
        className="card__delete-button"
        type="button"
        aria-label="Excluir"
        onClick={() => onCardDelete(card)}
      />

      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          className={`card__like-button ${
            isLiked ? "card__like-button_active" : ""
          }`}
          type="button"
          aria-label="Curtir"
          onClick={() => onCardLike(card)}
        />
      </div>
    </li>
  );
}
