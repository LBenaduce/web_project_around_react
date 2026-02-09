import "./App.css";
import { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import api from "./utils/api";
import CurrentUserContext from "./contexts/CurrentUserContext";

export default function App() {
  const [popup, setPopup] = useState(null);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    about: "",
    avatar: "",
    _id: "",
  });
  const [cards, setCards] = useState([]);

  function handleOpenPopup(name) {
    setPopup(name);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCardList()])
      .then(([userData, cardsData]) => {
        const user = userData?.user ?? userData;
        setCurrentUser(user);
        setCards(Array.isArray(cardsData) ? cardsData : []);
      })
      .catch((err) => console.error("API ERROR:", err));
  }, []);

  function handleCardLike(card) {
    const userId = currentUser?._id;
    if (!userId) return;

    const isLiked = card?.isLiked || 
      (Array.isArray(card?.likes) && card.likes.some((like) =>
        typeof like === "string" ? like === userId : like?._id === userId
      ));

    console.log("Vai", isLiked ? "DESCURTIR" : "CURTIR", card._id);

    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((res) => {
        const updatedCard = res.card ?? res;
        setCards((state) =>
          state.map((c) => (c._id === updatedCard._id ? updatedCard : c))
        );
      })
      .catch((err) => console.error("LIKE ERROR:", err));
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((err) => console.error("DELETE ERROR:", err));
  }

  function handleUpdateUser(data) {
    api
      .setUserInfo(data)
      .then((newData) => {
        const user = newData?.user ?? newData;
        setCurrentUser(user);
        handleClosePopup();
      })
      .catch((err) => console.error("UPDATE USER ERROR:", err));
  }

  function handleUpdateAvatar(data) {
    api
      .setUserAvatar(data)
      .then((newData) => {
        const user = newData?.user ?? newData;
        setCurrentUser(user);
        handleClosePopup();
      })
      .catch((err) => console.error("UPDATE AVATAR ERROR:", err));
  }

  function handleAddPlaceSubmit(data) {
    api
      .addCard(data)
      .then((newCard) => {
        setCards((state) => [newCard, ...state]);
        handleClosePopup();
      })
      .catch((err) => console.error("ADD CARD ERROR:", err));
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
          popup={popup}
          onClosePopup={handleClosePopup}
          onUpdateUser={handleUpdateUser}
          onUpdateAvatar={handleUpdateAvatar}
          onAddPlaceSubmit={handleAddPlaceSubmit}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}
