import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Popup from "../Popup/Popup";
import EditProfile from "../EditProfile/EditProfile";
import EditAvatar from "../EditAvatar/EditAvatar";
import NewCard from "../NewCard/NewCard";
import api from "../../utils/api";
import CurrentUserContext from "../../contexts/CurrentUserContext";

export default function App() {
  const [popup, setPopup] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  function handleOpenPopup(name) {
    setPopup(name);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  useEffect(() => {
    api.getUserInfo().then(setCurrentUser);
    api.getCardList().then(setCards);
  }, []);

  function handleCardLike(card) {
    api
      .changeLikeCardStatus(card._id, !card.isLiked)
      .then((newCard) =>
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        )
      );
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() =>
        setCards((state) => state.filter((c) => c._id !== card._id))
      );
  }

  function handleUpdateUser(data) {
    api.setUserInfo(data).then((newData) => {
      setCurrentUser(newData);
      handleClosePopup();
    });
  }

  function handleUpdateAvatar(data) {
    api.setUserAvatar(data).then((newData) => {
      setCurrentUser(newData);
      handleClosePopup();
    });
  }

  function handleAddPlaceSubmit(data) {
    api.addCard(data).then((newCard) => {
      setCards((state) => [newCard, ...state]);
      handleClosePopup();
    });
  }

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, handleUpdateUser, handleUpdateAvatar }}
    >
      <div className="page">
        <Header />
        <Main
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          onOpenPopup={handleOpenPopup}
        />
        <Footer />

        <Popup isOpen={popup === "edit-profile"} onClose={handleClosePopup}>
          <EditProfile />
        </Popup>

        <Popup isOpen={popup === "edit-avatar"} onClose={handleClosePopup}>
          <EditAvatar />
        </Popup>

        <Popup isOpen={popup === "new-card"} onClose={handleClosePopup}>
          <NewCard onAddPlaceSubmit={handleAddPlaceSubmit} />
        </Popup>
      </div>
    </CurrentUserContext.Provider>
  );
}
