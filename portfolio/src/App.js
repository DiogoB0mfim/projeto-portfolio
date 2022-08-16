import "./GlobalStyles/GlobalStyles.css";
import Header from "./Sections/Header/Header";
import Home from "./Sections/Home/Home";
import About from "./Sections/About/About";

const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
    </div>
  );
}

export default App;
