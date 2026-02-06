import { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function EditProfile() {
  const { currentUser, handleUpdateUser } =
    useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setName(currentUser.name || "");
    setDescription(currentUser.about || "");
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    handleUpdateUser({ name, about: description });
  }

  return (
    <form className="popup__form" onSubmit={handleSubmit} noValidate>
      <input
        className="popup__input"
        value={name}
        onChange={(e) => setName(e.target.value)}
        minLength="2"
        maxLength="40"
        required
      />
      <input
        className="popup__input"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        minLength="2"
        maxLength="200"
        required
      />
      <button className="popup__button" type="submit">
        Salvar
      </button>
    </form>
  );
}
