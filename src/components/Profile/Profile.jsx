import "./Profile.css";
import avatar from "../../images/avatar.png";

export default function Profile({ onEditProfile, onAddPlace, onEditAvatar }) {
  return (
    <section className="profile">
      <div className="profile__avatar-container" onClick={onEditAvatar}>
        <img className="profile__avatar" src={avatar} alt="Avatar" />
        <div className="profile__avatar-edit" />
      </div>

      <div className="profile__info">
        <div className="profile__title-row">
          <h1 className="profile__title">Jacques Cousteau</h1>
          <button
            type="button"
            className="profile__edit-button"
            aria-label="Editar perfil"
            onClick={onEditProfile}
          />
        </div>

        <p className="profile__description">Explorer</p>
      </div>

      <button
        type="button"
        className="profile__add-button"
        aria-label="Adicionar card"
        onClick={onAddPlace}
      />
    </section>
  );
}
