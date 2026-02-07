import plusSign from "../../../../../assets/images/plussign.svg";

export default function ImagePopup({ card, onClose }) {
  const { name, link } = card || {};

  function handleContentClick(e) {
    e.stopPropagation();
  }

  if (!card) return null;

  return (
    <div className="popup-sobreposition" onClick={onClose}>
      <div className="popup-image" onClick={handleContentClick}>
        <img className="popup-image__image" src={link} alt={name} />
        <p className="popup-image__text">{name}</p>
        <img
          src={plusSign}
          alt="close"
          className="popup__close-button popup__close-button_image"
          onClick={onClose}
        />
      </div>
    </div>
  );
}
