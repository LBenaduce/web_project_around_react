import "./Profile.css";
import avatar from "../../images/avatar.png";

export default function Profile({ onEditProfile, onAddPlace, onEditAvatar }) {
  return (
    <section className="profile">
      <div
        className="profile__avatar-container"
        onClick={onEditAvatar}
        role="button"
        tabIndex={0}
      >
        <img className="profile__avatar" src={avatar} alt="Avatar do usuário" />
        <div className="profile__avatar-edit" />
      </div>

      <div className="profile__info">
        <div className="profile__title-row">
          <h1 className="profile__title">Jacques Cousteau</h1>
          <button
            className="profile__edit-button"
            type="button"
            aria-label="Editar perfil"
            onClick={onEditProfile}
          />
        </div>

        <p className="profile__description">Explorer</p>
      </div>

      <button
        className="profile__add-button"
        type="button"
        aria-label="Adicionar card"
        onClick={onAddPlace}
      />
    </section>
  );
}
