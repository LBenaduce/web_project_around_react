import { useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";

function App() {
  // cards fake só pra layout (depois você troca pelo fetch/API da sprint)
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

  // estados dos popups
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isAddPlaceOpen, setIsAddPlaceOpen] = useState(false);
  const [isEditAvatarOpen, setIsEditAvatarOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState(null);

  function closeAllPopups() {
    setIsEditProfileOpen(false);
    setIsAddPlaceOpen(false);
    setIsEditAvatarOpen(false);
    setSelectedCard(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
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
        onEditProfile={() => setIsEditProfileOpen(true)}
        onAddPlace={() => setIsAddPlaceOpen(true)}
        onEditAvatar={() => setIsEditAvatarOpen(true)}
        onCardClick={handleCardClick}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
      />

      <Footer />

      {/* Popup Edit Profile */}
      <Popup
        name="edit-profile"
        title="Edit profile"
        isOpen={isEditProfileOpen}
        onClose={closeAllPopups}
      >
        {/* Aqui entra seu form do popup */}
        <form className="popup__form">
          <input className="popup__input" placeholder="Name" />
          <input className="popup__input" placeholder="About" />
          <button className="popup__save-button" type="submit">
            Save
          </button>
        </form>
      </Popup>

      {/* Popup Add Place */}
      <Popup
        name="add-place"
        title="New place"
        isOpen={isAddPlaceOpen}
        onClose={closeAllPopups}
      >
        <form className="popup__form">
          <input className="popup__input" placeholder="Title" />
          <input className="popup__input" placeholder="Image link" />
          <button className="popup__save-button" type="submit">
            Create
          </button>
        </form>
      </Popup>

      {/* Popup Edit Avatar */}
      <Popup
        name="edit-avatar"
        title="Change profile picture"
        isOpen={isEditAvatarOpen}
        onClose={closeAllPopups}
      >
        <form className="popup__form">
          <input className="popup__input" placeholder="Avatar link" />
          <button className="popup__save-button" type="submit">
            Save
          </button>
        </form>
      </Popup>

      {/* Image Popup (preview do card) */}
      <Popup name="image" isOpen={Boolean(selectedCard)} onClose={closeAllPopups}>
        {selectedCard && (
          <figure className="popup__figure">
            <img className="popup__image" src={selectedCard.link} alt={selectedCard.name} />
            <figcaption className="popup__caption">{selectedCard.name}</figcaption>
          </figure>
        )}
      </Popup>
    </div>
  );
}

export default App;
