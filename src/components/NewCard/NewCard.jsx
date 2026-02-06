import { useState } from "react";

export default function NewCard({ onAddPlaceSubmit }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlaceSubmit({ name, link });
  }

  return (
    <form className="popup__form" onSubmit={handleSubmit} noValidate>
      <input
        className="popup__input"
        value={name}
        onChange={(e) => setName(e.target.value)}
        minLength="2"
        maxLength="30"
        required
      />
      <input
        className="popup__input"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        type="url"
        required
      />
      <button className="popup__button" type="submit">
        Criar
      </button>
    </form>
  );
}
