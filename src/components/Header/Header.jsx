import logo from "../../images/around-the-us.png";

export default function Header() {
  return (
    <header className="header page__section">
      <img
        src={logo}
        alt="Around the U.S"
        className="logo header__logo"
      />
    </header>
  );
}
