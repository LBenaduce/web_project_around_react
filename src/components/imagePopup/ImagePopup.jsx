import "./imagePopup.css";

export default function ImagePopup({ card, isOpen, onClose }) {
  return (
    <section className={`popup ${isOpen ? "" : "popup-hidden"}`}>
      <div className="popup__conteiner-zoom">
        <button
          type="button"
          className="popup__close-zoom"
          onClick={onClose}
          aria-label="Close popup"
        />
        {card && <img className="popup__zoom" src={card.link} alt={card.name} />}
        {card && <p className="popup__caption">{card.name}</p>}
      </div>
    </section>
  );
}
