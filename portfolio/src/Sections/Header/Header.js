import { useState } from "react";
import "./headerStyles.css";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState("disabled")

  const toggleState = () => {
    if (toggleMenu === "disabled") {
      setToggleMenu("active");
    } else {
      setToggleMenu("disabled");
    }
  }

  return (
    <header id="header">
      <a id="logo" href="/">{"</Diogo>"}</a>
      <nav id="nav" className={toggleMenu}>
        <button
          onClick={() => toggleState()}
          aria-label="Abrir Menu"
          id="btn-mobile"
          aria-haspopup="true"
          aria-controls="menu"
          aria-expanded="false"
        >
          <span id="hamburger"></span>
        </button>
        <ul id="menu" role="menu">
          <li>
            <a onClick={() => setToggleMenu("disabled")} href="/">Home</a>
          </li>
          <li>
            <a onClick={() => setToggleMenu("disabled")} href="#about-section">Sobre mim</a>
          </li>
          <li>
            <a onClick={() => setToggleMenu("disabled")} href="/">Projetos</a>
          </li>
          <li>
            <a onClick={() => setToggleMenu("disabled")} href="/">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
