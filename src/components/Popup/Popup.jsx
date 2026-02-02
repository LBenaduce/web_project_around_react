export default function Popup({ title, children, onClose }) {
  return (
    <div className="popup popup_opened" onMouseDown={onClose}>
      <div
        className="popup__container"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="popup__close"
          onClick={onClose}
          aria-label="Close popup"
        />
        <h2 className="popup__title">{title}</h2>
        {children}
      </div>
    </div>
  );
}
