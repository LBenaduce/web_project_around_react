import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import api from "../../utils/api";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo().then(setCurrentUser).catch(console.error);
    api.getInitialCards().then(setCards).catch(console.error);
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      <Header />
      <Main cards={cards} />
      <Footer />
    </CurrentUserContext.Provider>
  );
}

export default App;
