import "./GlobalStyles/GlobalStyles.css";
import Header from "./Sections/Header/Header";
import Home from "./Sections/Home/Home";
import About from "./Sections/About/About";
import Projects from "./Sections/Projects/Projects";

const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
