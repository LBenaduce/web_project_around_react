import { useState } from "react";

export default function NewCard({ onAddPlaceSubmit }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlaceSubmit({ name, link });
  }

  return (
    <form className="popup__form" name="new-card-form" onSubmit={handleSubmit} noValidate>
      <label className="popup__label">
        <input
          className="popup__input popup__input_type_card-name"
          minLength="2"
          maxLength="30"
          name="name"
          placeholder="Title"
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span className="popup__error" />
      </label>

      <label className="popup__label">
        <input
          className="popup__input popup__input_type_url"
          name="link"
          placeholder="Image link"
          required
          type="url"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <span className="popup__error" />
      </label>

      <button className="button popup__button" type="submit">
        Create
      </button>
    </form>
  );
}
