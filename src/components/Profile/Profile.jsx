export default function Profile({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
}) {
  return (
    <section className="profile">
      <div className="profile__avatar-container">
        <button
          type="button"
          className="profile__avatar-edit"
          onClick={onEditAvatar}
          aria-label="Change profile picture"
        />
      </div>

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
        aria-label="Add new place"
      />
    </section>
  );
}
