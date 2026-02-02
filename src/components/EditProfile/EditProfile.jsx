export default function EditProfile() {
  return (
    <form className="popup__form" name="edit-profile" noValidate>
      <input
        type="text"
        className="popup__input"
        name="name"
        id="profile-name"
        placeholder="Name"
        minLength="2"
        maxLength="40"
        required
      />
      <span className="popup__input-error" id="profile-name-error" />

      <input
        type="text"
        className="popup__input"
        name="about"
        id="profile-about"
        placeholder="About"
        minLength="2"
        maxLength="200"
        required
      />
      <span className="popup__input-error" id="profile-about-error" />

      <button type="submit" className="popup__save">
        Save
      </button>
    </form>
  );
}
