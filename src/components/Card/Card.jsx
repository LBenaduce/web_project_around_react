import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import likeIcon from "../../images/like.svg";
import likedIcon from "../../images/liked.svg";
import trashIcon from "../../images/trash.svg";
import "./Card.css";

export default function Card({ card, onCardLike, onCardDelete, onCardClick }) {
  const { currentUser } = useContext(CurrentUserContext);

  const ownerId =
    typeof card?.owner === "string" ? card.owner : card?.owner?._id;

  const isOwn = ownerId && currentUser?._id && ownerId === currentUser._id;

  const likes = Array.isArray(card?.likes) ? card.likes : [];
  const isLiked = card?.isLiked || 
    likes.some((like) =>
      typeof like === "string"
        ? like === currentUser?._id
        : like?._id === currentUser?._id
    );

  return (
    <li className="card">
      <img
        className="card__image"
        src={card?.link || ""}
        alt={card?.name || "Imagem do card"}
        onClick={() => onCardClick(card)}
      />

      {isOwn && (
        <button
          type="button"
          className="card__delete-button"
          aria-label="Excluir"
          onClick={() => onCardDelete(card)}
        >
          <img className="card__icon" src={trashIcon} alt="" />
        </button>
      )}

      <div className="card__description">
        <h2 className="card__title">{card?.name}</h2>

        <button
          type="button"
          className="card__like-button"
          aria-label={isLiked ? "Descurtir" : "Curtir"}
          onClick={() => {
            console.log("CLICOU NO LIKE DO CARD:", card._id);
            onCardLike(card);
          }}
        >
          <img
            className="card__icon"
            src={isLiked ? likedIcon : likeIcon}
            alt=""
          />
        </button>
      </div>
    </li>
  );
}
