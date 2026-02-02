export default function EditAvatar() {
  return (
    <form className="popup__profile" name="edit-avatar" noValidate>
      <input
        type="url"
        className="popup__avatar"
        name="avatar"
        id="avatar-link"
        placeholder="Image link"
        required
      />
      <span className="popup__error" id="avatar-link-error" />

      <button type="submit" className="popup__save">
        Save
      </button>
    </form>
  );
}
