import "./aboutStyles.css"
import mehappy from "../../Assets/mehappy.PNG"
import cloud from "../../Assets/cloud.png"
import mail from "../../Assets/mail.png"

const About = () => {
    
    return (
        <div id="about-section" className="div-about">
            <img src={mehappy} className="me-happy"/>
            <div className="container-about">
                <h2 className="about-h2">SOBRE MIM</h2>
                <h3>Aracaju - SE</h3>
                <p>Sou desenvolvedor Front-end em formação. Desde o início do ano venho 
                    aprimorando meus conhecimentos em desenvolvimento web e realizando vários projetos, tanto individuais quanto 
                    em equipe. Venho me dedicando cada vez mais a área pois sempre gostei bastante de lógica e resolver problemas.</p>
                <div className="div-btn">
                    <button 
                        className="btn-resume">
                        <img src={cloud}/>
                        Currículo
                    </button>
                    <button 
                    className="btn-email">
                    <img src={mail}/>
                    E-mail
                    </button>
                </div>
            </div>
        </div>
    )
}

export default About;