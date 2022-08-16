import "./homeStyles.css"
import memoji from "../../Assets/zyro-image.png"
import linkedin from "../../Assets/linkedin.png"
import github from "../../Assets/github.png"
const Home = () => {
    
    return (
            <div className="div-presentation">
                <hgroup>
                    <h2>OLÁ, EU SOU</h2>
                    <h1>Diogo Bomfim</h1>
                    <h2>DESENVOLVEDOR FRONT-END.</h2>
                    <div className="div-buttons">
                        <button 
                            className="btn-linkedin">
                            <img src={linkedin} alt="icone linkedin"/>LinkedIn
                        </button>
                        <button 
                            className="btn-github">
                            <img src={github} alt="icone github"/>GitHub
                        </button>
                    </div>
                </hgroup>
                <img className="img-me" src={memoji} alt="icone pessoa"/>
            </div>
    )
}

export default Home;