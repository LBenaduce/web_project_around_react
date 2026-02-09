import { useEffect, useState } from "react";

export default function NewCard({ onAddPlaceSubmit, submitText }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    setName("");
    setLink("");
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlaceSubmit({ name, link });
  }

  return (
    <form className="popup__form" onSubmit={handleSubmit} noValidate>
      <input
        className="popup__input"
        type="text"
        name="name"
        placeholder="Nome"
        minLength="2"
        maxLength="30"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <span className="popup__error" />

      <input
        className="popup__input"
        type="url"
        name="link"
        placeholder="URL da imagem"
        required
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <span className="popup__error" />

      <button className="popup__save" type="submit">
        {submitText}
      </button>
    </form>
  );
}
