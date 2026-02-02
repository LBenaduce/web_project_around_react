export default function EditProfile() {
  return (
    <form className="popup__profile" name="edit-profile" noValidate>
      <input
        type="text"
        className="popup__name"
        name="name"
        id="profile-name"
        placeholder="Name"
        minLength="2"
        maxLength="40"
        required
      />
      <span className="popup__error" id="profile-name-error" />

      <input
        type="text"
        className="popup__about"
        name="about"
        id="profile-about"
        placeholder="About"
        minLength="2"
        maxLength="200"
        required
      />
      <span className="popup__error" id="profile-about-error" />

      <button type="submit" className="popup__save">
        Save
      </button>
    </form>
  );
}
