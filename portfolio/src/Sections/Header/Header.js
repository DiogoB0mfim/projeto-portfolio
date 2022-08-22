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
  //window.scrollTo(0, 750)
  const scrollTop = (param) => {
    window.scrollTo(0, param)
    setToggleMenu("disabled")
  }

  return (
    <header id="header">
      <a id="logo">{"</Diogo>"}</a>
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
            <a onClick={() => scrollTop(0)}>Home</a>
          </li>
          <li>
            <a href="#about-section" onClick={() => setToggleMenu("disabled")}>Sobre mim</a>
          </li>
          <li>
            <a href="#project-section" onClick={() => setToggleMenu("disabled")}>Projetos</a>
          </li>
          <li>
            <a href="#tech-section" onClick={() => setToggleMenu("disabled")}>Tecnologias</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
