import "./aboutStyles.css"
import mehappy from "../../Assets/mehappy.PNG"
import cloud from "../../Assets/cloud.png"
import mail from "../../Assets/mail.png"

const About = () => {
    
    return (
        <div id="about-section" className="div-about">
            <img src={mehappy} className="me-happy"/>
            <div className="container-about">
                <h1 className="about-h1">SOBRE MIM</h1>
                <h3>Aracaju - SE</h3>
                <p>Sou desenvolvedor Front-end em formação. Desde o início do ano venho 
                    aprimorando meus conhecimentos em desenvolvimento web e realizando vários projetos, tanto individuais quanto 
                    em equipe. Venho me dedicando cada vez mais a área pois sempre gostei bastante de lógica e resolver problemas.</p>
                <div className="div-btn">
                    
                    <a href="https://drive.google.com/file/d/1H---Et8yZ1phzMuJR7KAAJk_rN2R4_aY/view?usp=download" target="blank">
                        <button className="btn-resume">
                            <img src={cloud}/>
                            Currículo
                        </button>
                    </a>
                    
                    <a href="mailto:diogohbomfim@gmail.com?Subject=Olá, desejo entrar em contato" target="blank">
                        <button 
                            className="btn-email">
                            <img src={mail}/>
                            E-mail
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About;