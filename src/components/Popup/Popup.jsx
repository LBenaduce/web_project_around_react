import { cloneElement, isValidElement } from "react";
import "./popup.css";

export default function Popup({
  isOpen,
  onClose,
  title,
  submitText = "Salvar",
  children,
  containerClassName = "",
  closeButtonClassName = "popup__close",
}) {
  if (!isOpen) {
    return null;
  }

  function handleOverlayClick() {
    onClose?.();
  }

  function handleContentClick(e) {
    e.stopPropagation();
  }

  const injectedChildren = isValidElement(children)
    ? cloneElement(children, { submitText })
    : children;

  const containerClasses = ["popup__conteiner", containerClassName]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="popup" onClick={handleOverlayClick}>
      <div className={containerClasses} onClick={handleContentClick}>
        <button
          type="button"
          className={closeButtonClassName}
          aria-label="Fechar"
          onClick={onClose}
        />
        {title ? <h2 className="popup__text">{title}</h2> : null}
        {injectedChildren}
      </div>
    </div>
  );
}
