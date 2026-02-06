import { useContext } from "react";
import Card from "../Card/Card";
import Popup from "../Popup/Popup";
import EditProfile from "../EditProfile/EditProfile";
import EditAvatar from "../EditAvatar/EditAvatar";
import NewCard from "../NewCard/NewCard";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function Main({
  cards,
  onCardLike,
  onCardDelete,
  onCardClick,
  onOpenPopup,,
  popup,
  onClosePopup,
  onUpdateUser,
  onUpdateAvatar,
  onAddPlaceSubmit,
}) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div
          className="profile__avatar-container"
          onClick={() => onOpenPopup?.("edit-avatar")}
          role="button"
          tabIndex={0}
        >
          <img
            className="profile__avatar"
            src={currentUser.avatar}
            alt="Avatar do perfil"
          />
          <div className="profile__avatar-overlay" />
        </div>

        <div className="profile__text">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button
            type="button"
            className="profile__pen"
            aria-label="Editar perfil"
            onClick={() => onOpenPopup?.("edit-profile")}
          />
          <p className="profile__description">{currentUser.about}</p>
        </div>

        <button
          type="button"
          className="profile__plus"
          aria-label="Adicionar novo card"
          onClick={() => onOpenPopup?.("new-card")}
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
              onCardClick={onCardClick}
            />
          ))}
        </ul>
      </section>
      <Popup isOpen={popup === "edit-profile"} onClose={onClosePopup}>
        <EditProfile onUpdateUser={onUpdateUser} />
      </Popup>

      <Popup isOpen={popup === "edit-avatar"} onClose={onClosePopup}>
        <EditAvatar onUpdateAvatar={onUpdateAvatar} />
      </Popup>

      <Popup isOpen={popup === "new-card"} onClose={onClosePopup}>
        <NewCard onAddPlaceSubmit={onAddPlaceSubmit} />
      </Popup>
    </main>
  );
}
