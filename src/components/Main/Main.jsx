import { useState } from "react";
import Profile from "../Profile/Profile";
import Card from "../Card/Card";
import Popup from "../Popup/Popup";
import EditProfile from "../Popup/components/EditProfile/EditProfile";
import EditAvatar from "../Popup/components/EditAvatar/EditAvatar";
import NewCard from "../Popup/components/NewCard/NewCard";

const initialCards = [
  {
    isLiked: false,
    _id: "1",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    isLiked: false,
    _id: "2",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
];

export default function Main() {
  const [popup, setPopup] = useState(null);
  const [cards] = useState(initialCards);

  const handleEditProfileClick = () => setPopup("edit-profile");
  const handleAddPlaceClick = () => setPopup("new-card");
  const handleEditAvatarClick = () => setPopup("edit-avatar");
  const closeAllPopups = () => setPopup(null);

  return (
    <main className="content">
      <Profile
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />

      <section className="cards">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card key={card._id} card={card} />
          ))}
        </ul>
      </section>

      {popup === "edit-profile" && (
        <Popup title="Edit profile" onClose={closeAllPopups}>
          <EditProfile />
        </Popup>
      )}

      {popup === "new-card" && (
        <Popup title="New place" onClose={closeAllPopups}>
          <NewCard />
        </Popup>
      )}

      {popup === "edit-avatar" && (
        <Popup title="Change profile picture" onClose={closeAllPopups}>
          <EditAvatar />
        </Popup>
      )}
    </main>
  );
}
