export default function Profile({ onEditProfile, onAddPlace, onEditAvatar }) {
  return (
    <section className="profile">
      <button
        type="button"
        className="profile__avatar-button"
        onClick={onEditAvatar}
        aria-label="Edit avatar"
      >
        <img
          className="profile__avatar"
          src="https://i.pravatar.cc/300"
          alt="Profile avatar"
        />
      </button>

      <div className="profile__info">
        <h1 className="profile__name">Jacques Cousteau</h1>
        <p className="profile__about">Explorer</p>

        <button
          type="button"
          className="profile__edit-button"
          onClick={onEditProfile}
          aria-label="Edit profile"
        />
      </div>

      <button
        type="button"
        className="profile__add-button"
        onClick={onAddPlace}
        aria-label="Add place"
      />
    </section>
  );
}
