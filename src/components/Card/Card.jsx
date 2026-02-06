import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./Card.css";

export default function Card({ card, onCardLike, onCardDelete, onCardClick }) {
  const { currentUser } = useContext(CurrentUserContext);

  const ownerId =
    typeof card.owner === "string" ? card.owner : card.owner?._id;

  const isOwn = ownerId === currentUser?._id;

  const isLiked = card.likes?.some((u) => u._id === currentUser?._id);

  return (
    <li className="card">
      <img
        className="card__image"
        src={card.link}
        alt={card.name}
        onClick={() => onCardClick?.(card)}
      />

      {isOwn && (
        <button
          type="button"
          className="card__delete-button"
          aria-label="Excluir"
          onClick={() => onCardDelete(card)}
        />
      )}

      <div className="card__description">
        <h2 className="card__title">{card.name}</h2>

        <button
          type="button"
          className={`card__like-button ${
            isLiked ? "card__like-button_active" : ""
          }`}
          aria-label="Curtir"
          onClick={() => onCardLike(card)}
        />
      </div>
    </li>
  );
}
