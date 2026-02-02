import "./Profile.css";
import avatar from "../../images/avatar.png";

export default function Profile({ onEditProfile, onAddPlace, onEditAvatar }) {
  return (
    <section className="profile">
      <button
        type="button"
        className="profile__avatar-container"
        onClick={onEditAvatar}
        aria-label="Edit avatar"
      >
        <img
          className="profile__avatar"
          src={avatar}
          alt="Profile avatar"
        />
      </button>

      <div className="profile__info">
        <div className="profile__title-row">
          <h1 className="profile__title">Jacques Cousteau</h1>
          <button
            type="button"
            className="profile__edit-button"
            onClick={onEditProfile}
            aria-label="Edit profile"
          />
        </div>
        <p className="profile__description">Explorer</p>
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
