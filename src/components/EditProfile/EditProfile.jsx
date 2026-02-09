import { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function EditProfile({ onUpdateUser, submitText }) {
  const { currentUser } = useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [about, setAbout] = useState("");

  useEffect(() => {
    setName(currentUser.name || "");
    setAbout(currentUser.about || "");
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({ name, about });
  }

  return (
    <form className="popup__form" onSubmit={handleSubmit} noValidate>
      <input
        className="popup__input"
        name="name"
        minLength="2"
        maxLength="40"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <span className="popup__error" />

      <input
        className="popup__input"
        name="about"
        minLength="2"
        maxLength="200"
        required
        value={about}
        onChange={(e) => setAbout(e.target.value)}
      />
      <span className="popup__error" />

      <button className="popup__save" type="submit">
        {submitText}
      </button>
    </form>
  );
}
