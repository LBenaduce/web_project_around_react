
export default function Card({ card }) {
  const { name, link } = card;
  return (
    <li className="card">
      <img className="card__image" src={link} alt={name} />
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button className="card__like-button" type="button" />
      </div>
    </li>
  );
}

import "./Card.css";

export default function Card({ card }) {
  return (
    <li className="card">
      <img
        src={card.link}
        alt={card.name}
        className="card__image"
      />
      <div className="card__description">
        <h2 className="card__title">{card.name}</h2>
      </div>
    </li>
  );
}
