import "./Profile.css";

export default function Profile({ onEditProfile, onAddPlace, onEditAvatar }) {
  return (
    <section className="profile">
      {/* Avatar */}
      <div
        className="profile__avatar-container"
        onClick={onEditAvatar}
        role="button"
        tabIndex={0}
      >
        <img
          className="profile__avatar"
          src="https://via.placeholder.com/120"
          alt="Avatar do usuário"
        />
        <div className="profile__avatar-edit" />
      </div>

      {/* Info do usuário */}
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

      {/* Botão adicionar */}
      <button
        className="profile__add-button"
        type="button"
        aria-label="Adicionar card"
        onClick={onAddPlace}
      />
    </section>
  );
}
