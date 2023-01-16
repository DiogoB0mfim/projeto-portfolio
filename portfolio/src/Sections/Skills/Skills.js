import "./skillsStyles.css";
import { useState } from "react";
// import icones
import css from "../../Assets/css-tech.png";
import js from "../../Assets/js-tech.png";
import typeScript from "../../Assets/typescript-tech.png";
import react from "../../Assets/react-tech.png";
import material from "../../Assets/material-tech.png";
import styled from "../../Assets/styled-tech.png";
import git from "../../Assets/git-tech.png";
import mysql from "../../Assets/mysql-tech.png"

const Skills = () => {
  const [description, setDescription] = useState("*Passe o mouse ou clique nos ícones para ler*");
  const defaultDescription = "*Passe o mouse ou clique nos ícones para ler*"
  
  return (
    <div id="tech-section" className="div-tecnologies">
      <div className="container-title-about">
        <h1>Tecnologias</h1>
        <div className="description">
            <p>{description}</p>
        </div>
      </div>
      <div className="container-tecnologies">
        <img 
            src={mysql} 
            alt="icone-mysql" 
            onMouseOver={() => setDescription("MySQL é um sistema de gerenciamento de banco de dados relacional (RDBMS) de código aberto amplamente utilizado na web.")}
            onMouseOut={() => setDescription(defaultDescription)} 
            />
        <img 
            src={css} 
            alt="icone-css" 
            onMouseOver={() => setDescription("CSS é um mecanismo para adicionar estilo a um documento web. O código CSS pode ser aplicado diretamente nas tags ou ficar contido dentro das tags <style>.")}
            onMouseOut={() => setDescription(defaultDescription)} 
        />
        <img 
            src={typeScript} 
            alt="icone-typeScript" 
            onMouseOver={() => setDescription("TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.")}
            onMouseOut={() => setDescription(defaultDescription)} 
            />
        <img 
            src={js} 
            alt="icone-js" 
            id="jsTech" 
            onMouseOver={() => setDescription("JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.")}
            onMouseOut={() => setDescription(defaultDescription)} 
        />
        <img 
            src={git} 
            alt="icone-git" 
            onMouseOver={() => setDescription("Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software, mas pode ser usado para registrar o histórico de edições de qualquer tipo de arquivo.")}
            onMouseOut={() => setDescription(defaultDescription)} 
        />
        <img 
            src={react} 
            alt="icone-react" 
            onMouseOver={() => setDescription("O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.")}
            onMouseOut={() => setDescription(defaultDescription)} 
        />
        <img 
            src={material}
            alt="icone-material" 
            onMouseOver={() => setDescription("Material-UI é uma biblioteca que nos permite importar e usar diferentes componentes para criar uma interface de usuário em nossos aplicativos React.")}
            onMouseOut={() => setDescription(defaultDescription)} 
            />
        <img 
            src={styled} 
            alt="icone-styled" 
            onMouseOver={() => setDescription("Styled-components é uma biblioteca popular que é usada para estilizar aplicativos React. Ele permite que você crie componentes personalizados escrevendo CSS em seu JavaScript.")}
            onMouseOut={() => setDescription(defaultDescription)} 
        />
      </div>
    </div>
  );
};

export default Skills;


