import { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function EditProfile({ onUpdateUser }) {
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
    <form className="popup__form" name="profile-form" onSubmit={handleSubmit} noValidate>
      <label className="popup__label">
        <input
          className="popup__input popup__input_type_name"
          minLength="2"
          maxLength="40"
          name="name"
          placeholder="Name"
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span className="popup__error" />
      </label>

      <label className="popup__label">
        <input
          className="popup__input popup__input_type_description"
          minLength="2"
          maxLength="200"
          name="about"
          placeholder="About me"
          required
          type="text"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />
        <span className="popup__error" />
      </label>

      <button className="button popup__button" type="submit">
        Save
      </button>
    </form>
  );
}
