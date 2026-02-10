import Popup from "../Popup/Popup";
import "./imagePopup.css";

export default function ImagePopup({ card, isOpen, onClose }) {
  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      containerClassName="popup__conteiner_type_image"
      closeButtonClassName="popup__close-zoom"
    >
      <figure className="popup__figure">
        <img
          className="popup__image"
          src={card?.link}
          alt={card?.name || "Imagem ampliada"}
        />
        <figcaption className="popup__caption">{card?.name}</figcaption>
      </figure>
    </Popup>
  );
}
