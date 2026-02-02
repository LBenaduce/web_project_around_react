import { useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";

export default function App() {
  const [popup, setPopup] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  const [cards, setCards] = useState([
    {
      _id: "1",
      name: "Yosemite Valley",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
      isLiked: false,
    },
    {
      _id: "2",
      name: "Lake Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
      isLiked: false,
    },
  ]);

  function closeAllPopups() {
    setPopup(null);
    setSelectedCard(null);
  }

  function handleEditProfileClick() {
    setPopup("edit-profile");
  }

  function handleAddPlaceClick() {
    setPopup("new-card");
  }

  function handleEditAvatarClick() {
    setPopup("edit-avatar");
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setPopup("image");
  }

  function handleCardLike(card) {
    setCards((prev) =>
      prev.map((c) =>
        c._id === card._id ? { ...c, isLiked: !c.isLiked } : c
      )
    );
  }

  function handleCardDelete(card) {
    setCards((prev) => prev.filter((c) => c._id !== card._id));
  }

  return (
    <div className="page">
      <Header />

      <Main
        cards={cards}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
      />

      <Footer />

      <Popup isOpen={popup !== null} onClose={closeAllPopups} />
    </div>
  );
}
