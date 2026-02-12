import { useContext } from "react";
import Card from "../Card/Card";
import Popup from "../Popup/Popup";
import EditProfile from "../EditProfile/EditProfile";
import EditAvatar from "../EditAvatar/EditAvatar";
import NewCard from "../NewCard/NewCard";
import ImagePopup from "../imagePopup/ImagePopup";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./Main.css";

export default function Main({
  cards,
  onCardLike,
  onCardDelete,
  onCardClick,
  selectedCard,
  onOpenPopup,
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
          onClick={() => onOpenPopup("edit-avatar")}
          role="button"
          tabIndex={0}
        >
          {currentUser.avatar ? (
            <img
              className="profile__avatar"
              src={currentUser.avatar}
              alt="Avatar do perfil"
            />
          ) : null}
          <div className="profile__avatar-overlay" />
        </div>

        <div className="profile__text">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button
            type="button"
            className="profile__pen"
            aria-label="Editar perfil"
            onClick={() => onOpenPopup("edit-profile")}
          />
          <p className="profile__description">{currentUser.about}</p>
        </div>

        <button
          type="button"
          className="profile__plus"
          aria-label="Adicionar novo card"
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
              onCardClick={onCardClick}
            />
          ))}
        </ul>
      </section>

      <Popup
        isOpen={popup === "edit-profile"}
        onClose={onClosePopup}
        title="Editar perfil"
        submitText="Salvar"
      >
        <EditProfile onUpdateUser={onUpdateUser} />
      </Popup>

      <Popup
        isOpen={popup === "edit-avatar"}
        onClose={onClosePopup}
        title="Alterar avatar"
        submitText="Salvar"
      >
        <EditAvatar onUpdateAvatar={onUpdateAvatar} />
      </Popup>

      <Popup
        isOpen={popup === "new-card"}
        onClose={onClosePopup}
        title="Novo local"
        submitText="Criar"
      >
        <NewCard onAddPlaceSubmit={onAddPlaceSubmit} />
      </Popup>

      <ImagePopup
        card={selectedCard}
        isOpen={popup === "image"}
        onClose={onClosePopup}
      />
    </main>
  );
}
