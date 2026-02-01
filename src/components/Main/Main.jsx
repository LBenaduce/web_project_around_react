import "./Main.css";
import Profile from "../Profile/Profile";
import Card from "../Card/Card";

export default function Main({
  cards,
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  onCardLike,
  onCardDelete,
}) {
  return (
    <main className="content">
      {/* Seção do perfil */}
      <Profile
        onEditProfile={onEditProfile}
        onAddPlace={onAddPlace}
        onEditAvatar={onEditAvatar}
      />

      {/* Seção dos cards */}
      <section className="cards" aria-label="Cards de lugares">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}
