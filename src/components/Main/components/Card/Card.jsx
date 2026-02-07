import trashIcon from "../../../../assets/images/Trash.svg";
import hearthIcon from "../../../../assets/images/hearth.svg";
import Union from "../../../../assets/images/Union.svg";
import { useContext } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";

export default function Card({ card, onCardLike, onOpenPopupConfirmation, onCardClick }) {
  const { currentUser } = useContext(CurrentUserContext);

  const { name, link, likes = [], owner } = card;

  const ownerId = typeof owner === "string" ? owner : owner?._id;
  const isOwn = ownerId && currentUser?._id && ownerId === currentUser._id;

  const isLiked = likes.some((like) => {
    const likeId = typeof like === "string" ? like : like?._id;
    return likeId === currentUser?._id;
  });

  function handleLikeClick() {
    onCardLike?.(card);
  }

  function handleOpenPopupConfirmationClick() {
    onOpenPopupConfirmation?.(card);
  }

  return (
    <li className="photos__card">
      <img
        className="photos__card-image"
        src={link}
        alt={name}
        onClick={() => onCardClick?.(card)}
      />

      {isOwn && (
        <img
          onClick={handleOpenPopupConfirmationClick}
          className="photos__delete-icon"
          src={trashIcon}
          alt="delete card"
        />
      )}

      <div className="photos__elements">
        <h2 className="photos__elements-text">{name}</h2>
        <img
          onClick={handleLikeClick}
          className="photos__like"
          src={isLiked ? Union : hearthIcon}
          alt={isLiked ? "liked" : "not liked"}
        />
      </div>
    </li>
  );
}
