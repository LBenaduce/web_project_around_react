
export default function Popup({ title, children, onClose }) {
  return (
    <div className="popup">
      <div className="popup__content">
        <button className="popup__close" type="button" onClick={onClose} />
        <h3 className="popup__title">{title}</h3>
        {children}
      </div>
    </div>
  );
}
