import { useContext } from "react";
import Card from "../Card/Card";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function Main({
  cards,
  onCardLike,
  onCardDelete,
  onOpenPopup,
}) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__image-container">
          <img
            className="profile__image"
            src={currentUser.avatar}
            alt="Avatar"
          />
          <button
            className="profile__image-edit-button"
            onClick={() => onOpenPopup("edit-avatar")}
          />
        </div>

        <div className="profile__info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <p className="profile__description">{currentUser.about}</p>
          <button
            className="profile__edit-button"
            onClick={() => onOpenPopup("edit-profile")}
          />
        </div>

        <button
          className="profile__add-button"
          onClick={() => onOpenPopup("new-card")}
        />
      </section>

      <section className="cards">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}
