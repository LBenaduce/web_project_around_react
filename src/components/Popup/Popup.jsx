import "./popup.css";

export default function Popup({ isOpen, title, children, onClose }) {
  return (
    <section className={`popup ${isOpen ? "" : "popup-hidden"}`}>
      <div className="popup__conteiner popup__conteiner_type_form">
        <button
          type="button"
          className="popup__close"
          onClick={onClose}
          aria-label="Close popup"
        />

        <h2 className="popup__text">{title}</h2>

        {children}
      </div>
    </section>
  );
}
