import { useContext } from "react";
import CurrentUserContext from "/Users/luizbenadue/dev/web_project_around_react/src/contexts/CurrentUserContext.js";

export default function PopupConfirmation() {
  const userContext = useContext(CurrentUserContext);
  const { handleCardDelete, popupConfirmation } = userContext;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleCardDelete(popupConfirmation);
  };

  return (
    <form
      onSubmit={handleSubmit}
      id="confirm ation-form"
      className="popup__forms popup__forms-confirmation"
      noValidate
    >
      <button className="popup__button" type="submit">
        Sim
      </button>
    </form>
  );
}
