import "./popup.css";

export default function Popup({ isOpen, title, children, onClose, isImage = false }) {
  return (
    <div
      className={`popup ${isOpen ? "" : "popup-hidden"}`}
      onMouseDown={onClose}
    >
      <div
        className={isImage ? "popup__conteiner-zoom" : "popup__conteiner"}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className={isImage ? "popup__close-zoom" : "popup__close"}
          onClick={onClose}
          aria-label="Close popup"
        />
        {!isImage && title ? <h2 className="popup__text">{title}</h2> : null}
        {children}
      </div>
    </div>
  );
}
