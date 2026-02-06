import { useContext, useRef } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function EditAvatar() {
  const avatarRef = useRef();
  const { handleUpdateAvatar } = useContext(CurrentUserContext);

  function handleSubmit(e) {
    e.preventDefault();
    handleUpdateAvatar({ avatar: avatarRef.current.value });
  }

  return (
    <form className="popup__form" onSubmit={handleSubmit} noValidate>
      <input
        className="popup__input"
        type="url"
        ref={avatarRef}
        required
      />
      <button className="popup__button" type="submit">
        Salvar
      </button>
    </form>
  );
}
