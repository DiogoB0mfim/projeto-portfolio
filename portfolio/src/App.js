import "./GlobalStyles/GlobalStyles.css";
import Header from "./Sections/Header/Header";
import Home from "./Sections/Home/Home";
import About from "./Sections/About/About";
import Projects from "./Sections/Projects/Projects";
import Skills from "./Sections/Skills/Skills";
import Footer from "./Sections/Footer/Footer";

const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <Projects/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;
