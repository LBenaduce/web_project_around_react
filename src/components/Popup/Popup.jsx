import "./popup.css";

export default function Popup({
  isOpen,
  title,
  children,
  onClose,
  isImage = false,
}) {
  return (
    <div
      className={`popup ${isOpen ? "popup_opened" : "popup-hidden"}`}
      onMouseDown={onClose}
    >
      <div
        className={`popup__conteiner ${
          isImage ? "popup__conteiner_type_image" : ""
        }`}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="popup__close"
          onClick={onClose}
          aria-label="Close popup"
        />

        {!isImage && <h2 className="popup__title">{title}</h2>}

        {children}
      </div>
    </div>
  );
}
