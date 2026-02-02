export default function NewCard() {
  return (
    <form className="popup__form" name="new-card" noValidate>
      <input
        type="text"
        className="popup__input"
        name="name"
        id="place-name"
        placeholder="Title"
        minLength="1"
        maxLength="30"
        required
      />
      <span className="popup__input-error" id="place-name-error" />

      <input
        type="url"
        className="popup__input"
        name="link"
        id="place-link"
        placeholder="Image link"
        required
      />
      <span className="popup__input-error" id="place-link-error" />

      <button type="submit" className="popup__save">
        Create
      </button>
    </form>
  );
}
