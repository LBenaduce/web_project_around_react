import { useContext, useEffect, useRef } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function EditAvatar({ onUpdateAvatar }) {
  const { currentUser } = useContext(CurrentUserContext);
  const avatarRef = useRef(null);

  useEffect(() => {
    if (avatarRef.current) {
      avatarRef.current.value = "";
    }
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({ avatar: avatarRef.current.value });
  }

  return (
    <form
      className="popup__form"
      name="avatar-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <input
        ref={avatarRef}
        className="popup__input"
        type="url"
        name="avatar"
        placeholder="Link da imagem"
        required
      />
      <span className="popup__error" />

      <button className="popup__save" type="submit">
        Salvar
      </button>
    </form>
  );
}
