import { useEffect, useState } from "react";

import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

import Popup from "./Popup/Popup";
import EditProfile from "./EditProfile/EditProfile";
import EditAvatar from "./EditAvatar/EditAvatar";
import NewCard from "./NewCard/NewCard";
import ImagePopup from "./imagePopup/ImagePopup";
import RemoveCard from "./removeCard/RemoveCard";

import api from "../utils/api";
import CurrentUserContext from "../contexts/CurrentUserContext";

export default function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  const [activePopup, setActivePopup] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardToRemove, setCardToRemove] = useState(null);

  function openPopup(name) {
    setActivePopup(name);
  }

  function closeAllPopups() {
    setActivePopup(null);
    setSelectedCard(null);
    setCardToRemove(null);
  }

  useEffect(() => {
    api.getUserInfo().then(setCurrentUser).catch(console.error);
    api.getCardList().then(setCards).catch(console.error);
  }, []);

  function handleCardClick(card) {
    setSelectedCard(card);
    openPopup("image");
  }

  function handleCardLike(card) {
    const isLiked = card.likes?.some((u) => u._id === currentUser._id);

    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) =>
        setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)))
      )
      .catch(console.error);
  }

  function handleCardDeleteRequest(card) {
    setCardToRemove(card);
    openPopup("remove-card");
  }

  function handleCardDelete() {
    if (!cardToRemove) return;

    api
      .deleteCard(cardToRemove._id)
      .then(() => setCards((state) => state.filter((c) => c._id !== cardToRemove._id)))
      .then(closeAllPopups)
      .catch(console.error);
  }

  function handleUpdateUser(data) {
    api
      .setUserInfo(data)
      .then((newData) => setCurrentUser(newData))
      .then(closeAllPopups)
      .catch(console.error);
  }

  function handleUpdateAvatar(data) {
    api
      .setUserAvatar(data)
      .then((newData) => setCurrentUser(newData))
      .then(closeAllPopups)
      .catch(console.error);
  }

  function handleAddPlaceSubmit(data) {
    api
      .addCard(data)
      .then((newCard) => setCards((state) => [newCard, ...state]))
      .then(closeAllPopups)
      .catch(console.error);
  }

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      <div className="page">
        <Header />
        <Main
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDeleteRequest}
          onCardClick={handleCardClick}
          onEditProfile={() => openPopup("edit-profile")}
          onEditAvatar={() => openPopup("edit-avatar")}
          onAddPlace={() => openPopup("new-card")}
        />
        <Footer />

        <Popup isOpen={activePopup === "edit-profile"} title="Edit profile" onClose={closeAllPopups}>
          <EditProfile onUpdateUser={handleUpdateUser} />
        </Popup>

        <Popup isOpen={activePopup === "edit-avatar"} title="Change avatar" onClose={closeAllPopups}>
          <EditAvatar onUpdateAvatar={handleUpdateAvatar} />
        </Popup>

        <Popup isOpen={activePopup === "new-card"} title="New place" onClose={closeAllPopups}>
          <NewCard onAddPlaceSubmit={handleAddPlaceSubmit} />
        </Popup>

        <Popup isOpen={activePopup === "remove-card"} title="Are you sure?" onClose={closeAllPopups}>
          <RemoveCard onConfirm={handleCardDelete} />
        </Popup>

        <ImagePopup card={selectedCard} isOpen={activePopup === "image"} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}
