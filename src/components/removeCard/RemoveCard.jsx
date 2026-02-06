export default function RemoveCard({ onConfirm }) {
  function handleSubmit(e) {
    e.preventDefault();
    onConfirm();
  }

  return (
    <form className="popup__form" name="remove-card-form" onSubmit={handleSubmit} noValidate>
      <button className="button popup__button" type="submit">
        Yes
      </button>
    </form>
  );
}
