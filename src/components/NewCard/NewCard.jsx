export default function NewCard() {
  return (
    <form className="popup__profile" name="new-card" noValidate>
      <input
        type="text"
        className="popup__name"
        name="name"
        id="place-name"
        placeholder="Title"
        minLength="1"
        maxLength="30"
        required
      />
      <span className="popup__error" id="place-name-error" />

      <input
        type="url"
        className="popup__avatar"
        name="link"
        id="place-link"
        placeholder="Image link"
        required
      />
      <span className="popup__error" id="place-link-error" />

      <button type="submit" className="popup__save">
        Create
      </button>
    </form>
  );
}
