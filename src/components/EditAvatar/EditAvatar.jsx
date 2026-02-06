import { useRef } from "react";

export default function EditAvatar({ onUpdateAvatar }) {
  const avatarRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({ avatar: avatarRef.current.value });
  }

  return (
    <form className="popup__form" name="avatar-form" onSubmit={handleSubmit} noValidate>
      <label className="popup__label">
        <input
          className="popup__input popup__input_type_avatar"
          name="avatar"
          placeholder="Avatar link"
          required
          type="url"
          ref={avatarRef}
        />
        <span className="popup__error" />
      </label>

      <button className="button popup__button" type="submit">
        Save
      </button>
    </form>
  );
}
