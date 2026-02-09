import { cloneElement, isValidElement } from "react";
import "./popup.css";

export default function Popup({
  isOpen,
  onClose,
  title,
  submitText = "Salvar",
  children,
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

  return (
    <div className="popup" onClick={handleOverlayClick}>
      <div className="popup__conteiner" onClick={handleContentClick}>
        <button
          type="button"
          className="popup__close"
          aria-label="Fechar"
          onClick={onClose}
        />
        {title ? <h2 className="popup__text">{title}</h2> : null}
        {injectedChildren}
      </div>
    </div>
  );
}
