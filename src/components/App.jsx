import { useState } from "react";

import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

export default function App() {
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

  function handleCardLike(card) {
    setCards((prev) =>
      prev.map((c) => (c._id === card._id ? { ...c, isLiked: !c.isLiked } : c))
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
        onEditProfile={() => {}}
        onAddPlace={() => {}}
        onEditAvatar={() => {}}
        onCardClick={() => {}}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
      />

      <Footer />
    </div>
  );
}
