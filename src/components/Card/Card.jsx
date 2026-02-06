import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function Card({ card, onCardLike, onCardDelete }) {
  const { currentUser } = useContext(CurrentUserContext);

  const isOwn = card.owner === currentUser._id;
  const isLiked = card.isLiked;

  const cardLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_is-active" : ""
  }`;

  return (
    <li className="card">
      <img className="card__image" src={card.link} alt={card.name} />

      {isOwn && (
        <button
          className="card__delete-button"
          onClick={() => onCardDelete(card)}
        />
      )}

      <div className="card__description">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-container">
          <button
            className={cardLikeButtonClassName}
            onClick={() => onCardLike(card)}
          />
          <span className="card__like-count">
            {card.likes?.length || 0}
          </span>
        </div>
      </div>
    </li>
  );
}
